import { logger } from '../../services/logger.service.js'
import { socketService } from '../../services/socket.service.js'
import { userService } from '../user/user.service.js'
import { authService } from '../auth/auth.service.js'
import { reviewService } from './review.service.js'
import { asyncLocalStorage } from '../../services/als.service.js'

export async function getReviews(req, res) {
    try {
        const reviews = await reviewService.query(req.query)
        res.send(reviews)
    } catch (err) {
        logger.error('Cannot get reviews', err)
        res.status(400).send({ err: 'Failed to get reviews' })
    }
}

export async function deleteReview(req, res) {
    const { loggedinUser } = asyncLocalStorage.getStore()
    try {
        const deletedCount = await reviewService.remove(req.params.id)
        if (deletedCount === 1) {
            socketService.broadcast({ type: 'review-removed', data: req.params.id, userId: loggedinUser._id })

            res.send({ msg: 'Deleted successfully' })
        } else {
            res.status(400).send({ err: 'Cannot remove review' })
        }
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(400).send({ err: 'Failed to delete review' })
    }
}


export async function addReview(req, res) {

    var { loggedinUser } = req

    try {
        var review = req.body
        review.byUserId = loggedinUser._id
        review = await reviewService.add(review)

        // prepare the updated review for sending out
        review.aboutUser = await userService.getById(review.aboutUserId)

        // Give the user credit for adding a review
        // var user = await userService.getById(review.byUserId)
        // user.score += 10
        loggedinUser.score += 10

        loggedinUser = await userService.update(loggedinUser)
        review.byUser = loggedinUser

        // User info is saved also in the login-token, update it
        const loginToken = authService.getLoginToken(loggedinUser)
        res.cookie('loginToken', loginToken)


        // TODO: Send an emit to all users but the sender about a review added
        socketService.broadcast({ type: 'review-added', data: review, userId: loggedinUser._id })
        // TODO: Emit a msg to the user the review is written about
        socketService.emitToUser({ type: 'review-about-you', data: 'A review added about you!', userId: review.aboutUserId })

        const fullUser = await userService.getById(loggedinUser._id)
        // TODO: Emit an updated user to everyone watching his profile
        socketService.emitTo({ type: 'user-updated', data: fullUser, label: fullUser._id })
        delete review.aboutUserId
        delete review.byUserId

        res.send(review)

    } catch (err) {
        logger.error('Failed to add review', err)
        res.status(400).send({ err: 'Failed to add review' })
    }
}

