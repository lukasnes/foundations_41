const hasMore = str => {
    let vowelCount = 0
    let vowels = ['a','e','i','o','u']
    str = str.toLowerCase()

    for(let i = 0; i < str.length; i++){
        // if(vowels.includes(str[i])){
        //     vowelCount++
        // }
        switch(str[i]){
            case "a":
                vowelCount++
                break;
            case "e":
                vowelCount++
                break;
            case "i":
                vowelCount++
                break;
            case "o":
                vowelCount++
                break;
            case "u":
                vowelCount++
                break;
            default:
                break;
        }
    }

    // if(str.length / 2 < vowelCount){
    //     return true
    // } else {
    //     return false
    // }

    return str.length / 2 < vowelCount
}

console.log(hasMore('aal'))
console.log(hasMore('mice'))
console.log(hasMore('car'))