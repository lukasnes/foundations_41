require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const { SERVER_PORT } = process.env



const { 
    addPlace
} = require('./controller')

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    rollbar.info('User visited the site!')
})

app.post('/api/place', addPlace)

app.listen(SERVER_PORT, console.log(`App running on ${SERVER_PORT}!`))