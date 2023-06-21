const perfect = num => {
    let root = Math.sqrt(num)
    if(Number.isInteger(root)){
        return (root + 1)**2
    } else {
        return -1
    }
}

const perfectOne = num => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1)**2 : -1

console.log(perfectOne(25))
console.log(perfectOne(49))
console.log(perfectOne(64))
console.log(perfectOne(3000))