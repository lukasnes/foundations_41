require('dotenv').config()
const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getFoods: (req,res) => {
        sequelize.query(`
            SELECT *
            FROM foods;
        `).then(dbRes => {
            console.log(dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    }
}