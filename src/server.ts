import express from 'express'
import AnyController from '@controllers/AnyController'

const app = express()

app.get('/', (request, response) => {
    return response.json({ message: 'Teste' })
})

app.listen(3001)