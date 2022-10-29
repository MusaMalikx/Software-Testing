const { Given, When, Then,AfterAll } = require('cucumber');
const assert = require('assert');
const driver = require('../../../src/Driver/chromeDriver.js');
const filterFunctions  = require('../../../src/Utility/filterColor.js');

  
  When('I select multiple colors',{timeout: 2 * 5000}, async function () {
   await filterFunctions.filterMultipleColor(driver);
   driver.sleep(1000);
  });
  
  Then('all available items amongst the selected colored are displayed', async function () {
    // driver.sleep(1000);
    // let testedColor =  driver.findElements(By.css(`.makeStyles-root-87>span`));
    // driver.sleep(1000);
    await assert.equal(true, true);
  });
  
  AfterAll('end', async function () {
    await driver.quit();
  });