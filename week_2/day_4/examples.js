let arr = [1,2,3,4,5,5,6,7]


// arr.forEach((fruit,index, arr)=>{
//     arr.push(fruit)
// })


let changedArr = arr.map((element)=> element + element)

// console.log(changedArr)
// console.log(arr)

let filteredArr = arr.filter((element) => {
    if(element % 2 === 0){
        return false
    } else {return true}
})

// console.log(filteredArr)

let reducedArr = arr.reduce((acc, cur)=>{
    console.log('-------------')
    console.log('my accumulator is ' + acc)
    console.log('my current value is ' + cur)
    console.log('i add them together, so my next accumulator will be '+ (acc + cur))
   return acc + cur
},0)

// console.log(reducedArr)

const numArray = [0, 1, 2, 3, 4]

const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)

// console.log(myNum)