require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { SERVER_PORT } = process.env
const { seed } = require('./seed.js')
const { getFoods } = require('./controller.js')

app.post('/seed', seed)

app.get('/api/food', getFoods)


app.listen(SERVER_PORT, console.log(`Server running on ${SERVER_PORT}`))