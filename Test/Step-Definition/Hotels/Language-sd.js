const {  Then, When } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const ListProperties = require("../../Pages/Hotels/ListProperties");
const SignIn = require("../../Pages/Hotels/SignInPage");
const SupportPage = require("../../Pages/Hotels/SupportPage");
const SubmitPage = require("../../Pages/Hotels/SubmitPage");

const landingPage = new LandingPage(); 
const submitPage = new SubmitPage(); 
const supportPage = new SupportPage(); 
const listProperties = new ListProperties(); 
const signIn = new SignIn(); 


When(/^I Click on (.+)$/, async function(clickOn){
    switch (clickOn) {
        //Language
        case 'English language':
            await landingPage.clickEnglishLang(); 
            break;
        case 'Español language':
            await landingPage.clickOnEspanol(); 
            break;
        //Button 
        case 'Search button':
            await landingPage.clickSearchButton(); 
            break;
        case 'Sign in button':
            break;
        case 'Dates button':
            await landingPage.openCalendar();
            break;     
        case 'Continue button on the sign In page':
            await signIn.clickContinueButton();
            break; 
        //Sign in 
        case 'Sign in link':
            await landingPage.clickSignIn();
            break;
        case 'Sign in button on the sign In page':
            await landingPage.clickSignUp();
            break;

        case "Support":
            await landingPage.clickSupport();
            break;
        case "Site Feedback":
            await supportPage.clickSiteFeedback();
            break;
        case "Submit button":
            await submitPage.clickSubmit();
            await browser.pause(3000)
            break;
    
        case "List your property":
            await landingPage.clickProperty(); 
            break;
        case "Private residence":
            await listProperties.clickPrivateResidence(); 
            break;

        case "Done button on Travelers":
            await landingPage.clickTravelersDoneButton();  
            break;
        
        case 'Save button on the Language':
            await landingPage.clickSaveButton(); 
            break;
        case 'Guardar button on the Language':
            await landingPage.clickGuardarButton(); 
            break;

        case 'Next button':
            await listProperties.clickNextButton(); 
            break;

        default:
            break;
    }
})

When(/^I select (.+)$/, async function(selectIt){
    switch (selectIt) {
        case 'English in Language dropdown':
            await landingPage.selectEnglish(); 
            break;
        case 'Español in Language dropdown':
            await landingPage.selectSpanish(); 
            break;

        case 'Bordeaux Gironde, France from Search Autosuggestion':
            await landingPage.selectSearchResult();  
            break;


        default:
            break;
    }
})

Then(/^I verify (.+) is displayed$/, async function(verifyDisplayed){
    switch (verifyDisplayed) {
        case 'English':
            await landingPage.englishIsDisplayed();
            break;
        case 'Español':
            await landingPage.españolIsDisplayed(); 
            break;

        case 'What would you like to list':
            await listProperties.displayMessage(); 
            break;

        case 'Where is your property located':
            await listProperties.placeLocatedLocatorDisplayed(); 
            break;
            
        case 'Lodging and Private residence options':
            await listProperties.lodgingPrivateVerify(); 
            break;

        case 'Step 1 of 3':
            await listProperties.verifyStep1to3(); 
            await browser.pause(3000);
            break;

        case 'Step 2 of 3':
            await listProperties.verifyStep2to3(); 
            await browser.pause(3000);
            break;

        case 'error message':
            await signIn.errorMessage();
            break;

        case 'error-message': 
            await submitPage.verifyErrorDisplayed();
            break;
            
        case 'red-box error': 
            await submitPage.verifyRedBoxErrorDisplayed();
            break;

        case 'map': 
            await listProperties.verifyMapDisplayed();
            break;

        case 'pin in map': 
            await listProperties.mapPinDisplayed();
            break;

        case 'Move the pin to adjust the location of your property.': 
            await listProperties.mapBelowTextDisplayed();
            break;
            
        
        default:
            break;
    }
    
    
})
    