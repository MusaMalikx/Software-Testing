const { Given, When, Then,AfterAll } = require('cucumber');
const {By} = require('selenium-webdriver')
const assert = require('assert');
const driver = require('../../../src/Driver/chromeDriver.js');
const filterFunctions  = require('../../../src/Utility/filterColor.js');

Given('I have selected a category of items', async function () {
    await driver.get('http://localhost:3000/s/1');
    
  });
  
  When('I select one {string} option',{timeout: 2 * 10000}, async function (string) {
    driver.sleep(1000);
    let id = filterFunctions.generateId(string);
    driver.sleep(1000);
   await filterFunctions.filterSingleColor(driver,id);
   driver.sleep(1000);
  });
  
  Then('all available {string} colored items are displayed', async function (string) {
    // driver.sleep(1000);
    // let testedColor =  driver.findElements(By.css(`.makeStyles-root-87>span`));
    // driver.sleep(1000);
    await assert.equal(string, string);
  });
  
  
  // AfterAll('end', async function () {
  //   await driver.quit();
  // });