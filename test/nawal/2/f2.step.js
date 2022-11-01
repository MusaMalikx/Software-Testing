const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

Given('I have added a product to my cart', { timeout: 2 * 50000 },
async () => {
  await driver.get("https://demo.reactstorefront.io/p/1");
  await driver.sleep(1000);
  let element = 0;
  try {
    element = await driver.findElement(
      By.className(
        "MuiButtonBase-root MuiButton-root MuiButton-contained jss60 jss61 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
      )
    );
    element.click();
    await driver.sleep(1000);
  } catch (error) {
    element = null;
  }
}  );

Given('I am now on cart page',{ timeout: 2 * 10000 }, async ()=> {

    let temp = 0;
    
    try {
      temp = await driver.findElement(
        By.xpath(
          "//header/div[1]/div[1]/a[2]"
        )
      );
      temp.click();
    } catch (error) {
      temp = null;
    }
  });


  When('the checkout button is clicked',{ timeout: 2 * 10000 }, async ()=> {
    await driver.sleep(1000);
    let temp = 0;
    try {
      temp = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
        )
      );
      temp.click();
    } catch (error) {
      temp = null;
      assert.equal(false,true)
}});

  Then('I should be redirected to the payment method page',{ timeout: 2 * 10000 }, async ()=> {
    await driver.sleep(1000);
    let temp = 0;
    try {
      temp = await driver.findElement(
        By.className(
          "MuiTypography-root MuiTypography-h4 MuiTypography-colorPrimary MuiTypography-gutterBottom"
        )
      );
      let temp_text = await temp.getText();
      assert("Coming soon!",temp_text)
    } catch (error) {
      temp = null;
      assert.equal(false,true)
} });

