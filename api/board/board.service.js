import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
import { utilService } from '../../services/util.service.js'
import mongodb from 'mongodb'
const { ObjectId } = mongodb

export const boardService = {
    remove,
    query,
    getById,
    add,
    update,
    updateBoardsOrder,
    // addBoardMsg,
    // removeBoardMsg
}

async function query() {
    try {
        const collection = await dbService.getCollection('board')
        var boardCursor = await collection.find({})

        const boards = await boardCursor.toArray()
        return boards
    } catch (err) {
        logger.error('cannot find boards', err)
        throw err
    }
}

async function getById(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        const board = collection.findOne({ _id: new ObjectId(boardId) })
        return board
    } catch (err) {
        logger.error(`while finding board ${boardId}`, err)
        throw err
    }
}

async function remove(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.deleteOne({ _id: new ObjectId(boardId) })
        return boardId
    } catch (err) {
        logger.error(`cannot remove board ${boardId}`, err)
        throw err
    }
}

async function add(board) {
    const existingBoards = await query()
    const order = existingBoards.length + 1

    try {
        const boardToSave = {
            title: board.title,
            isStarred: board.isStarred,
            archivedAt: board.archivedAt,
            createdBy: board.createdBy,
            status: board.status,
            priority: board.priority,
            members: board.members,
            groups: board.groups,
            activities: board.activities,
            titlesOrder: board.titlesOrder,
            order,
        }

        const collection = await dbService.getCollection('board')
        await collection.insertOne(boardToSave)
        return boardToSave
    } catch (err) {
        logger.error('cannot insert board', err)
        throw err
    }
}

async function update(board) {
    try {
        const boardToSave = {
            title: board.title,
            isStarred: board.isStarred,
            archivedAt: board.archivedAt,
            createdBy: board.createdBy,
            status: board.status,
            priority: board.priority,
            members: board.members,
            groups: board.groups,
            activities: board.activities,
            titlesOrder: board.titlesOrder,
            description: board.description,
            order: board.order
        }

        const collection = await dbService.getCollection('board')
        await collection.updateOne({ _id: new ObjectId(board._id) }, { $set: boardToSave })
        return { ...boardToSave, _id: board._id }
    } catch (err) {
        logger.error(`cannot update board ${board._id}`, err)
        throw err
    }
}

async function updateBoardsOrder(boards) {
    try {
        const collection = await dbService.getCollection('board')
        await Promise.all(boards.map(async (board, index) => {
            await collection.updateOne(
                { _id: new ObjectId(board._id) },
                { $set: { order: index + 1 } }
            )
        }))
        return boards
    } catch (err) {
        logger.error('cannot update boards order', err)
        throw err
    }
}

// async function addBoardMsg(boardId, msg) {
//     try {
//         msg.id = utilService.makeId()
//         const collection = await dbService.getCollection('board')
//         await collection.updateOne({ _id: new ObjectId(boardId) }, { $push: { msgs: msg } })
//         return msg
//     } catch (err) {
//         logger.error(`cannot add board msg ${boardId}`, err)
//         throw err
//     }
// }

// async function removeBoardMsg(boardId, msgId) {
//     try {
//         const collection = await dbService.getCollection('board')
//         await collection.updateOne({ _id: new ObjectId(boardId) }, { $pull: { msgs: { id: msgId } } })
//         return msgId
//     } catch (err) {
//         logger.error(`cannot add board msg ${boardId}`, err)
//         throw err
//     }
// }

