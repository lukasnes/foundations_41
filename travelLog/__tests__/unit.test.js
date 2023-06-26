const { fixCasing } = require('../public/utils')

describe('fixCasing tests', () => {
    let sampleString = fixCasing('a bANann waorld ')
    test('fixCasing returns a string', () => {
        expect(typeof sampleString).toEqual('string')
    })

    test('fixCasing return words with upperCase letters', () => {
        let sampleArr = sampleString.split(' ')
        for(let i = 0; i < sampleArr.length; i++){
            expect(sampleArr[i][0] === sampleArr[i][0].toUpperCase()).toBeTruthy()
        }
    })
}) 