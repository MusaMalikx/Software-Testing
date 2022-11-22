const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given(
    "that {string} added in the cart",
    { timeout: 2 * 50000 },
    async function (string) {
      await driver.get("http://localhost:3000/p/1");
      let temp = 0;
      try {
        temp = await driver.findElement(
          By.className(
            "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-78 makeStyles-noShadow-79 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
          )
        );
        temp.click();
        //await driver.sleep(1000);
      } catch (error) {
        temp = null;
        console.log("add to cart Error");
      }
      await driver.sleep(1000);
    }
  );

When(
    "I click remove button from any {string} in the cart list",
    async function (string) {
      
      let temp = [];
  
      let x = [];
      try {
        temp = await driver.findElement(
          By.className("MuiSvgIcon-root RSFCartButton-icon-26")
        );
        temp.click();
        await driver.sleep(1000);
  
        temp = await driver.findElements(
          By.className(
            "MuiButtonBase-root MuiIconButton-root makeStyles-remove-227"
          )
        );
        await driver.sleep(1000);
        temp[0].click();
        await driver.sleep(1000);
  
        temp = await driver.findElements(
          By.className("MuiButtonBase-root MuiButton-root MuiButton-text")
        );
  
        await driver.sleep(1000);
        console.log(temp);
        temp[0].click();
      } catch (error) {
        console.log("cart error", error);
      }
    }
  );
  
  Then('the {string} remove from the Cart List', async function (string)  {
    await driver.sleep(1000);
    let temp = [];
  
    let x = [];
    try {
      temp = await driver.findElements(
        By.className("MuiTypography-root MuiTypography-subtitle1")
      );
  
      temp.forEach(async (element) => {
        x.push(await element.getText());
      });
      await driver.sleep(1000);
    } catch (error) {
      console.log("cart error", error);
    }
    console.log("last", x);
    var found = x.find(function (element) {
      return element == string;
    });
    if (found === string) {
      assert.equal(false, true);
    }
    else{
      assert.equal(true, true);
    }
  });

  AfterAll("end", async function () {
    await driver.quit();
  });
  