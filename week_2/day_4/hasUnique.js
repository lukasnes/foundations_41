

const hasUnique = (string)=>{
    for(let i = 0; i < string.length; i++){             //O(n)
        for(let x = i + 1; x < string.length; x++){     //O(n)
            if(string[i] === string[x]){                //O(1)
                return false
            }
        }
    }
    return true
}

//O(n(n(1)))
//O(n^2)

console.log(hasUnique('asdf'))


function hasUniqueChars(string){
    const mySet = new Set(string)           //O(n)
    console.log(mySet)

    if(string.length === mySet.size){
        return true
    } else {
        return false
    }
}

//O(n)
console.log(hasUniqueChars('Aabcs'))