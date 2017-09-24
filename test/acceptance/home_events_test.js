"use strict";

var mock = require("mock-require")
mock("../../common/loginHelper", "../mocks/loginHelper")

var http = require('http');
var app = require('../../app');
var server;

Feature('Testing home page functionality');

BeforeSuite((I) => {
    server = http.createServer(require('../../app'));
    server.listen(3000);
});

AfterSuite((I) => {
    server.close();
});

Scenario('HOME:EVENTS:TEST1: Confirm home page shows expected tabs', (I) => {
    I.amOnPage('/home');
    I.see('Danny Boy Jazz & Blues Events Manager - Home');

    I.see("Events")
    I.see("Artists")
    I.see("Venues")
    I.see("Gigs")
    I.see("Reports")
});
