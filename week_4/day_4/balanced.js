const balanced = str => {
    let parenCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            parenCount++
        } else if (str[i] === ')'){
            parenCount--
        }

        if(parenCount < 0){
            return false
        }
    }

    return parenCount === 0
}

console.log(balanced('()'))
console.log(balanced(')()('))
console.log(balanced('(((asfsafsafafsa))'))
console.log(balanced('()()()'))

const balancedBrackets = str => {
    let brackets = {
        parenthesis: 0,
        squareBrackets: 0,
        curlyBraces: 0
    }

    for(let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === ')'){
            if(str[i] === '('){
                brackets['parenthesis']++
            } else {
                brackets['parenthesis']--
            }
        } else if (str[i] === "[" || str[i] === ']'){
            if(str[i] === '['){
                brackets['squareBrackets']++
            } else {
                brackets['squareBrackets']--
            }
        } else if (str[i] === '{' || str[i] === '}'){
            if(str[i] === '{'){
                brackets['curlyBraces']++
            } else {
                brackets['curlyBraces']--
            }
        }
    }

    for(let bracket in brackets){
        if(brackets[bracket] !== 0){
            return false
        }
    }
    return true
}