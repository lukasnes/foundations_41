let backpack = []

backpack.push('snacks')
backpack.push('sunblock')
backpack.push('water')
backpack.push('sunglasses','hat')


backpack.splice(1,1)

backpack.unshift('shiny rock')


let fannyPack = backpack.splice(0,3)

// console.log(backpack)
console.log(fannyPack)
// console.log(fannyPack[0])

for(let x = 0; x < backpack.length; x++){
    // console.log(backpack[x])
}
for(let x = 0; x < fannyPack.length;){
    let item = fannyPack.shift()
    // console.log(fannyPack)
   backpack.push(item)
}

// console.log(backpack)
let arr = [1,2,3,4,5]
let newArr = arr
let sliceArr = arr.slice()
newArr.pop()
// console.log(arr)
// console.log(sliceArr)

arr.unshift('arg1','arg2','ect')   // attaches items to the front of an array takes any number of arguments
arr.push('arg1','arg2','ect') // attaches items to the end of an array takes any number of arguments
arr.shift() // removes the first item from an array takes no arguments
arr.pop()   // removes the last item from an array takes no arguments

arr.slice(0,2) // creates a copy of a part of an array, takes a starting index and an ending index, ending index is not included in copy. if left empty will copy entire array
    //does not change original data
arr.splice(1,1,'new value') // removes/inserts values into an array, take up to 3 arguments. a starting index, the number of items removed, and any new values to be inserted

// let guessMe = 54

// while (guessMe < 100) {
//     console.log('----------')
//     if (guessMe % 4 == 0 || guessMe % 5 == 0) {
//         console.log(`guessMe is ${guessMe} which is divisible by 4 or 5.  Added 25.`)
//         guessMe += 25
//     } else if (guessMe % 3 == 0) {
//         console.log(`guessMe is ${guessMe} which is divisible by 3.  Subtracted 27.`)
//         guessMe -= 27
//     } else {
//         console.log(`Added 3.`)
//         guessMe += 3
//     }
//     guessMe += 22
//     console.log(`guessMe is now ${guessMe}.`)
// }