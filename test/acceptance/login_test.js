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
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');
});

Scenario('LOGIN:TEST2: Confirm an appropriate error message is displayed if invalid email address is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'notanemail')
    I.click('#loginBtn')

    I.see("Please provide a valid email address")
});

Scenario('LOGIN:TEST3: Confirm an error message is not displayed if valid email address is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.click('#loginBtn')

    I.dontSee("Please provide a valid email address")
});

Scenario('LOGIN:TEST4: Confirm an appropriate error message is displayed if invalid email address is not entered, then disappears if corrected', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'notanemail')
    I.click('#loginBtn')

    I.see("Please provide a valid email address")

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.click('#loginBtn')

    I.dontSee("Please provide a valid email address")
});

Scenario('LOGIN:TEST5: Confirm an appropriate error message is displayed if an email address is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.click('#loginBtn')

    I.see("Please provide a valid email address")
});

Scenario('LOGIN:TEST6: Confirm an appropriate error message is displayed if a password is not entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.click('#loginBtn')

    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST7: Confirm an error message is not displayed if a valid password is entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#passwordField1', 'AValidpassw0rd')
    I.click('#loginBtn')

    I.dontSee("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST8: Confirm an error message is displayed if a password with no uppercase chars is entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#passwordField1', 'avalidpassw0rd')
    I.click('#loginBtn')

    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST9: Confirm an error message is displayed if a password with no lowercase chars is entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#passwordField1', 'avalidpassw0rd')
    I.click('#loginBtn')

    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST10: Confirm an error message is displayed if a password with no digits is entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#passwordField1', 'avalidpassw0rd')
    I.click('#loginBtn')

    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST11: Confirm an error message is displayed if an invalid password is entered, then disappers when a valid is entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#passwordField1', 'avalidpassw0rd')
    I.click('#loginBtn')

    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")

    I.fillField('#passwordField1', 'aValidpassw0rd')
    I.click('#loginBtn')

    I.dontSee("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST12: Confirm both error messages are displayed no values are entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.click('#loginBtn')

    I.see("Please provide a valid email address")
    I.see("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});

Scenario('LOGIN:TEST13: Confirm no error messages are displayed if valid values are entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.fillField('#passwordField1', 'aValidpassw0rd')
    I.click('#loginBtn')

    I.dontSee("Please provide a valid email address")
    I.dontSee("Please provide a password. Must be greater than 6 chars long and contain a mix of upper and lower case chars, and digits")
});
Feature('Testing base authentication functionality');

BeforeSuite((I) => {
    server = http.createServer(require('../../app'));
    server.listen(3000);
});

AfterSuite((I) => {
    server.close();
});


Scenario('LOGIN:AUTH:TEST1: Confirm both error messages are displayed no values are entered', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Username (email address)');
    I.see('Password');

    I.fillField('#userIdEmail1', 'valid@email.com')
    I.fillField('#passwordField1', 'aValidpassw0rd')

    I.click('#loginBtn')

    I.waitForText("Danny Boy Jazz & Blues Events Manager - Home")

});
