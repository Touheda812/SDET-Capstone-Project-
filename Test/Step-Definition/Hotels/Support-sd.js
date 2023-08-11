const { When } = require("@wdio/cucumber-framework");
const SupportPage = require("../../Pages/Hotels/SupportPage");

const supportPage = new SupportPage();

When(/^I Select any (.+) rating$/, async function(rating){
    switch (rating) {
        case 'OVERALL':
            await supportPage.overrallLocatorClick();
            break;
        case 'CONTENT':
            await supportPage.contentRatingLocatorClick();
            break;
        case 'DESIGN':
            await supportPage.designRatingLocatorClick();
            break;
        case 'EASE OF USE':
            await supportPage.easyUseLocatorClick();
            break;
        default:
            break;
    }

})