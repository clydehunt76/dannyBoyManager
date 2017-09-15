"use strict";

var mock = require("mock-require")

mock("../../common/loginHelper", "../mocks/loginHelper")

var http = require('http');
var app = require('../../app');
var server;

Feature('Testing base login functionality');

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

    I.waitForText("Danny Boy Jazz & Blues Events Manager - Home", 5)
    I.seeInCurrentUrl("/home")
});
