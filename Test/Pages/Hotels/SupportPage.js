const { expect } = require("chai")

class SupportPage{
    siteFeedbackLocator = '//a[text()="Site Feedback"]'
    overallRatingLocator = '#overall-3'
    contentRatingLocator='#content-3'
    designRatingLocator='#design-3'
    easyUseLocator='#usability-3'

    async clickSiteFeedback(){
        await $(this.siteFeedbackLocator).click(); 
    }

    
    async overrallLocatorClick(){
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1
        await $(this.overallRatingLocator).click()
        await browser.pause(2000)
    }

    async contentRatingLocatorClick(){
        await $(this.contentRatingLocator).click()
        await browser.pause(2000)
    }

    async designRatingLocatorClick(){
        await $(this.designRatingLocator).click()
        await browser.pause(2000)
    }

    async easyUseLocatorClick(){
        await $(this.easyUseLocator).click()
        await browser.pause(2000)
    }
    thankYouMessageLocator = '#int-thankyou-heading';
    async thankYouMessageDisplayed(){
        const messageDisplayed = await $(this.thankYouMessageLocator).isDisplayed(); 
        expect(messageDisplayed, 'Message is not displayed').to.be.true; 
    }
}
module.exports = SupportPage; 