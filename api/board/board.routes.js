import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getBoards, getBoardById, addBoard, updateBoard, removeBoard } from './board.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getBoards)
router.get('/:id', getBoardById)
router.post('/', addBoard)
router.put('/', updateBoard)
router.delete('/:id', removeBoard)

//tasks
// router.get('/:id/task/:taskId', getBoardTaskById)
// router.post('/:id/task', addBoardTask)
// router.put('/:id/task', updateBoardTask)
// router.delete('/:id/task/:taskId', removeBoardTask)

export const boardRoutes = router
