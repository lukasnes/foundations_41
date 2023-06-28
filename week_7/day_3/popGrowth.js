const popGrowth = (p0,percent,growth,finalPop) => {
    let years = 0
    percent = percent / 100

    while(p0 < finalPop){
        p0 = (p0 * (1 + percent)) + growth
        years++
    }

    return years
}

console.log(popGrowth(1500, 5, 100, 5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))