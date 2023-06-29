const takeMath = n => {
    return n % 7 > 1
}

console.log(takeMath(1))
console.log(takeMath(2))
console.log(takeMath(3))
console.log(takeMath(4))
console.log(takeMath(5))
console.log(takeMath(6))
console.log(takeMath(7))
console.log(takeMath(8))
console.log(takeMath(9))
console.log(takeMath(10))
console.log(takeMath(100))

const canWin = n => {
    if(n < 2){
        return false
    }

    return canWin(n - 2) === false || canWin(n - 3) === false || canWin(n - 5) === false
}
console.log('============================================')
console.log(canWin(1))
console.log(canWin(2))
console.log(canWin(3))
console.log(canWin(4))
console.log(canWin(5))
console.log(canWin(6))
console.log(canWin(7))
console.log(canWin(8))
console.log(canWin(9))
console.log(canWin(10))