const {expect} = require('chai')
const {Given, Then} = require ('@wdio/cucumber-framework');
const LandingPage = require('../../Pages/Hotels/LandingPage');
const moment = require('moment');

const landingPage = new LandingPage();

Given(/^I am on hotels landing page$/, async function(){
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000);
})


Then(/^I verify past dates in current month are disabled$/, async function(){
    const currentMonthYear = moment().format('MMMM yyyy');
    const currentDate = moment().format('D')

    await landingPage.goToCalendar(currentMonthYear);
    const disabledDateCount = await landingPage.getDisabledDatesCount(currentMonthYear);
    expect(currentDate - 1, 'Number of disabled dates are not as expected').to.be.equal(disabledDateCount)
})