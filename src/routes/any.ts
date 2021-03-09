import { Router } from 'express'

import AnyController from '@controllers/AnyController'

const router = Router()

router.get('/any', AnyController.anyMethod)

export default router