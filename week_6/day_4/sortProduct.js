const productSort = arr => {
    let productObj = {}
    let sortedArr = []

    for(let i = 0; i < arr.length; i++){
        let multiplier = i + 1

        productObj[arr[i] * multiplier] = arr[i]
    }

    for(let product in productObj){
        sortedArr.push(productObj[product])
    }

    return sortedArr
}

console.log(productSort([23,2,3,4,5]))

// let obj = {}

// obj[5] = 'Banana'
// obj[2] = 'Apple'

// console.log(obj)