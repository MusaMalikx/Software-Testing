const { By, Key } = require("selenium-webdriver");
const { sleep } = require("../Driver/chromeDriver");

async function filterSingleColor(driver, id) {
  let element = (
    await driver.findElements(
      By.className(
        "RSFSwatchProductOption-button-116 RSFSwatchProductOption-default-123"
      )
    )
  )[id];
  element.click();
  await driver.sleep(2000);
  element = await driver.findElement(
    By.className(
      "MuiButtonBase-root MuiButton-root MuiButton-contained RSFShowMore-button-136 MuiButton-containedPrimary "
    )
  );
  while (element != null) {
    element.click();
    await driver.sleep(1000);
    try {
      element = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiButton-root MuiButton-contained RSFShowMore-button-136 MuiButton-containedPrimary "
        )
      );
    } catch (error) {
      element = null;
    }
  }
}



function generateRandomChoice() {
  let totalChoices = Math.floor(Math.random() * 9)+2;
  let indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let subArray = [];
  while (totalChoices > 0) {
    let choice = indexArray[Math.floor(Math.random() * indexArray.length)+1];
    if (!subArray.includes(choice)) {
      subArray.push(choice);
      totalChoices -= 1;
    }
  }
  return subArray;
}



async function selectMultipleColors(driver){
  let selectedOptions = generateRandomChoice();
  selectedOptions.forEach(async (val) => {
    let element = (
      await driver.findElements(
        By.className(
          "RSFSwatchProductOption-button-116 RSFSwatchProductOption-default-123"
        )
      )
    )[val];
    if(element!=undefined)
     element.click();
     await driver.sleep(1000);
  });

  await driver.sleep(3000);
}

async function filterMultipleColor(driver) {
  await selectMultipleColors(driver);
  await driver.sleep(3000);
  element = await driver.findElement(
    By.className(
      "MuiButtonBase-root MuiButton-root MuiButton-contained RSFShowMore-button-136 MuiButton-containedPrimary "
    )
  );
  while (element != null) {
    element.click();
    await driver.sleep(1000);
    try {
      element = await driver.findElement(
        By.className(
          "MuiButtonBase-root MuiButton-root MuiButton-contained RSFShowMore-button-136 MuiButton-containedPrimary "
        )
      );
    } catch (error) {
      element = null;
    }
  }
  await driver.sleep(1000);
}


async function clickClearBtn(driver){
  try {
    let =  element = await driver.findElements(
      By.css(
        "button"
      )
    );
    element.forEach(async (btn)=>{
      let text = await btn.getText()
      if (text=='clear all')
      {
        btn.click()
      }
    })
  } catch (error) {
    console.log(error)
  }
  await driver.sleep(1000);
}


async function confirmColor(driver,string){
  var confirm = false; 
  try {
    let =  element = await driver.findElements(
      By.css(
        "div.makeStyles-root-87 span"
      )
    );
    element.forEach(async (span)=>{
      let text = await span.getText()
      
      if (text==string)
      {
        confirm = true
      }
    })
  } catch (error) {
    await driver.sleep(1000);
    return false
  }
  await driver.sleep(1000);
  return confirm
}


async function findClearBtn(driver){
  try {
    let =  element = await driver.findElements(
      By.css(
        "button"
      )
    );
    element.forEach(async (btn)=>{
      let text = await btn.getText()
      if (text=='clear all')
      {
        await driver.sleep(1000);
        return true
      }
    })
  } catch (error) {
    await driver.sleep(1000);
    return true
  }
  await driver.sleep(1000);
  return false
 }


function generateId(string) {
  switch (string) {
    case "Red":
      return 0;
    case "Green":
      return 1;
    case "Blue":
      return 2;
    case "Grey":
      return 3;
    case "Teal":
      return 4;
    case "Orange":
      return 5;
    case "Purple":
      return 6;
    case "Black":
      return 7;
    default:
      return -1;
  }
}

module.exports = { filterSingleColor,confirmColor,selectMultipleColors, clickClearBtn, findClearBtn, filterMultipleColor, generateId };
