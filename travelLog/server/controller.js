require('dotenv').config()
let places = []

const { ROLLBAR_CODE } = process.env

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: ROLLBAR_CODE,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

module.exports = {
    addPlace: (req,res) => {
        rollbar.info(`User added a new place by the name of ${req.body.place}`)
        places.push(req.body)
        res.status(200).send(places)
    }
}