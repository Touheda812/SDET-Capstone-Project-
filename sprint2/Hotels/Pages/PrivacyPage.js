const {expect} = require('chai');
const moment = require('moment');

class PrivacyPage{
    oneKeyRewardLink = '//a[text()="One Key Rewards Terms & Conditions"]'; 
    async clickoneKeyRewardLink(){
        const oneKeyReward = await $(this.oneKeyRewardLink);
        await oneKeyReward.waitForClickable({ timeout: 5000 }); 
        await oneKeyReward.click();
    }

    OneKeyTermsHeading = '//h1[text()="One Key Terms and Conditions"]'; 
    async verifyOneKeyTermsHeading(){
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1

        const oneKeyTerms = await $(this.OneKeyTermsHeading); 
        await oneKeyTerms.waitForDisplayed(); 
        const OneKeyDisplayed = await oneKeyTerms.isDisplayed(); 
        expect(OneKeyDisplayed, 'One Key Terms and Conditions heading is Not displayed').to.be.true;
    }
    
    effectiveDatesLocator = '//p[contains(text(),"Effective from")]'; 

    async verifyEffectiveDate(){
        const effectiveDates = await $(this.effectiveDatesLocator);         
        const getTextEffectiveDates = await effectiveDates.getText(); 
        const splitText = getTextEffectiveDates.split(" "); 
        console.log(splitText); //[ 'Effective', 'from', 'July', '6,', '2023' ]
        const sliceJoinText = splitText.slice(2).join(" ")
        console.log(sliceJoinText); //July 6, 2023
        const expectedDateFormat = 'MMMM D, YYYY'
        const formatSliceJoinText = moment(sliceJoinText, expectedDateFormat, true); 
        expect(formatSliceJoinText.isValid(), 'Effective from date format is not displayed correctly').to.be.true; 
    }


    privacyStatementLink = '//a[text()="Privacy Statement"]'; 
    async clickPrivacyStatementLink(){
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[0]); // Change to the second window using index 1
        
        const privacyStatement = await $(this.privacyStatementLink);
        await privacyStatement.waitForClickable({ timeout: 5000 }); 
        await privacyStatement.click();
    }

    privacyStatementHeaderLocator = '//div[@class="policy-content"]/preceding-sibling::h2';
    async clickPrivacyStatementHeader(){
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[2]); // Change to the second window using index 1
        
        const privacyStatementHeader = await $(this.privacyStatementHeaderLocator);
        await privacyStatementHeader.waitForClickable({ timeout: 5000 }); 
        await privacyStatementHeader.click();
    }

    lastUpdatedLocator = '//p[contains(text(), "Last Updated")]'; 
    async verifylastUpdatedDates(){
        const lastUpdated = await $(this.lastUpdatedLocator);
        const getTextLastUpdated = await lastUpdated.getText(); 
        const splitTextLastUpdated = getTextLastUpdated.split(" "); 
        console.log(splitTextLastUpdated); //[ 'Effective', 'from', 'July', '6,', '2023' ]
        const sliceJoinLastUpdatedText = splitTextLastUpdated.slice(2).join(" ")
        console.log(sliceJoinLastUpdatedText); //July 6, 2023
        const expectedDateFormat1 = 'MMMM D, YYYY'
        const formatSliceJoinText1 = moment(sliceJoinLastUpdatedText, expectedDateFormat1, true); 
        expect(formatSliceJoinText1.isValid(), 'Last Updated date format is not displayed correctly').to.be.true; 
    }
   
}
module.exports = PrivacyPage; 