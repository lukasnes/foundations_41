// Starting array
let array = [28, 43, -12, 30, -4, 4, 0]

// Write your solution below:

let addToZero = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        for(let x = i + 1; x < arr.length; x++){
            if(arr[i] + arr[x] === 0){
                return true
            }
        }
    }
    return false
}

console.log(addToZero(array))