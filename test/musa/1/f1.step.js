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

Given("I clicked the add to cart button.", { timeout: 2 * 50000 }, async () => {
    let element = 0;
    try {
      element = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-78 makeStyles-noShadow-79 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
        )
      );
      element.click();
    } catch (error) {
      element = null;
    }
  });
  Then("the {string}.", async function (string) {
    await driver.sleep(1000);
    let element = null;
    let text = "";
    try {
      element = await driver.findElement(
        By.css("h2.MuiTypography-root.MuiTypography-h6")
      );
      text = await element.getText();
    } catch (error) {
      element = null;
    }
    assert.equal(string, text);
  });

  AfterAll('end', async function () {
    await driver.quit();
  });