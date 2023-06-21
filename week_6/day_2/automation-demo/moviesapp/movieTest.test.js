const {Builder,Browser,By,until,Key} = require('selenium-webdriver')

let driver;

beforeEach(async ()=>{
    driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async ()=>{
    await driver.quit()
});

describe('Test the Movies App', ()=>{
    test('add a movie', async ()=>{
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.id('add-movie-input')).sendKeys('titanic',Key.RETURN);
        const movie = await driver.wait(until.elementLocated(By.css('#movies-list li label')),1000);
        await driver.sleep(4000)
        expect(await movie.getText()).toBe('titanic')
})})
