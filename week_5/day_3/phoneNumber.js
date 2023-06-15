const phone = (arr,template) => {
    for(let i = 0; i < arr.length; i++){
        template = template.replace('x',arr[i])
        console.log(template)
    }

    return template
    // return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

console.log(phone([2,1,3,5,6,5,3,6],'xx xx xx xx'))

console.log("xxx".replace('x','y'))