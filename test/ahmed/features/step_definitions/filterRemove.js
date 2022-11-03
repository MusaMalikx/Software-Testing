
const { Given, When, Then,AfterAll } = require('cucumber');
const assert = require('assert');
const driver = require('../../../../src/Driver/chromeDriver.js');
const filterFunctions  = require('../../../../src/Utility/filterColor.js');

Given('I have applied filters to items', async () =>{
    driver.sleep(1000);
    await filterFunctions.selectMultipleColors(driver);
  });

  When('I select clear all option',  async () =>{
    driver.sleep(1000);
    await filterFunctions.clickClearBtn(driver);

  });

  Then('all filters applied to items are removed', async ()=> {
     driver.sleep(1000);
     let isFound = await filterFunctions.findClearBtn(driver);
     await assert.equal(isFound,false)
  });

// AfterAll('end', async function () {
//     driver.sleep(1000);
//     await driver.quit();
//   });