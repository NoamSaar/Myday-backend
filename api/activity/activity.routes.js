import express from 'express'
import { log } from '../../middlewares/logger.middleware.js'
import { getActivities, getActivityById, addActivity } from './activity.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getActivities)
router.get('/:id', getActivityById)
router.post('/', addActivity)
// router.put('/', updateActivity)
// router.delete('/:id', removeActivity)


export const activityRoutes = router
