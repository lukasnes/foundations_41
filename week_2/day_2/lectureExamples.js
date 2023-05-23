const dog = {
    name: 'Freida',
    color: 'brown/black',
    hunger: 40,
    mood: 'feisty',
    age: 9
  }

let {name, color:freidaColor, mood} = dog

// console.log(`my dog ${name} is a ${mood} ${freidaColor} dog`)
// console.log(dog)

dog['breed'] = 'boxer'

delete dog.breed

// for(let x in dog){
// console.log(x)
// }

class Cat {
    constructor(name,age,color){
        this.name = name,
        this.age = age,
        this.color = color
    }
    meow(){
        console.log(`hello my name is ${this.name} i am ${this.age} years old`)
    }
}

let sam = new Cat('sam',3,'orange')

sam.meow
// console.log(sam)