import express from 'express'
import { updateBoards } from './boards.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.post('/reorder', updateBoards)

export const boardsRoutes = router
