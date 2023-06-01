const form = document.querySelector('form')
const list = document.querySelector('ul')
const message = document.querySelector('#message')

console.log(document)

const addMovie = evt => {
    evt.preventDefault()
    console.log('Form submitted')
    const inputField = document.querySelector('input')

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(movieTitle) // <li> <span> movietitle </span> </li>
    movie.appendChild(deleteBtn) // <li> <span> movietitle </span> <button> X </button> </li>
    console.log(movie)

    list.appendChild(movie) // <ul> <li> <span> movietitle </span> <button> X </button> </li> </ul>

    console.log(inputField.value)
    inputField.value = ""
}

const deleteMovie = evt => {
    console.log(evt.target.parentNode)
    evt.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

const crossOffMovie = evt => {
    console.log(evt.target)
    if(evt.target.classList.contains('checked')){
        message.textContent = "Movie unwatched!"
    } else {
        message.textContent = "Movie watched!"
    }

    evt.target.classList.toggle('checked')
}

form.addEventListener('submit', addMovie)