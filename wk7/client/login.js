var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var sensitive = require('./sensitive');

var browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

browser.get('http://localhost:29461/Account/Login');
browser.findElement(By.id('Email')).sendKeys(sensitive.email);
browser.findElement(By.id('Password')).sendKeys(sensitive.password);
browser.findElement(By.id('RememberMe')).click();
browser.findElement(By.css('button[class="btn btn-default"')).click();
