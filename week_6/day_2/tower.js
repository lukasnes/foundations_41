const tower = n => {
    let towerArr = []
    
    for(let i = 0; i < n; i++){ // O(n)
        // let stars = '*'.repeat(1 + (i * 2))
        let stars = 1 + i
        let starStr = ''
        // let spaces = ' '.repeat(n - (i + 1))
        let spaces = n - (i + 1)
        let spaceStr = ''
        for(let j = 0; j < stars; j++){ //O(n)
            starStr += '**'
        }
        for(let j = 0; j < spaces; j++){
            spaceStr += ' '
        }
        
        let towerStr = `${spaceStr}${starStr}${spaceStr}`
        towerArr.push(towerStr)
    }

    return towerArr.join('\n')
}

//O(n(n + n))
//O(n(2n))
//O(2n^2)
//O(n^2)

console.log(tower(5))
console.log(tower(8))
console.log(tower(10))

console.log('abc'.repeat(7))