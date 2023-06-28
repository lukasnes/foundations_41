const productSort = arr => {
    let productObj = {}                                     //O(1)
    let sortedArr = []                                      //O(1)

    for(let i = 0; i < arr.length; i++){                    //O(n)
        let multiplier = i + 1                              //O(1)

        productObj[arr[i] * multiplier] = arr[i]            //O(1)
    }

    for(let product in productObj){                         //O(n)
        sortedArr.push(productObj[product])                 //O(1)
    }

    return sortedArr                                        //O(1)
}

//O(1 + 1 + n(1 + 1) + n(1) + 1)
//O(2 + 2n + n + 1)
//O(3 + 3n)
//O(n)

// let obj = {
//     'fruit': 'banana',
//     'vegetable': 'onion'
// }

// for(let food in obj){
//     console.log(`Type: ${food}, Name: ${obj[food]}`)
// }


console.log(productSort([23,2,3,4,5]))

// let obj = {}

// obj[5] = 'Banana'
// obj[2] = 'Apple'

// console.log(obj)