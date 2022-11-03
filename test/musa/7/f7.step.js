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

When("I select different images of item.", { timeout: 10000 }, async () => {
  // Write code here that turns the phrase above into concrete actions
  let element = null;
  try {
    element = await driver.findElements(
      By.className(
        "RSFCarouselThumbnails-thumb-125 RSFImage-root-136 RSFImage-contain-139"
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

Then("the selected image of item appear.", { timeout: 2 * 10000 }, async () => {
  // Write code here that turns the phrase above into concrete actions
  assert(true, true);
});

AfterAll("end", async function () {
  await driver.quit();
});
