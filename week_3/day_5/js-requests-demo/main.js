console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = 'http://localhost:4000'

function createCharacterCard(char) {
  let charCard = document.createElement('div') // <div> </div>
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

const getAllChars = (evt) => {
  clearCharacters()
  axios.get(baseURL + '/characters')
    .then((response) => {
      console.log(response)
      response.data.forEach(charObj => {
        createCharacterCard(charObj)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

const getChar = evt => {
  console.log(evt.target)
  clearCharacters()
  axios.get(baseURL + `/character/${evt.target.id}`)
    .then((response) => {
      console.log(response.data)
      createCharacterCard(response.data)
    })
    .catch((err) => console.log(err))
}

const getCharByAge = evt => {
  evt.preventDefault()
  clearCharacters()

  axios.get(baseURL + `/character?age=${ageInput.value}`)
    .then(response => {
      response.data.forEach(charObj => createCharacterCard(charObj))
    })
    .catch(err => console.log(err))
}

const createChar = evt => {
  evt.preventDefault()
  clearCharacters()

  let body = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikesText.value.split(',')
  }

  axios.post(baseURL + '/character', body)
    .then(response => {
      response.data.forEach(charObj => createCharacterCard(charObj))
    })
    .catch(err => console.log(err))
}


getAllBtn.addEventListener('click', getAllChars)
for(let i = 0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getChar)
}
ageForm.addEventListener('submit', getCharByAge)
createForm.addEventListener('submit', createChar)