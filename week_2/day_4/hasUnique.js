

const hasUnique = (string)=>{
    for(let i = 0; i < string.length; i++){
        for(let x = i + 1; x < string.length; x++){
            if(string[i] === string[x]){
                return false
            }
        }
    }
    return true
}

console.log(hasUnique('asdf'))


function hasUniqueChars(string){
    const mySet = new Set(string)
    console.log(mySet)

    if(string.length === mySet.size){
        return true
    } else {
        return false
    }
}

console.log(hasUniqueChars('Aabcs'))