import { logger } from "../../services/logger.service.js"
import { boardService } from "./board.service.js"

export async function updateBoards(req, res) {
    try {
        const boards = req.body
        console.log('updateBoards ~ boards:', boards)
        const updatedBoards = await boardService.updateBoardsOrder(boards)
        res.json(updatedBoards)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(400).send({ err: 'Failed to update board' })
    }
}