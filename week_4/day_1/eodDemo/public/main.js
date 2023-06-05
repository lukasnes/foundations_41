const btns = document.querySelectorAll('button')
const main = document.querySelector('main')


const getGame = evt => {
    axios.get(`http://localhost:4000/game/${evt.target.id}`)
        .then(response => {
            console.log(response.data)  
            displayGame(response.data) 
        })
        .catch(err => console.log(err))
}

const displayGame = game => {
    main.innerHTML = ""
    let { name, releaseDate, console, description, imageURL } = game
    const gameCard = document.createElement('div')
    gameCard.innerHTML = `
        <h1>${name}</h1>
        <img src="${imageURL}" onclick="gameAlert(event,'${name}')"/>
        <h2>Released ${releaseDate} for the ${console}</h2>
        <p>${description}</p>
    `
    main.appendChild(gameCard)
}

const gameAlert = (evt,gameName) => {
    alert(`I really love ${gameName}`)
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',getGame)
}