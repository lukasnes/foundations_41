let movieDB = require('./db.json')
let globalID = 11

module.exports = {
    getAllMovies: (req,res) => {
        res.status(200).send(movieDB)
    },
    createMovie: (req,res) => {
        console.log(req.body)
        req.body.id = globalID
        movieDB.push(req.body)
        res.status(200).send(movieDB)
        globalID++
    },
    updateMovie: (req,res) => {
        console.log(req.params,req.body)
        let { id } = req.params
        let { type } = req.body
        let index = movieDB.findIndex(movie => movie.id === +id)

        if(type === 'minus' && movieDB[index].rating > 0){
            movieDB[index].rating--
        } else if(type === 'plus' && movieDB[index].rating < 5){
            movieDB[index].rating++
        } else {
            res.status(400).send('Bad request!')
            return
        }

        res.status(200).send(movieDB)
    },
    deleteMovie: (req,res) => {
        let { id } = req.params
        let index = movieDB.findIndex(movie => movie.id === +id)
        movieDB.splice(index,1)
        res.status(200).send(movieDB)
    }
}