Feature('Testing base login functionality');

var http = require('http');
var app = require('../../app');
var server;

BeforeSuite((I) => {
    server = http.createServer(require('../../app'));
    server.listen(3000);
});

AfterSuite((I) => {
    server.close();
});

Scenario('LOGIN:TEST1: Validate login screen is available at root folder', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Event Manager');
    I.see('Username (email address)');
    I.see('Password');
});

Scenario('LOGIN:TEST2: Confirm an appropriate error message is displayed if invalid email address is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'notanemail')
    I.click('#loginBtn')

    I.see("Please provide a valid email address")
});

Scenario('LOGIN:TEST3: Confirm an error message is not displayed if valid email address is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.click('#loginBtn')

    I.dontSee("Please provide a valid email address")
});

Scenario('LOGIN:TEST4: Confirm an appropriate error message is displayed if invalid email address is not entered, then disappears if corrected', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'notanemail')
    I.click('#loginBtn')

    I.see("Please provide a valid email address")

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.click('#loginBtn')

    I.dontSee("Please provide a valid email address")
});
