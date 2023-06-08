const button = document.querySelector('button')
const section = document.querySelector('section')

const getResidents = evt => {
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
        .then(response => {
            let { residents } = response.data.results[0]

            residents.forEach(resident => {
                axios.get(resident)
                    .then(response => {
                        let { name } = response.data

                        let heading = document.createElement('h2')
                        heading.textContent = name

                        section.appendChild(heading)
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
}



button.addEventListener('click', getResidents)