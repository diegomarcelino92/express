import { Router } from 'express'

const router = Router()

router.get('/other', (request, response) => {
    return response.json({ message: 'Other Message' })
})

export default router