const { expect } = require("chai");

class LandingPage {
    //Calendar Locators
    datesInputOpenLocator = '#date_form_field-btn';
    
    //Calendar
    previousCalendarLocator = '(//button[@data-stid="date-picker-paging"])[1]'
    nextCalendarLocator = '(//button[@data-stid="date-picker-paging"])[2]'
    leftCalendarHeadingLocator = '(//h2)[1]'
    allDatesInAMonthLocator_Start = '//h2[text()="';
    allDatesInAMonthLocator_End = '"]/following-sibling::table//button';

    //Search button locators 
    searchButtonTrigger = '//button[@aria-label = "Going to"]'
    searchBoxInput = '#destination_form_field';
    selectSearchAutosuggestion = '//button[@data-stid="destination_form_field-result-item-button"]'
    searchButton = '#search_button';

    // Travelers
    travelerInputTriggerLocator = '//button[@data-stid = "open-room-picker"]';
    plusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
    minusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button';
    adultsCountLocator = "#traveler_selector_adult_step_input-0";
    plusChildrenLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    minusChildrenLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    childrenCountLocator = "#traveler_selector_children_step_input-0";
    childAgeDropdownLocator_starts = '//select[@id="age-traveler_selector_children_age_selector-0-';
    childAgeDropdownLocator_ends = '"]';
    travelersDoneButtonLocator = "#traveler_selector_done_button";
    travelersInfoLocator = '//label[text()="Travelers"]/following-sibling::input'

    searchButtonLocator = "#search_button";
    datesInputOpenLocator = '#date_form_field-btn';

    // doneButtonLocator = '#traveler_selector_done_button';
    childAgeDropdownLocator_starts = '//select[@id="age-traveler_selector_children_age_selector-0-';
    childAgeDropdownLocator_ends = '"]';
    travelersDoneButtonLocator = '//button[text()="Done"]';

    finalTravelersCount = '//label[text()="Travelers"]/following-sibling::input'; 

    //Sign In Locators
    signInLink = '//button[text()="Sign in"]';  
    //Sign up locator 
    signUpLocator = '//a[@data-stid="link-header-account-signin"]'; 
    async clickSignUp(){
        await $(this.signUpLocator).click(); 
    }
    
    // ************** Language Locators and feature *******************
    //English Language 
    englishLangButton = '//button[@data-stid="button-type-picker-trigger"]'; 
    async clickEnglishLang(){
        await $(this.englishLangButton).click(); 
    }
    English = '//div[text()="English"]'
    async englishIsDisplayed(){
        const displayedEnglish = await $(this.English).isDisplayed(); 
        expect(displayedEnglish, 'English is not displayed').to.be.true; 
    }
    //Espaniol 
    languageSelector = '#language-selector';
    async selectSpanish(){
        const chooseLanguage = await $(this.languageSelector);
        await chooseLanguage.selectByVisibleText('Español (Estados Unidos)')
    }
    async selectEnglish(){
        const chooseLanguageEng = await $(this.languageSelector);
        await chooseLanguageEng.selectByVisibleText('English (United States)')
    }

    //Save button 
    saveButtonElement = '//button[text()="Save"]';
    async clickSaveButton(){
        await $(this.saveButtonElement).click(); 
    }

    //Guardar button 
    guardarButtonElement = '//button[text()="Guardar"]';
    async clickGuardarButton(){
        await $(this.guardarButtonElement).click(); 
    }

    //Español
    Español = '//div[text()="Español"]'
    async españolIsDisplayed(){
        const displayedEspanol = await $(this.Español).isDisplayed(); 
        expect(displayedEspanol, 'Espanol is not displayed').to.be.true; 
    }
    async clickOnEspanol(){
        await $(this.Español).click(); 
    }
    // ************** Property Locators and feature *******************
    propertyLocator = '//div[text()="List your property"]'; 
    async clickProperty(){
        await $(this.propertyLocator).click(); 
    }
    // ************** Support Locators and feature *******************
    supportLinkLocator = '//div[text()="Support"]'; 
    async clickSupport(){
        await $(this.supportLinkLocator).click()
    }

    //Calendar Functions 
    async openCalendar() {
        await $(this.datesInputOpenLocator).click();
    }

    async getDisabledDatesCount(monthYear) {
        const allDatesInAMonthLocator = this.allDatesInAMonthLocator_Start + monthYear + this.allDatesInAMonthLocator_End;
        const allDates = await $$(allDatesInAMonthLocator);
        let disabledDateCount = 0;
        for (const date of allDates) {
            const classAttributeValue = await date.getAttribute('class');
            if (classAttributeValue.includes('is-disabled')) {
                disabledDateCount++;
            }
        }
        return disabledDateCount;
    }

