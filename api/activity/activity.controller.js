import { logger } from "../../services/logger.service.js"
import { activityService } from "./activity.service.js"

export async function getActivities(req, res) {
    try {
        logger.debug('Getting Activities:', req.query)

        const filterBy = {
            boardId: req.query.boardId || '',
            taskId: req.query.taskId || '',
        }

        const activities = await activityService.query(filterBy)
        res.json(activities)
    } catch (err) {
        logger.error('Failed to get activities', err)
        res.status(400).send({ err: 'Failed to get activities' })
    }
}

export async function getActivityById(req, res) {
    try {
        const activityId = req.params.id
        const activity = await activityService.getById(activityId)
        res.json(activity)
    } catch (err) {
        logger.error('Failed to get activity', err)
        res.status(400).send({ err: 'Failed to get activity' })
    }
}

export async function addActivity(req, res) {
    const { loggedinUser } = req

    try {
        const activity = req.body
        activity.byMember = loggedinUser
        const addedActivity = await activityService.add(activity)
        res.json(addedActivity)
    } catch (err) {
        logger.error('Failed to add activity', err)
        res.status(400).send({ err: 'Failed to add activity' })
    }
}
