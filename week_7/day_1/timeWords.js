const hourWords = hours => {
    let hourArr = [
        'twelve',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven'
    ]

    if(hours >= 12){
        hours -= 12
    }

    return hourArr[hours]
}
const minuteWords = minutes => {
    let aboveTwenties = [
        'twenty',
        'thirty',
        'fourty',
        'fifty'
    ]
    let onesArr = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]
    let belowTwenties = [
        "o'clock",
        'oh one',
        'oh two',
        'oh three',
        'oh four',
        'oh five',
        'oh six',
        'oh seven',
        'oh eight',
        'oh nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    if(minutes < 20){
        return belowTwenties[minutes]
    } else {
        let minuteArr = String(minutes).split('')
        let tens = parseInt(minuteArr[0]) - 2
        let ones = parseInt(minuteArr[1])
        return `${aboveTwenties[tens]} ${onesArr[ones]}`
    }
}

const timeWords = timeStr => {
    if(timeStr === '00:00'){
        return 'midnight'
    } else if(timeStr === '12:00'){
        return 'noon'
    }

    let timeArr = timeStr.split(':')

    let hours = hourWords(parseInt(timeArr[0]))
    let minutes = minuteWords(parseInt(timeArr[1]))

    let timeOfDay = parseInt(timeArr[0]) < 12 ? 'am' : 'pm'

    return `${hours} ${minutes} ${timeOfDay}`
}

console.log(timeWords('00:00'))
console.log(timeWords('12:00'))

console.log(timeWords('05:00'))
console.log(timeWords('19:00'))

console.log(timeWords('07:08'))
console.log(timeWords('17:04'))
console.log(timeWords('16:14'))
console.log(timeWords('20:24'))
console.log(timeWords('03:57'))