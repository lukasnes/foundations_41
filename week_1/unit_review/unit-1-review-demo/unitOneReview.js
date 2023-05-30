// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
let petName = "Tigger"
let petAge = 2
let isCute = true

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguage = ["JavaScript","Swift","Ruby",'Python',"Java","C","C++","C#"]

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
console.log(codingLanguage[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguage2 = codingLanguage.slice(0, codingLanguage.length)

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguage2.push("Cobol")

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop()

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift()
console.log(instruments)

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift('guitar')
console.log(instruments)

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2,1,'glockenspiel')
console.log(instruments)

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

//Every if-else statement begins with the if keyword, followed by a conditional statement, wrapped in parenthesis. This is the first condition it will check. If that condition is true, what happens goes inside the curly braces that follow.

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if(num % 2 === 0){
    console.log(num)
} else {
    console.log('num is not an even number')
}


// !!! Don't edit the code below !!! //
let score = 8;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if(score <= 10){
    console.log('Failed.')
} else if (score > 10 && score < 41){
    console.log('The grade is C.')
} else if(score >= 41 && score < 71){
    console.log('The grade is B.')
} else {
    console.log('The grade is A.')
}

switch(true){
    case score <= 10:
        console.log('Failed.')
        break;
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/
//A for loop begins with the for keyword, followed by parentheses, and 3 arguments seperated by semicolons.
//Those arguments are:
//An iterator -- A variable we declare for use inside the loop. This variable keeps track of where we are in the loop, and when it will finish.
//An exit condition -- The loop will continue to run until this exit condition has been met -- this exit condition usually involves the iterator.
//An incrementor -- The value by which the iterator will increase or decrease as the loop runs.
//After this, all code that should run in the for loop will be contained within the curly braces that follow.

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0

for(let i = 0; i < price.length; i++){
    totalPrice += price[i]
}

console.log(totalPrice)

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/
console.log(totalPrice / price.length)


// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for(let i = 0; i < colors.length; i++){
    if(colors[i] === 'red'){
        console.log('apple')
    } else if (colors[i] === 'green'){
        console.log('melon')
    } else {
        console.log('banana')
    }

    switch(colors[i]){
        case 'red':
            console.log('apple')
            break;
        case 'green':
            console.log('melon')
            break;
        case 'yellow':
            console.log('banana')
            break;
        default:
            console.log('skittles')
            break;
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

