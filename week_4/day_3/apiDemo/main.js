const select = document.querySelector('select')
const pokeContainer = document.querySelector('#poke-container')

const capitalize = str => {
    return str[0].toUpperCase() + str.slice(1)
}

const getFirstGen = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            console.log(response.data.results)
            let { results } = response.data
            results.forEach((pokeObj,index) => {
                let option = document.createElement('option')
                let { name } = pokeObj
                option.value = name
                option.textContent = `#${index + 1} ` + capitalize(name)
                select.appendChild(option)
            })
        })  
        .catch(err => console.log(err)) 
}

const getMon = evt => {
    console.log(evt.target.value)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${evt.target.value}`)
        .then(response => {
            console.log(response.data)
            let { name, id, sprites, types } = response.data
            console.log(name, id, sprites)
            let { front_default: front } = sprites
            console.log(front)
            pokeContainer.innerHTML = `
                <h1>#${id} ${capitalize(name)}</h1>
                <img src="${front}"/>
                ${types.map(type => {
                    return `<h2>${capitalize(type.type.name)}</h2>`
                }).join('')}
            `
        })
        .catch(err => console.log(err))
}


select.addEventListener('change', getMon)
getFirstGen()