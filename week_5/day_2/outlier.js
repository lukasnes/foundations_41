let arrOne = [2, 4, 0, 100, 4, 11, 2602, 36]
let arrTwo = [160, 3, 1719, 19, 11, 13, -21]


const outlier = arr => {
    let evens = []
    let odds = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    // if(evens.length === 1){
    //     return evens[0]
    // } else {
    //     return odds[0]
    // }

    return evens.length === 1 ? evens[0] : odds[0]
}

console.log(outlier(arrOne))
console.log(outlier(arrTwo))
let number = 60
if(number < 50){
    console.log('Number is less than 50')
} else {
    console.log('Number is 50 or greater')
}

number < 50 ? console.log('Number is less than 50') : console.log('Number is 50 or greater')