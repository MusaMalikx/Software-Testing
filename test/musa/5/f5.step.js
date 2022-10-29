const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../../src/Driver/chromeDriver.js");

// Given('I selected an item from dislayed list.',  { timeout: 2 * 50000 },
// async () => {
//   await driver.get("http://localhost:3000/p/0");
//   await driver.sleep(1000);

// });

Given('I selected an item from displayed list.',{timeout: 2 * 10000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  await driver.get("http://localhost:3000/p/0");
  await driver.sleep(1000);
});

When('I click {string} size.', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  let element = null;
  try {
    element = await driver.findElements(
      By.className(
        "MuiButtonBase-root MuiButton-root MuiButton-outlined RSFProductOptionSelector-button-150 RSFTextProductOption-root-167"
      )
    );
     
    for (let i = 0; i < element.length; i++) {
      element[i].click();
      await driver.sleep(1000);
    }
  } catch (error) {
    element = null;
  }
});

When('{string} size is selected.', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  assert(true, true)
});

// When('I click unavailable size.', async function () {
//   let element = null;
//   try {
//     element = await driver.findElement(
//       By.className(
//         "MuiButtonBase-root MuiButton-root MuiButton-outlined RSFProductOptionSelector-button-150 RSFTextProductOption-root-167 Mui-disabled Mui-disabled"
//       )
//     );
//     element.click()
//     await driver.sleep(1000);
//   } catch (error) {
//     element = null;
//   }
// });

// Then('the size is not selected.', async function () {
//   assert(true, true);
// });

// AfterAll('end', async function () {
//   await driver.quit();
// });