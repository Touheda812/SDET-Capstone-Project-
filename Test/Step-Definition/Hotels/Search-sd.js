const { expect } = require("chai");
const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const searchPage = require("../../Pages/Hotels/searchPage");

const landingPage = new LandingPage();
const SearchPage = new searchPage();

When(/^I enter (.+) in Search box$/, async function(destination){
    await landingPage.clickSearchBox(destination); 
    await browser.pause(3000); 
})

When(/^I select (.+) from Search Autosuggestion$/, async function(pickSearchResult){
    await landingPage.selectSearchResult(pickSearchResult); 
    await browser.pause(3000); 

})

Then(/^I verify Going to has the (.+) on Search Results page$/, async function(expgoingTo){
    goingtoText = await SearchPage.verifyResult(); 
    expect(goingtoText.includes(expgoingTo), 'Going to text is not as expected').to.be.true; 
})
