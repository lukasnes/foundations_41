const person = {
    firstName: 'Cameron',
    lastName: 'Grieder',
    age: 28
}
// console.log(person['age'])

let {firstName} = person

// console.log(firstName)

let {age:cameronsAge,lastName} = person

// console.log(`hello my name is ${firstName} ${lastName} i am ${cameronsAge}`)

person.job = "mentor"

// console.log(person)

// for(let key in person){
//     console.log(person[key])
// }

delete person['age']

// console.log(person)

class Robot{
    constructor(name,health,attack){
        this.name = name,
        this.health = health,
        this.attack = attack
    }
    takeDamage(para){
        this.health -= para
    }
    checkSelf(){
        for(let i in this){
            console.log(`${i}: ${this[i]}`)
        }
    }
}

let bob = new Robot('bob',100,20)
let roBob = new Robot('roBob',80,30)

// console.log(bob)
// console.log(roBob)

roBob.takeDamage(bob.attack)
bob.takeDamage(roBob.attack)

// bob.checkSelf()

class MedBot extends Robot{
    constructor(name, health, attack, heal){
        super(name, health,attack)
        this.heal = heal
    }
    repair(bot){
        bot.health += this.heal
    }
}

let healBot = new MedBot('healBot',120,10,40)
// healBot.checkSelf()

bob.checkSelf()
healBot.repair(bob)
bob.checkSelf()
