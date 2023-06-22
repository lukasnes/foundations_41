const castle = document.querySelector('img')

const welcome = evt => {
    alert('Welcome to my castle! There are many like it, but this one is mine.')
}

castle.addEventListener('click', welcome)