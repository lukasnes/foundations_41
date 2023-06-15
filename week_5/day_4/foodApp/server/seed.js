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
    seed: (req,res) => {
        sequelize.query(`
            DROP TABLE IF EXISTS cart_foods;
            DROP TABLE IF EXISTS carts;
            DROP TABLE IF EXISTS foods;
            DROP TABLE IF EXISTS users;

            CREATE TABLE users(
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(20) NOT NULL,
                password VARCHAR(100) NOT NULL,
                email VARCHAR(50) NOT NULL
            );

            CREATE TABLE foods(
                food_id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                description TEXT,
                price FLOAT NOT NULL
            );

            CREATE TABLE carts(
                cart_id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(user_id),
                total FLOAT NOT NULL
            );

            CREATE TABLE cart_foods(
                cart_food_id SERIAL PRIMARY KEY,
                cart_id INTEGER REFERENCES carts(cart_id),
                food_id INTEGER REFERENCES foods(food_id)
            );

            INSERT INTO users(username,password,email)
            VALUES('Jane Doe','pass','fake@fakemail.com'),
            ('HungryHippo2030','hhpass','hippo@hippomail.com'),
            ('PrincessRockNRoll','ePresley','rock@rockstar.com'),
            ('Nice','niiiice','sweet@dopemail.com');

            INSERT INTO foods(name,description,price)
            VALUES('Tomato','Red fruit that is totally not a fruit',1.99),
            ('Watermelon','Delicious, but is really just water',5.99),
            ('Avocados','I do not know what these go into',30.99),
            ('Pineapple','Great on pizza',1.99),
            ('Banana','Great for replacing variable names',0.99),
            ('Brussels sprouts','I really grew into these',0.99);

            INSERT INTO carts(user_id,total)
            VALUES (1,0.00),
            (2,0.00),
            (3,0.00),
            (4,0.00);
        `).then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}