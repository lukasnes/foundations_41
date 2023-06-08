const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password,users[i].password)) {
          let userCopy = {...users[i]}
          delete userCopy.password
          res.status(200).send(userCopy)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        let salt = bcrypt.genSaltSync(8)
        console.log(salt)
        let hash = bcrypt.hashSync(req.body.password,salt)
        req.body.password = hash
        console.log(req.body)

        users.push(req.body)
        let userCopy = {...req.body}
        delete userCopy.password
        res.status(200).send(userCopy)
    }
}