const cypher = str => {
    let decyphered = ''
    let num = parseInt(str[0])
    str = str.slice(1)

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

    for(let i = 0; i < str.length; i++){
        let index = alphabet.findIndex((letter) => letter === str[i])
        index += num
        if(index > 25){
            index -= 26
        }
        decyphered += alphabet[index]
    }

    return decyphered
}

console.log(cypher("2fcjjmz"))