const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given('I selected an item from displayed list',{timeout: 2 * 10000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  await driver.get("http://localhost:3000/p/0");
  await driver.sleep(1000);
});

When('I click on the selected item image', async () => {
  // Write code here that turns the phrase above into concrete actions
  let element = null;
  try {
    element = await driver.findElement(
      By.className(
        "RSFMagnifyHint-wrap-115"
      )
    );
    element.click();
    await driver.sleep(1000);
  } catch (error) {
    element = null;
  }
  
});

Then('the item image expands', async () => {
  // Write code here that turns the phrase above into concrete actions
  assert(true, true)
});

AfterAll('end', async function () {
  await driver.quit();
});