// const makeUnique = str => {
//     let unique = ""

//     for(let i = 0; i < str.length; i++){
//         if(!unique.includes(str[i])){
//             unique += str[i]
//         }
//     }

//     return unique
// }

const makeUnique = str => [...new Set(str)].join('')
//     let uniqueSet = new Set(str)
//     console.log(uniqueSet)
//     return [...uniqueSet].join('')
// }

console.log(makeUnique('helloworld'))
console.log(makeUnique('iwanttoclimbamountain'))