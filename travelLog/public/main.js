const form = document.querySelector('#wishlist-form')
const input = document.querySelector('#wishlist-input')
const lists = document.querySelectorAll('.place-list')


const clearList = () => {
    for(let i = 0; i < lists.length; i++){
        lists[i].innerHTML = ''
    }
}

const displayPlaces = placeArr => {
    clearList()

    placeArr.forEach((place,index) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
            <span>${place.place}</span>
            <button>Delete</button>
        `

        lists[0].appendChild(listItem)
    })
}

const addPlace = evt => {
    evt.preventDefault()
    let place = fixCasing(input.value)
    let bodyObj = {
        place,
        visited: false
    }

    axios.post('/api/place',bodyObj)
        .then(response => {
            displayPlaces(response.data)
        }).catch(err => console.log(err))
}


form.addEventListener('submit', addPlace)
