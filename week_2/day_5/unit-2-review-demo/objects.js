// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to create object literals.

// 1.1
//  Create an object literal that has 5 properties.
//  Each one of these properties should contain a
//  different types of primitive values. (Primitive
//  values are also known as "simple data types.")
let student = {
    name: 'lukas',
    number: 12,
    bool: false,
    age: null,
    undefined: undefined
}


// 1.2
//  Create an object literal that has both primitive values
//  and non-primitive values.
let user = {
    name: 'sam',
    items: ['milk','eggs','bacon'],
    pet: {
        name:'dog',
        type:'cat'
    }
}


// *** Problem 2 ***
//  Students should be able to access properties of
//  objects in various ways.

// 2.1
//  Given an object named person1, get the 'age'
//  property with dot notation and save it to a variable.

const person1 = {
    name: 'Joe',
    age: 80
}

let personAge = person1.age

// console.log(personAge)

// 2.2
//  Given an object named person2, get the 'name'
//  property with bracket notation and save it to a variable

const person2 = {
    name: 'Donald',
    age: 76
}

let personName = person2['name']
// 2.3
//  Given an object named person3, use destructuring to create
//  a variable called 'name' that contains person3's 'name' property.

const person3 = {
    name: 'Barak',
    age: 61
}

// let {name} = person3


// 2.4
//  Given an object named person4, use destructuring to create
//  variables called 'name' and 'years', which respectively
//  contain person4's 'name' and 'age' properties.
//  Note: this should be done in one line with destructuring.

const person4 = {
    name: 'George',
    age: 76
}

let {name, age:years} = person4

console.log(years)

// 2.5
//  The variable person5 contains an object, which in turn
//  contains objects and arrays that may contain more objects
//  and arrays (this is what is referred to as a "nested data
//  structure"). Retrieve the following out of the person5 object
//  and save them as a variable:


const person5 = {
    name: "Dominic",
    age: 35,
    possessionCategories: [
        {
            category: 'furniture',
            list: [
                {
                    name: 'bench',
                    age: 40,
                    color: 'brown'
                },
                {
                    name: 'couch',
                    age: 2,
                    color: 'red'
                }
            ]
        },
        {
            category: 'vehicles',
            list: [
                {
                    make: 'Mazda',
                    model: 'RX-7',
                    year: 1993,
                    color: 'red'
                },
                {
                    make: 'Dodge',
                    model: 'Charger R/T',
                    year: 1970,
                    color: 'black'
                },
                {
                    make: 'Toyota',
                    model: 'Corolla',
                    year: 2008,
                    color: 'blue'
                },
            ]
        },
    ],
    hasOutstandingWarrants: false,
    siblings: [
        'Jakob',
        'Mia'
    ]
}
// 2.5a
//  the model of person5's black vehicle,

let vehicle = person5.possessionCategories[1].list[1].model
// console.log(vehicle)
// 2.5b
//  person5's second-listed sibling,
let sibling = person5.siblings[1]


// 2.5c
//  the color of person5's 40-year-old furniture,
let furniture = person5.possessionCategories[0].list[0]['color']


// 2.5d
//  whether or not person5 has any outstanding warrants,

let warrants = person5.hasOutstandingWarrants

// 2.5e
//  and a list (an array) of all of person5's vehicles.

let vehicles = person5.possessionCategories[1].list

// *** Problem 3 ***
//  Students should be able to modify properties of
//  objects. We will be using the person5 variable from
//  problem 2.5 for this section.

// 3.1a
//  Increment the age of person5 by one year.
//  Use the ++ operator to do this.

person5.age++

// 3.1b
//  Increment the age of person5 by another year.
//  This time, however, assign the age property
//  to be itself plus one (use the = operator
//  rather than using the ++ operator).

person5.age = person5.age + 1

// 3.1c
//  Make it so that person5 has an outstanding warrant.

person5.hasOutstandingWarrants = true

// 3.1d
//  Give person5 another sibling named 'Hecktor'.

person5.siblings.push('Hecktor')

// 3.1e
//  Change person5's last-listed car to have the color
//  purple.

person5.possessionCategories[1].list[2].color = 'purple'

// 3.1f
//  Remove the "list" property from the first object of
//  person5's possessionCategories.

delete person5.possessionCategories[0].list

console.log(person5)
