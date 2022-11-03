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

When('I hover the item image.', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the item image zoomed.', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('show item image more clearly', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the cursor moved either left or right', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the item image also move', function () {
  // Write code here that turns the phrase above into concrete actions
  assert(true, true)
});