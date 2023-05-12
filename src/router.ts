import { Router } from 'express'
import { reportRouter } from './entities'

const router = Router({ mergeParams: true })

router.use('/reports', reportRouter)

export default router
