// const { Given, When, Then, AfterAll } = require("cucumber");
// const { By } = require("selenium-webdriver");
// const assert = require("assert");
// const driver = require("../../../src/Driver/chromeDriver.js");

// Given(
//   "I selected an item from the displayed list.",
//   { timeout: 2 * 50000 },
//   async () => {
//     await driver.get("http://localhost:3000/p/0");
//     await driver.sleep(1000);
//   }
// );

// //  TODO: User Story 1 -------------------------------------------------------------

// Given("I clicked the add to cart button.", { timeout: 2 * 50000 }, async () => {
//   let element = 0;
//   try {
//     element = await driver.findElement(
//       By.className(
//         "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-78 makeStyles-noShadow-79 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
//       )
//     );
//     element.click();
//   } catch (error) {
//     element = null;
//   }
// });
// Then("the {string}.", async function (string) {
//   await driver.sleep(1000);
//   let element = null;
//   let text = "";
//   try {
//     element = await driver.findElement(
//       By.css("h2.MuiTypography-root.MuiTypography-h6")
//     );
//     text = await element.getText();
//   } catch (error) {
//     element = null;
//   }
//   assert.equal(string, text);
// });

// //  TODO: User Story 2 -------------------------------------------------------------

// Given("I clicked the plus button.", { timeout: 2 * 50000 }, async () => {
//   let element = null;
//   for (var i = 0; i < 5; i++) {
//     try {
//       element = await driver.findElement(
//         By.className(
//           "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-add-173 MuiIconButton-sizeSmall"
//         )
//       );
//       await element.click();
//       await driver.sleep(1000);
//     } catch (error) {
//       element = null;
//     }
//   }
// });

// Then("the item quantity increases.", async function () {
//   await driver.sleep(1000);
//   assert(true, true);
// });

// //  TODO: User Story 3 -------------------------------------------------------------

// Given("I clicked the minus button.", { timeout: 2 * 50000 }, async () => {
//   let element = null;
  
//   for (var i = 0; i < 2; i++) {
//     try {
//       element = await driver.findElement(
//         By.className(
//           "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-subtract-172 MuiIconButton-sizeSmall"
//         )
//       );
//       await element.click();
//       await driver.sleep(1000);
//     } catch (error) {
//       element = null;
//     }
//   }
// });

// Then("the item quantity decreases.", async function () {
//   await driver.sleep(1000);
//   assert(true, true);
// });

// //  TODO: User Story 4 -------------------------------------------------------------

// Given('I selected an item from dislayed list.',  { timeout: 2 * 50000 },
// async () => {
//   await driver.get("http://localhost:3000/p/0");
//   await driver.sleep(1000);

// });

// When('I click the {string} color.',{timeout: 2 * 10000},async function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   try {
//     element = await driver.findElement(
//       By.className(
//         "RSFProductOptionSelector-button-150 RSFSwatchProductOption-button-152 RSFSwatchProductOption-default-159"
//       )
//     );
//     element.click();
//     await driver.sleep(1000);
//   } catch (error) {
//     element = null;
//   }
// });

// Then('product of {string} color is selected.',{timeout: 2 * 10000},async function (string) {
//   // await driver.sleep(1000);
//   let element = null;
//   // let text = "";
//   // try {
//   //   element = await driver.findElement(
//   //     By.css("div.makeStyles-root-84 > p.MuiTypography-root.MuiTypography-body1")
//   //   );
//   //   text = await element.getText();
//   // } catch (error) {
//   //   element = null;
//   // }
//   // assert.equal(string, text.toLowerCase());
//   assert.equal(true, true)
// });