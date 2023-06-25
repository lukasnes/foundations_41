const fixCasing = str => {
    str = str.split(' ')
    if(str[str.length - 1] === ''){
        str.pop()
    }
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
    }
    return str.join(' ')
}
module.exports = {
    fixCasing
}