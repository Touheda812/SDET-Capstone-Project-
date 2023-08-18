const { When } = require("@wdio/cucumber-framework");
const LandingPage = require("../Pages/LandingPage");

const landingPage = new LandingPage(); 

When(/^I Select child-(.+) age as (.+)$/, async function (childNum, childAge) {
    await landingPage.selectChildAge(childNum, childAge);
    await browser.pause(5000)
});
    

    