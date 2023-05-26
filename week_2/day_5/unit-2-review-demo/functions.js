// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to define functions with a 
//  variety of syntaxes.

// 1.1a
//  Define a function that logs the string
//  "My function was invoked!".
//  This function has no parameters and returns nothing.
//  Do this with a function declaration.

function funcDeclaration() {
    console.log('My function was invoked!')
}


// 1.2
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be the traditional syntax
//  of a function expresssion.

const funcExpression = function(){
    console.log('My function was invoked!')
}


// 1.3
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be an arrow function.
const funcArrow = ()=>{ console.log('My function has been inwoked')}


// *** Problem 2 ***
//  Students should understand how to write functions that return
//  values.


// 2.1
//  Create a function that takes two parameters and returns the
//  product (multiplication) of the parameters. Assume that the
//  two parameters will always be number data types.
//  Your function must use the return keyword. Also, your function
//  should not log anything.

const mutiply = function(num1,num2){
    return num1 * num2
}

// 2.2
//  Create the function from 2.1, only this time, use an arrow
//  function with an implicit return.

const better = (num1,num2) => num1 * num2


// 2.3
//  Define a function that takes two parameters and returns the
//  quotient (division) of the parameters.  The first parameter
//  is the dividend, and the second is the divisor. Assume that
//  the two parameters are always numbers.
//  In the case that the divisor is 0 and the dividend is not,
//  your function must return null and log the string
//  "cannot divide by 0".
//  Note: as an additional constraint to this problem, your
//  function must contain an "if" statement without any "else"
//  or "else if"s chained onto it.

function divide(num1, num2){
    if(num2 === 0){
        console.log('cannot divide by zero, silly')
        return null
    }
    return num1 / num2
}

// *** Problem 3 ***
//  Students should be able to invoke (call) functions.

// 3.1
//  Define a function that logs "Coding is fun!", and invoke the
//  the function. The function should not return anything.
//  Do not save the result of the function.

const codingFun = ()=>{
    console.log('coding is fun!')
}

codingFun()

// 3.2
//  Define a function that takes one parameter, a number, and
//  returns the parameter plus 50. Invoke your function three
//  times with three different numbers, and save those values
//  to three different variables.

const addFifty = function(num) {
    return num + 50
}

let oneHundred = addFifty(50)
let twoHundred = addFifty(150)
let treeHundred = addFifty(250)

// 3.3
//  Create an array with three values. These three values will be
//  the results of invoking the function from problem 2.3 three times,
//  with each invokation having different arguments.
//  After your array is created, log it to the console.

let array = [addFifty(20), addFifty(30), addFifty(40)]


console.log(array)
// *** Problem 4 ***
//  Students should understand what callback functions and higher
//  order functions are. Students should be able to write callbacks
//  that will be invoked by pre-defined higher order functions.

// 4.1a
//  Note the higher order function, "higher", which takes a callback
//  function as its second parameter. Define a callback function
//  named "callback" that has one number parameter. Your callback
//  function should return the sum of this number and 36.

function higher(num, cb) {
    return cb(num)
}

function callback(num){
    return num + 36
}
// 4.1b
//  Finally, invoke "higher" with the first parameter being a
//  number of your choice, and the second parameter being the
//  callback written in 4.1a. Save the result of this invocation
//  to a variable.

let result = higher(10,callback)


console.log(result)