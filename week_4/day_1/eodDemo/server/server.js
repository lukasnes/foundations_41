const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let videoGame = {
    name: "Legend of Zelda",
    releaseDate: "May 12th, 2023",
    console: "Nintendo Switch",
    description: "The Legend of Zelda: Tears of the Kingdom is an open world adventure game where you play as a hero named Link, saving the world from a great evil.",
    imageURL: "https://www.zeldadungeon.net/wp-content/uploads/2022/09/totk_1270x720.jpg"
}
let mario = {
    name: "Super Mario Bros",
    releaseDate: "sometime in the 90s",
    console: "Nintendo Entertainment System",
    description: "Super Mario Bros 3 is a platforming game where you play the titular hero Mario, and save Princess Peach from an evil turtle named Bowser.",
    imageURL: "https://m.media-amazon.com/images/I/613Py5NEsSL._AC_UF894,1000_QL80_.jpg"
}

app.get('/api/test', (req,res) => {
    res.status(200).send({ name:"Lukas Nesittka" })
})

app.get('/game/:game', (req,res) => {
    console.log(req.params)
    let { game } = req.params
    if(game === 'zelda'){
        res.status(200).send(videoGame)
    } else if (game === 'mario') {
        res.status(200).send(mario)
    } else {
        res.status(400).send('Not a valid game.')
    }
})



app.listen(4000, console.log(`Server running on localhost:4000`))