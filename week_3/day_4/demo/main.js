const circle = document.querySelector('#circle')
const btns = document.querySelectorAll('button')

const colors = {
    red: "#ff595e",
    green: "#8ac926",
    blue: "#1982c4"
}

// console.log(btns[1])

// const bigCircle = evt => {
//     console.log(evt.target)
    
//     evt.target.classList.add('big')
// }

// const smallCircle = evt => {
//     console.log(evt.target)
//     evt.target.classList.remove('big')
// }

const toggleCircle = evt => {
    evt.target.classList.toggle('big')
}

const changeColor = evt => {
    console.log(evt.target)
    const circles = document.querySelectorAll('div')
    for(let i = 0; i < circles.length; i++){
        circles[i].style.backgroundColor = colors[evt.target.id]
    }
}

// console.log(circle)
circle.addEventListener('mouseover', toggleCircle)
circle.addEventListener('mouseout', toggleCircle)

for(let i = 0; i < btns.length; i++){
    console.log(btns[i])
    btns[i].addEventListener('click', changeColor)
}

//===========================================
const main = document.querySelector('main')

const createCoordinate = () => {
    let randomCoordinate = Math.floor(Math.random() * 100)
    return `${randomCoordinate}%`
}

const addMoreCircles = evt => {
    let newCircle = document.createElement('div')
    newCircle.style.top = createCoordinate()
    newCircle.style.right = createCoordinate()

    console.log(newCircle)
    newCircle.addEventListener('click', (event) => {
        console.log(event.target)
        event.target.remove()
    })

    main.appendChild(newCircle)
}


circle.addEventListener('click', addMoreCircles)