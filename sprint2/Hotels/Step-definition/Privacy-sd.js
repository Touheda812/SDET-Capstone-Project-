const { Given, When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../Pages/LandingPage");
const PrivacyPage = require("../Pages/PrivacyPage");
const GetTheAppPage = require("../Pages/GetTheAppPage");
const { expect } = require("chai");
const moment = require ("moment")
const Stars5 = require("../Pages/Stars5");

const landingPage = new LandingPage(); 
const privacyPage = new PrivacyPage(); 
const getTheAppPage = new GetTheAppPage(); 
const star5 = new Stars5(); 



Given(/^I am on hotels landing page$/, async function(){
    await browser.url('https://www.hotels.com/')
})

let adultCount = 0; let childCount = 0; 
When(/^I Change (.+) as (.+)$/, async function(field, count){
    switch (field) {
        case 'Adults':
            await landingPage.selectAdultCount(count); 
            adultCount = count; 
            break;
        case 'Children':
            await landingPage.selectChildCount(count); 
            childCount = count; 
            break;

        default:
            break;
    }
});

When(/^I Click (.+)$/, async function(clickIt){
    switch (clickIt) {
        case 'Sign in link':
            await landingPage.clickSignInLink(); 
            break;
        case 'Sign in button':
            await landingPage.clickSignInButton(); 
            break;
        case 'One Key Rewards Terms & Conditions link':
            await privacyPage.clickoneKeyRewardLink(); 
            break;
        //Privacy 
        case 'Privacy Statement link':
            await privacyPage.clickPrivacyStatementLink(); 
            break;
        //Calendar 
        case 'on Dates':
            await landingPage.clickDates(); 
            break;
        //QR Code 
        case 'Get the app button':
            await landingPage.clickGetTheApp(); 
            break;
        //Travelers 
        case 'on Travelers':
            await landingPage.clickTravelersButton(); 
            break;
        case 'Done':
                await landingPage.clickDoneButton(); 
                break;
        case 'on check inOut Done button':
            await landingPage.clickDoneLocator(); 
            await browser.pause(2000)
            break;
        case 'on Hotels Search button':
            await landingPage.clickHotelsSearchButton(); 
            await browser.pause(2000)
            break;
        case 'on Sort By':
            await star5.clickSortBy(); 
            await browser.pause(2000)
            break;
        default:
            break;
    }
})

Then(/^I Verify (.+)$/, async function(verifyIt){
    switch (verifyIt) {
        case 'One Key Terms and Conditions heading is displayed':
            await privacyPage.verifyOneKeyTermsHeading(); 
            break;
        case 'Effective from date format is in correct format (expected format: MMMM d, yyyy)':
            await privacyPage.verifyEffectiveDate(); 
            break;
        case 'Privacy Statement heading is displayed':
            await privacyPage.clickPrivacyStatementHeader(); 
            break;
        case 'Last Updated date format (expected format: MMMM d, yyyy)':
            await privacyPage.verifylastUpdatedDates(); 
            break;
        case 'Scan the QR code and download our app is displayed':
            await getTheAppPage.verifyScanDownload(); 
            break;
        case 'QR Code is displayed':
            await getTheAppPage.verifyQrCode(); 
            break;
        case 'total number of Travelers is sum of adults and children as same as selected':
            // await landingPage.verifyTotalTravelers(); 
            const travelersCountOnWeb = Number(await landingPage.verifyTotalTravelers());
            const travelerCountExpected = Number(adultCount) + Number(childCount);
            expect(travelersCountOnWeb, 'Travelers count is not as expected').to.be.equal(travelerCountExpected);
            break;
        case 'current month is displayed':
            await landingPage.datesCurrentMonth(); 
            break;
        case 'past dates is disabled':
            const currentDate = moment().format('D');
            const disabledDateCount = await landingPage.currentMonthDisbaledDates();
            expect(currentDate - 1, 'Number of disbaled dates are not as expected').to.be.equal(disabledDateCount)
            break;
        case 'back button on current month is disabled':
            await landingPage.previousButtonDisbaled(); 
        default:
            break;
    }

   
})
