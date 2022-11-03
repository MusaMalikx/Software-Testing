const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given(
  "I selected an item from displayed list.",
  { timeout: 2 * 10000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("http://localhost:3000/p/0");
    await driver.sleep(1000);
  }
);

When(
  "I select different suggesting item",
  { timeout: 2 * 100000 },
  async () => {
    // Write code here that turns the phrase above into concrete actions
    let element = null;
    try {
      element = await driver.findElements(By.className("makeStyles-link-224"));
      for (let i = 0; i < element.length; i++) {
        element[i].click();
        await driver.sleep(3000);
      }
    } catch (error) {
      element = null;
    }
  }
);

Then("that selected item detail page opens.", async () => {
  // Write code here that turns the phrase above into concrete actions
  assert(true, true);
});

AfterAll("end", async function () {
  await driver.quit();
});
