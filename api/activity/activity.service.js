import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
import mongodb from 'mongodb'
const { ObjectId } = mongodb

export const activityService = {
    query,
    getById,
    add,
}

async function query(filterBy = {}) {
    console.log('hi')
    try {
        const criteria = {}

        if (filterBy.boardId) {
            criteria['board._id'] = filterBy.boardId
        }
        if (filterBy.taskId) {
            criteria['task.id'] = filterBy.taskId
        }

        console.log('criteria:', criteria)
        const collection = await dbService.getCollection('activity')
        console.log('query ~ collection:', collection)
        const activities = await collection.find(criteria).toArray()
        return activities
    } catch (err) {
        logger.error('cannot find activities', err)
        throw err
    }
}

async function getById(activityId) {
    try {
        const collection = await dbService.getCollection('activity')
        const activity = collection.findOne({ _id: new ObjectId(activityId) })
        return activity
    } catch (err) {
        logger.error(`while finding activity ${activityId}`, err)
        throw err
    }
}

async function add(activity) {
    try {
        const activityToSave = {
            type: activity.type,
            entity: activity.entity,
            txt: activity.txt,
            createdAt: activity.createdAt,
            byMember: activity.byMember,
            board: activity.board,
            group: activity.group,
        }

        if (activity.task) activityToSave.task = activity.task
        if (activity.from) activityToSave.from = activity.from
        if (activity.to) activityToSave.from = activity.to

        const collection = await dbService.getCollection('activity')
        await collection.insertOne(activityToSave)
        return activityToSave
    } catch (err) {
        logger.error('cannot insert activity', err)
        throw err
    }
}