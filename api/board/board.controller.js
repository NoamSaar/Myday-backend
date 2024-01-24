import { boardService } from './board.service.js'
import { logger } from '../../services/logger.service.js'
import { asyncLocalStorage } from '../../services/als.service.js'

export async function getBoards(req, res) {
  try {
    logger.debug('Getting Boards:', req.query)
    const boards = await boardService.query()
    res.json(boards)
  } catch (err) {
    logger.error('Failed to get boards', err)
    res.status(400).send({ err: 'Failed to get boards' })
  }
}

export async function getBoardById(req, res) {
  try {
    const boardId = req.params.id
    const board = await boardService.getById(boardId)
    res.json(board)
  } catch (err) {
    logger.error('Failed to get board', err)
    res.status(400).send({ err: 'Failed to get board' })
  }
}

export async function addBoard(req, res) {
  const { loggedinUser } = asyncLocalStorage.getStore()

  try {
    const board = req.body
    board.createdBy = loggedinUser
    const addedBoard = await boardService.add(board)
    res.json(addedBoard)
  } catch (err) {
    logger.error('Failed to add board', err)
    res.status(400).send({ err: 'Failed to add board' })
  }
}


export async function updateBoard(req, res) {
  try {
    const board = req.body
    const updatedBoard = await boardService.update(board)
    res.json(updatedBoard)
  } catch (err) {
    logger.error('Failed to update board', err)
    res.status(400).send({ err: 'Failed to update board' })

  }
}

export async function removeBoard(req, res) {
  try {
    const boardId = req.params.id
    const removedId = await boardService.remove(boardId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove board', err)
    res.status(400).send({ err: 'Failed to remove board' })
  }
}

// export async function addBoardTask(req, res) {
//   const { loggedinUser } = req
//   try {
//     const boardId = req.params.id
//     const task = {
//       txt: req.body.txt,
//       by: loggedinUser
//     }
//     const savedTask = await boardService.addBoardMsg(boardId, task)
//     res.json(savedTask)
//   } catch (err) {
//     logger.error('Failed to add task to board', err)
//     res.status(400).send({ err: 'Failed to add task to board' })

//   }
// }

// export async function removeBoardTask(req, res) {
//   const { loggedinUser } = req
//   try {
//     const boardId = req.params.id
//     const { taskId } = req.params

//     const removedId = await boardService.removeBoardTask(boardId, taskId)
//     res.send(removedId)
//   } catch (err) {
//     logger.error('Failed to remove board task', err)
//     res.status(400).send({ err: 'Failed to remove board task' })

//   }
// }


