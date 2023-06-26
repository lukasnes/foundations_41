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
        await driver.findElement(By.id('add-movie-input')).sendKeys('Shrek',Key.RETURN);
        await driver.wait(until.elementLocated(By.css('#movies-list li input')),1000).click();
        const message = await driver.findElement(By.css('aside[id="message"]')).getText();
        

        expect(await message).toBe('Watched Shrek')
        
})})
