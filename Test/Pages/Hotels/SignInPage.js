const{expect} = require ('chai')
class SignIn{
    //Locators 
    emailLocator = '#loginFormEmailInput'; 
    continueButton = '#loginFormSubmitButton'; 
    errorMessageElement = '#loginFormEmailInput-error'; 

    //Function 
    async enterEmail(textEmail){
        await $(this.emailLocator).setValue(textEmail)
    }
    async clickContinueButton(){
        await $(this.continueButton).click();
    }
    async errorMessage(){
        const errorIsDisplayed = await $(this.errorMessageElement).isDisplayed(); 
        expect(errorIsDisplayed, 'Error Message is not displayed').to.be.true;
    }

}
module.exports = SignIn; 
