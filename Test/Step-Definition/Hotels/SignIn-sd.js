
const { When } = require("@wdio/cucumber-framework");
const SignIn = require("../../Pages/Hotels/SignInPage");

const signIn = new SignIn(); 


When(/^I enter invalid email address$/, async function(){
    await signIn.enterEmail('abcd'); 
    await browser.pause(3000); 
})