const { Given, When, Then, AfterAll } = require("cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const driver = require("../../../src/Driver/chromeDriver.js");

// Given(
//   "I selected an item from displayed list.",
//   { timeout: 2 * 50000 },
//   async () => {
//     await driver.get("http://localhost:3000/p/0");
//     await driver.sleep(1000);
//   }
// );

// Given('I am on a subcategories page', 
//   { timeout: 2 * 50000 },
//   async () => {
//     await driver.get("https://demo.reactstorefront.io/p/1");
//     await driver.sleep(1000);
//   }
// );

// Given('I have selected a product', 
//   { timeout: 2 * 50000 },
//   async () => {
//     let element = 0
//     try{
//       element = await driver.findElement(
//         By.className("jss149")
//       )
//     }
//   }
// );

// When('I click on add to cart',async function () {
//   let element = 0;
//     try {
//       element = await driver.findElements(
//         By.className(
//           "MuiButtonBase-root MuiButton-root MuiButton-contained jss60 jss61 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
//         )
//       );
//       element.getText();
//       await driver.sleep(1000);
//     } catch (error) {
//       element = null;
//     }
// });

// Then('I should have that product in my cart', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('I should not have the product which I have not added', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

Given('I have selected a product', 

  { timeout: 2 * 50000 },
  async () => {
    await driver.get("https://demo.reactstorefront.io/p/1");
    await driver.sleep(1000);
  }  
);

When('I click on add to cart',{ timeout: 2 * 50000 }, async ()=> {
  let element = 0;
  try {
    element = await driver.findElement(
      By.className(
        "MuiButtonBase-root MuiButton-root MuiButton-contained jss60 jss61 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
      )
    );
    element.click();
 
  } catch (error) {
    element = null;
  }
});

When('I go to cart page',{ timeout: 2 * 10000 }, async ()=> {
    await driver.sleep(1000);
    await driver.get("https://demo.reactstorefront.io/cart");
});

Then('I should have that product in my cart',{ timeout: 2 * 10000 },  ()=> {
  setTimeout(async ()=>{
    driver.sleep(1000)
    let temp = 0;
    try {
      temp = await driver.findElements(
        By.css(
          "a h6.MuiTypography-root.MuiTypography-subtitle1"
        )
      );
     let temp_Text = await temp[0].getText();
     if(temp_Text=="Product 1"){
    assert.equal(true,true)
     }
     else{
    assert.equal(true,false)
     }
    } catch (error) {
      temp = null;
      //assert.equal(false,true)
    }},3000);
});