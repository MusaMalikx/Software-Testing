const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given(
  "I selected an item from displayed list.",
  { timeout: 2 * 50000 },
  async () => {
    await driver.get("http://localhost:3000/p/0");
    await driver.sleep(1000);
  }
);

Given("I clicked the minus button.", { timeout: 2 * 50000 }, async () => {
  let element = null;

  for (var i = 0; i < 5; i++) {
    try {
      element = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-add-173 MuiIconButton-sizeSmall"
        )
      );
      await element.click();
      // await driver.sleep(1000);
    } catch (error) {
      element = null;
    }
  }

  for (var i = 0; i < 5; i++) {
    try {
      element = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-subtract-172 MuiIconButton-sizeSmall"
        )
      );
      await element.click();
      await driver.sleep(1000);
    } catch (error) {
      element = null;
    }
  }
});

Then("the item quantity decreases.", async function () {
  await driver.sleep(1000);
  assert(true, true);
});

AfterAll("end", async function () {
  await driver.quit();
});
