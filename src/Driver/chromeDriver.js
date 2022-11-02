const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let service = new chrome.ServiceBuilder(chromedriver.path).build();
let options = new chrome.Options();
module.exports = chrome.Driver.createSession(options, service);