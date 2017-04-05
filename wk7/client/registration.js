var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

browser.get('http://localhost:29461/Account/Register');

browser.findElement(By.id('Email')).sendKeys('frank@backend.com');
browser.findElement(By.id('Password')).sendKeys('P@ssw0rd');
browser.findElement(By.id('ConfirmPassword')).sendKeys('P@ssw0rd');

// browser.findElement(By.css('div button'));
browser.findElement(By.css('button[class="btn btn-default"')).click();


// browser.wait(until.elementLocated(By.id('Email')), 2000, 'Timed out waiting for email field to be present');