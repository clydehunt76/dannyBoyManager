"use strict";

Feature('Testing base login functionality');

var http = require('http');
var app = require('../../app');
var server;
Feature('Testing base authentication functionality');

BeforeSuite((I) => {
    server = http.createServer(require('../../app'));
    server.listen(3000);
});

AfterSuite((I) => {
    server.close();
});


Scenario('LOGIN:AUTH:TEST1: Confirm site redirects to home after successful authentication', (I) => {
    I.amOnPage('/');
    I.see('Danny Boy Jazz & Blues Event Manager');
    I.see('Enter');

    I.click('#loginBtn')
    I.waitForText("Danny Boy Events Manager", 5)
    I.wait(4)

    I.clearCookie();
    I.refreshPage();

    I.fillField("email", "clydehunt@yahoo.co.uk")
    I.fillField("password", "L1mavady");
    I.click("LOG IN")

    I.wait(3)

    I.waitForText("Danny Boy Jazz & Blues Events Manager - Home", 5)
    I.seeInCurrentUrl("/home")

});
//
// Scenario('LOGIN:AUTH:TEST2: Confirm suitable error massage displayed after failed authentication', (I) => {
//     I.amOnPage('/');
//     I.see('Danny Boy Jazz & Blues Event Manager');
//     I.see('Username (email address)');
//     I.see('Password');
//
//     I.fillField('#userIdEmail1', 'valid@email.com')
//     I.fillField('#passwordField1', 'anInvalidpassw0rd')
//
//     I.click('#loginBtn')
//
//     I.waitForText("Invalid email and/or password supplied, please try again")
//     I.seeInCurrentUrl("/login")
//
// });
