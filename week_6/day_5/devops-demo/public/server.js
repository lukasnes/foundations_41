const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
// include and initialize the rollbar library with your access token
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '4e1c3815b7414305b07775e0fed48e87',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
    rollbar.log('student list sent',students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body
   rollbar.log(req.body)
   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '') {
           students.push(name)
           rollbar.info('new student added')
           res.status(200).send(students)
       } else if (name === ''){
        rollbar.critical('attempted empty name')
           res.status(400).send('You must enter a name.')
       } else {
        rollbar.error('attemped duplicate student')
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
        rollbar.error(err)
       console.log(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
