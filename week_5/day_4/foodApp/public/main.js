const main = document.querySelector('main')
let imgURL = './images/bananas.jpg'

const displayFoods = foodArr => {
    main.innerHTML = ''
    foodArr.forEach(foodObj => {
        let foodCard = document.createElement('div')
        let { food_id, name, description, price } = foodObj
        foodCard.classList.add('food-card')
        foodCard.innerHTML = `
            <h2 class="food-heading">
                <p class="food-id">
                    ${food_id}
                </p>
                <p class="food-name">
                    ${name}
                </p>
            </h2>
            <img src="${imgURL}" alt="${name}" class="food-img"/>
            <p class="food-desc">${description}</p>
            <div class="price-container">
                <p class="price">$${price}</p>
            </div>
        `
        main.appendChild(foodCard)
    })
}

const getFoods = () => {
    axios.get('http://localhost:4000/api/food')
        .then(response => {
            displayFoods(response.data)
        }).catch(err => console.log(err))
}

getFoods()