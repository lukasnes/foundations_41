const decoder = str => {
    let decoded = ''

    for(let i = 0; i < str.length; i++){
        if(Number.isInteger(parseInt(str[i]))){
            i += parseInt(str[i])
        } else {
            decoded += str[i]
        }
    }

    return decoded
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))