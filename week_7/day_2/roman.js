const roman = num => {
    if(num >= 4000){
        return `This number is too big for our primitive numbering system`
    }

    let romanNumeral = {
        1: ['I','V'],
        2: ['X','L'],
        3: ['C','D'],
        4: ['M','']
    }

    let numeralStr = ''
    let numArr = String(num).split('')

    while(numArr.length > 0){
        let currentPlace = numArr.length
        let currentNum = parseInt(numArr[0])

        if(currentNum === 9){
            numeralStr += romanNumeral[currentPlace][0]
            numeralStr += romanNumeral[currentPlace + 1][0]
        } else if (currentNum >= 5) {
            numeralStr += romanNumeral[currentPlace][1]
            currentNum -= 5
            numeralStr += romanNumeral[currentPlace][0].repeat(currentNum)
        } else if (currentNum === 4){
            numeralStr += romanNumeral[currentPlace][0]
            numeralStr += romanNumeral[currentPlace][1]
        } else {
            numeralStr += romanNumeral[currentPlace][0].repeat(currentNum)
        }

        numArr.shift()
    }

    return numeralStr
}

console.log(roman(4004))
console.log(roman(3754))
console.log(roman(999))
console.log(roman(44))