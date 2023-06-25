const smallest = (arrOne,arrTwo) => {
    let diff;

    for(let i = 0; i < arrOne.length; i++){
        for(let j = 0; j < arrTwo.length; j++){
            let currDiff = Math.abs(arrOne[i] - arrTwo[j])
            
            // if(arrOne[i] - arrTwo[j] < 0){
            //     currDiff = arrTwo[j] - arrOne[i]
            // } else {
            //     currDiff = arrOne[i] - arrTwo[j]
            // }

            console.log(`Difference: ${diff}, Current Difference: ${currDiff}`)

            if(diff === undefined || diff > currDiff){
                diff = currDiff
            }
        }
    }

    return diff
}

console.log(smallest([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]))