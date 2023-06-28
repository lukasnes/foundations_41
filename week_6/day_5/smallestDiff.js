const smallest = (arrOne,arrTwo) => {
    let diff;                                                       //O(1)

    for(let i = 0; i < arrOne.length; i++){                         //O(n)
        for(let j = 0; j < arrTwo.length; j++){                     //O(n)
            let currDiff = Math.abs(arrOne[i] - arrTwo[j])          //O(1)
            
            // if(arrOne[i] - arrTwo[j] < 0){
            //     currDiff = arrTwo[j] - arrOne[i]
            // } else {
            //     currDiff = arrOne[i] - arrTwo[j]
            // }

            console.log(`Difference: ${diff}, Current Difference: ${currDiff}`)

            if(diff === undefined || diff > currDiff){              //O(1)
                diff = currDiff                                     //O(1)
            }
        }
    }

    return diff                                                     //O(1)
}

//O(1 + n(n(1 + 1(1))) + 1)
//O(1 + n(2n) + 1)
//O(2 + 2n^2)
//O(n^2)

console.log(smallest([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]))