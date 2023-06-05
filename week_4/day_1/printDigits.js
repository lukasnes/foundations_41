const printDigits = num => {
    while(num){
        let digit = num % 10
        console.log(digit)
        num -= digit
        num /= 10
        // console.log(num)
    }
}

console.log(printDigits(314))
console.log(printDigits(2505))
console.log(printDigits(45678))