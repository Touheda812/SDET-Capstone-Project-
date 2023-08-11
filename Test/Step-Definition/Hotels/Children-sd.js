const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage")
const landingPage = new LandingPage(); 

Then(/^I verify Children-age dropdown are (.+)$/, async function(childAgeNum){
    await landingPage.childrenAgNum(childAgeNum); 
    await browser.pause(3000)
})

Then(/^I verify (.+) is enabled$/, async function(enableBtn){
    switch (enableBtn) {
        case 'Plus-button':
            await landingPage.enableIncrease(); 
            break;
        case 'minus-button':
            await landingPage.enableDecrease(); 
            break;
    
        default:
            break;
    }
})


Then(/^I verify (.+) is disabled$/, async function(disbaledBtn){
    switch (disbaledBtn) {
        case 'Plus button children':
            await landingPage.disableIncrease(); 
            break;
        case 'minus button children 0':
            await landingPage.disableDecrease(); 
            break;
    
        default:
            break;
    }
})

