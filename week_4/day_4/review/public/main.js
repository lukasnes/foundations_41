const baseURL = 'http://localhost:4000/movies'
const movieList = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('input')

const displayMovies = movieArr => {
    movieList.innerHTML = ''

    movieArr.forEach((movieObj,index) => {
        let { title, watched } = movieObj
        let listItem = document.createElement('li')
        let movieTitle = document.createElement('span')
        let deleteBtn = document.createElement('button')

        movieTitle.textContent = title
        if(watched){
            movieTitle.classList = 'checked'
        }
        movieTitle.id = index
        movieTitle.addEventListener('click', updateMovie)

        deleteBtn.textContent = 'X'
        deleteBtn.id = index
        deleteBtn.addEventListener('click', deleteMovie)

        listItem.appendChild(movieTitle)
        listItem.appendChild(deleteBtn)

        movieList.appendChild(listItem)
    })
}

const getMovies = () => {
    axios.get(baseURL)
        .then(response => {
            displayMovies(response.data)
        })
        .catch(err => console.log(err))
}

const addMovie = (evt) => {
    evt.preventDefault()
    let bodyObj = {
        title: input.value,
        watched: false
    }

    axios.post(baseURL, bodyObj)
        .then(response => {
            displayMovies(response.data)
        })
        .catch(err => console.log(err))
}

const updateMovie = evt => {
    axios.put(`${baseURL}/${evt.target.id}`)
        .then(response => {
            displayMovies(response.data)
        })
        .catch(err => console.log(err))
}

const deleteMovie = evt => {
    axios.delete(`${baseURL}/${evt.target.id}`)
        .then(response => {
            displayMovies(response.data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', addMovie)
getMovies()