const {Builder,Browser,By,until,Key} = require('selenium-webdriver')

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
});

afterEach(async ()=>{
    await driver.quit()
});

describe('Test the travel log', () => {
    test('Add a place', async () => {
        await driver.get('http://localhost:4000/')
        
        await driver.findElement(By.id('wishlist-input')).sendKeys('Banana World\n')

        await driver.sleep(2000)

        let newPlaces = await driver.wait(until.elementLocated(By.xpath('//ul/li'))).isDisplayed()

        expect(newPlaces).toBe(true)
    })
})