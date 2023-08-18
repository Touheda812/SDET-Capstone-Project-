const { When } = require("@wdio/cucumber-framework")
const LandingPage = require("../Pages/LandingPage")

const landingPage = new LandingPage(); 

When(/^I Search (.+)$/, async function(searchIt){
    await landingPage.clickSearchButton(searchIt);
    await browser.pause(4000) 
})

When(/^I Enter (.+) date as (.+)$/, async function(check, selectDate) {
    switch (check) {
        case 'Check-in':
            await landingPage.clickCheckIn(selectDate);
            break;
        case 'Check-out':
            await landingPage.clickCheckOUT(selectDate);  // Make sure you have a function for clicking Check Out
            break;
        default:
            break;
    }
    await browser.pause(3000);
});

When(/^I select (.+)$/, async function(Autosuggestion){
    await landingPage.selectFromAutoSuggestion(Autosuggestion)
    await browser.pause(3000)
           
})