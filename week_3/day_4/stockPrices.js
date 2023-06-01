const best = arr => {
    let lowest = arr[0]
    let profit = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i]
        }

        let difference = arr[i] - lowest
        if(difference > profit){
            profit = difference
        }
    }

    return profit
}



console.log(best([15, 10, 20, 22, 1, 9])) // 12
console.log(best([1, 2, 3, 4, 5])) // 4
console.log(best([2, 3, 10, 6, 4, 8, 1])) // 8
console.log(best([7, 9, 5, 6, 3, 2])) // 2
console.log(best([0, 100])) // 100
console.log(best([5, 4 , 3, 2, 1])) // 0
console.log(best([100])) // 0
console.log(best([100, 0])) // 0