///// Running Code Practice /////
/*
    In this file, there are 10 problems to complete.
    Each of them has instructions and a place to 
    code below those instructions. Complete as many 
    of the problems as you can.

    These problems are themed around your fictional
    internet service. This is just to make the 
    problems more interesting, not because it will
    actually change anything about your internet.

    Reminder: when you're working with a partner, 
    don't be afraid to ask questions! You'll both 
    learn from talking about code and from teaching 
    each other. 
*/




///// PROBLEM 1 /////
/*
    Create a variable that will store the download 
    speed of your internet connection. 

    Call the variable 'speed' and set its value
    to 25. 
    
    This speed can change, so we need to make sure 
    to use a keyword that will allow us to reassign 
    the value. 
*/

// CODE HERE






///// PROBLEM 2 /////
/*
    Congrats! You just upgraded your internet plan
    to the platinum level.

    Reassign the value of 'speed' to be 500.

    Log speed to the console and run your file to
    see the change. 

    Hint: in your terminal, make sure you're in the
    directory where this file is saved. Use node to
    run the file with this command: `node index.js`.
*/

// CODE HERE






///// PROBLEM 3 /////
/*
    You're going to be watching a lot more sports
    now that you have this sweet high-speed 
    connection. Or maybe a lot more YouTube...
    Either way, you're going to need some snacks.

    Create a variable called 'faveSnack' and set its
    value to be a string of your favorite snack. 

    Reminder: this could change, so be careful about
    which keyword you use to declare this variable.
*/

// CODE HERE






///// PROBLEM 4 /////
/*
    While you're thinking about snacks, we should
    also take note of your favorite drink. 

    Create a variable called 'faveDrink' and set its
    value to be a string of your favorite drink. 

    Reminder: this could change, so be careful about
    which keyword you use to declare this variable.
*/

// CODE HERE






///// PROBLEM 5 /////
/*
    Now let's create a variable that will never 
    change. We want to make sure that our network 
    is always private. 

    Create a variable called 'private' and set it
    to the boolean true.

    Remember, we don't want this to ever change, so
    be sure to use a keyword that will prevent change.
*/

// CODE HERE






///// PROBLEM 6 /////
/*
    Now let's figure out all of your subscriptions.
    The price on your internet went up, so you
    want to save a little bit of money elsewhere.

    You're subscribed to the following services for
    the prices listed next to them. 

    Monthly Fees
    ------------
    $15  Netflix 
    $7   Hulu 
    $5   Disney+ 
    $10  YouTube Premium 
    $10  Peacock

    Create a variable for each subscription. The 
    value of each variable should the monthly cost
    of that subscription.

    For example: 
        let appleTv = 10;
*/

// CODE HERE

let netflix = 15
let hulu = 7
let disneyPlus = 5
let youtube = 10
let peacock = 10

console.log(`Netflix: ${netflix}\nHulu: ${hulu}\nDisney+: ${disneyPlus}\nYoutube: ${youtube}\nPeacock: ${peacock}`)


///// PROBLEM 7 /////
/*
    Let's find out what your total cost is.

    Create a variable called 'total' whose 
    value is all of your subscription variables 
    added together.

    Then console log total to see the value.
*/

// CODE HERE


let total = netflix + hulu + disneyPlus + youtube + peacock

console.log(total)

///// PROBLEM 8 /////
/*
    You make some tough choices. Reassign the values
    of your variables to reflect the following 
    information:

    - you cancel Hulu, it's now $0/month 
    - you downgrade Peacock, it's now $5/month
    - you downgrade Netflix, it's now $8/month

    Challenge: instead of explicitly reassigning 
    values, use mathematical operators. For example: 
        appleTv = appleTv - 5
        or 
        appleTv -= 5
*/

// CODE HERE
hulu = 0
peacock -= 5
netflix -= 7





///// PROBLEM 9 /////
/*
    You might be able to guess what's coming next. 
    We're going to make a variable to store 
    the new total of your subscriptions. 

    Create a variable called 'newTotal' and set its
    value to all of your subscription variables 
    added together.
*/

// CODE HERE

let newTotal = netflix + hulu + disneyPlus + youtube + peacock
console.log(newTotal)

///// PROBLEM 9: Bonus Section /////
/*
    Perhaps you're curious about why we created 
    both 'total' and 'newTotal' seeing as we assigned 
    them both to be all the subscriptions vairables
    summed together. But do they have the same value?

    Let's find out. Un-comment the console.logs below 
    and compare the numbers.
*/

// console.log('Total: ', total)
// console.log('New Total: ', newTotal)

/*
    What is happening here? When we run a file 
    using node, it's reading from the top down. 
    'total' is declared before any changes are
    made to the subscription variables, and the 
    original total is saved in memory. Any time 
    after that declaration that we want to access
    'total', it will still reference the original
    value. It doesn't care what happens to the 
    variable values that make it up. When we made
    'newTotal', we were further down in the file
    and were now referencing the new values of the
    subscription variables. 

    This concept can be confusing, but will sink
    in over time!
*/


///// PROBLEM 10 /////
/*
    Finally, let's figure out what your savings
    are. We would like to know what percent 
    you'll be saving. 

    Create a variable called 'savings' whose
    value is the percent that you're saving.
    
    You answer can be in this format: xx.xxxxxx
    i.e. Don't worry about rounding it
    or actually giving it a percent sign.

    For example, if our original total was 100 
    and our new was 85, then we would be saving 
    15%. 
*/

// CODE HERE


let savings = (total - newTotal) / total * 100
console.log(`${savings.toFixed(2)}%`)