    async goToCalendar(monthYear) {

        await browser.pause(1000)

        const previousCalendarArrowEnabled = await $(this.previousCalendarLocator).isEnabled();

        for (let i=0 ; i<10 ; i++) {
            let leftCalendarHeading = await $(this.leftCalendarHeadingLocator).getText();

            if (leftCalendarHeading.localeCompare(monthYear) !== 0) {
                if(previousCalendarArrowEnabled) {
                    await $(this.previousCalendarLocator).click()
                } else {
                    await $(this.nextCalendarLocator).click()
                }
            } else {
                break;
            }
        }
    }

    //search box Functions 
    async clickSearchBox(searchDestination) {
        await $(this.searchButtonTrigger).click();
        await $(this.searchBoxInput).setValue(searchDestination);
    }

    async selectSearchResult(select) {
        await browser.pause(3000);
        const allSuggesstions = await $$(this.selectSearchAutosuggestion);
        for (const suggestions of allSuggesstions) {
            const suggestionResult = await suggestions.getAttribute('aria-label')
            if (suggestionResult.startsWith(select)) {
                await suggestions.click();
                break;
            }
        }
    }

    async clickSearchButton() {
        await $(this.searchButton).click();
    }


    //Travelers Function 

    async getAdultCount() {
        return await $(this.adultsCountLocator).getAttribute("value");
    }

    async getChildrenCount() {
        return await $(this.childrenCountLocator).getAttribute("value");
    }

    async selectAdults(expAdultCount) {
        if (!(await $(this.travelersDoneButtonLocator).isDisplayed())) {
            await $(this.travelerInputTriggerLocator).click();
        }
        await browser.pause(1000);
        for (let i = 0; i < 10; i++) {
            const adultCount = await this.getAdultCount();
            if (Number(adultCount) < Number(expAdultCount)) {
                await $(this.plusAdultsLocator).click();
            } else if (Number(adultCount) > Number(expAdultCount)) {
                await $(this.minusAdultsLocator).click();
            } else {
                break;
            }
            await browser.pause(1000);
        }
    }

    async selectChildren(expChildrenCount) {
        if (!(await $(this.travelersDoneButtonLocator).isDisplayed())) {
            await $(this.travelerInputTriggerLocator).click();
        }
        await browser.pause(1000);
        for (let i = 0; i < 10; i++) {
            const childrenCount = await this.getChildrenCount();
            if (Number(childrenCount) < Number(expChildrenCount)) {
                await $(this.plusChildrenLocator).click();
            } else if (Number(childrenCount) > Number(expChildrenCount)) {
                await $(this.minusChildrenLocator).click();
            } else {
                break;
            }
            await browser.pause(1000);
        }
    }

    async selectChildAge(childNum, childAge) {
        childNum = Number(childNum) - 1;
        const childAgeLocator = this.childAgeDropdownLocator_starts + childNum + this.childAgeDropdownLocator_ends;
        const childAgeDropdown = await $(childAgeLocator);
        childAgeDropdown.selectByVisibleText(childAge);
    }

    async clickTravelersDoneButton() {
        await $(this.travelersDoneButtonLocator).click();
    }

    async getTravelersCount() {
        const travelersInfo = await $(this.travelersInfoLocator).getAttribute('value');
        return travelersInfo.split(' ')[0]
    }

    async clickTravelersDoneButton() {
        await $(this.travelersDoneButtonLocator).click();
    }

    async travelerCountDisplays(){
        const travelersInfor = await $(this.finalTravelersCount).getAttribute('value');
        return travelersInfor.split(' ')[0];
    }

    //Sign In Function 
    async clickSignIn(){
        await $(this.signInLink).click(); 
    }

    childNumLocator = '#traveler_selector_children_step_input-0'; 
    async childrenAgNum(ageValue){
        const verifyChildAge = await $(this.childNumLocator).getAttribute("value"); 
        expect(verifyChildAge, '').to.be.equal(ageValue); 
    }
    plusChildrenLocator = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
    minusChildrenLocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
    
    async enableIncrease(){
        const isEnablePlus = await $(this.plusChildrenLocator).isEnabled(); 
        expect(isEnablePlus, '').to.be.true;

    }
    async enableDecrease(){
        const isEnableMinus = await $(this.minusChildrenLocator).isEnabled(); 
        expect(isEnableMinus, '').to.be.true;

    }

    async disableIncrease(){
        const isEnablePlusDisable = !(await $(this.plusChildrenLocator).isEnabled()); 
        expect(isEnablePlusDisable, '').to.be.true;

    }

    async disableDecrease(){
        const isEnableMinusDisable = !(await $(this.minusChildrenLocator).isEnabled()); 
        expect(isEnableMinusDisable, '').to.be.true;

    }
}


module.exports = LandingPage; 