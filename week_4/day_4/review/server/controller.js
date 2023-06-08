const movies = [
    {
        title: "Interstellar",
        watched: false
    },
    {
        title: "Puss in Boots",
        watched: false
    },
    {
        title: "Across the Spiderverse",
        watched: false
    }
]

module.exports = {
    getMovies: (req,res) => {
        res.status(200).send(movies)
    },
    addMovie: (req,res) => {
        movies.push(req.body)
        res.status(200).send(movies)
    },
    updateMovie: (req,res) => {
        let { index } = req.params
        index = parseInt(index)
        // console.log(movies[index])
        movies[index].watched = !movies[index].watched
        // console.log(movies[index])
        res.status(200).send(movies)
    },
    deleteMovie: (req,res) => {
        let { index } = req.params
        movies.splice(+index,1)
        res.status(200).send(movies)
    }
}