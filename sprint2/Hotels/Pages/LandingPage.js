const { expect } = require("chai");
const moment = require("moment");

class LandingPage{
    //Sign In | Privacy | One key terms 
    signInLinkLocator = '//button[text()="Sign in"]'; 

    async clickSignInLink() {
        const signInLink = $(this.signInLinkLocator);
        await signInLink.waitForClickable({ timeout: 2000 }); 
        await signInLink.click();
    }

    signInButtonLocator = '//a[@data-stid="link-header-account-signin"]'; 
    async clickSignInButton(){
        const signInButton = await $(this.signInButtonLocator); 
        await signInButton.waitForClickable({ timeout: 2000 }); 
        await signInButton.click();
    }

    //Calendar 
    locatorForCurrentMonthFirst = '//h2[text()="';
    locatorForCurrentMonthLast = '"]';
    datesLocator = '#date_form_field-btn'; 
    checkInLocator = '//button[@class="uitk-date-picker-day"]';
    previousDatesLocator = '//div[contains(@class,"uitk-layout-flex")]//button[@data-stid="date-picker-paging"][1]';
    afterDatesLocator ='//div[contains(@class,"uitk-layout-flex")]//button[@data-stid="date-picker-paging"][2]';

    async clickDates() {
        const datesElement = await $(this.datesLocator);
        await datesElement.waitForClickable();
        await datesElement.click();
    }
    async datesCurrentMonth() {
    const previousDatesCurrentMonth = await $(this.previousDatesLocator);

    const isPreviousDatesButtonEnabled = await previousDatesCurrentMonth.isEnabled();
    if (isPreviousDatesButtonEnabled) {
        await previousDatesCurrentMonth.click();
    }
    
    const currentMonthYear = moment().format("MMMM yyyy");
    const locatorForCurrentMonthYear = `${this.locatorForCurrentMonthFirst}${currentMonthYear}${this.locatorForCurrentMonthLast}`;
    const locatorForCurrentMonthElement = await $(locatorForCurrentMonthYear);

    await locatorForCurrentMonthElement.waitForDisplayed({ timeout: 4000 });
    const isCurrentMonthDisplayed = await locatorForCurrentMonthElement.isDisplayed();
    expect(isCurrentMonthDisplayed, "Current month is not displayed").to.be.true;
    }

    disabledDatesForCurrentMonthFirst = "//button[contains(@aria-label,";
    disabledDatesForCurrentMonthlast = ") and @disabled]";

    async currentMonthDisbaledDates() {
    const currentMonthAbbreviation = moment().format("MMM");
    const locatorForDisableCurrentMonth = `${this.disabledDatesForCurrentMonthFirst}"${currentMonthAbbreviation}"${this.disabledDatesForCurrentMonthlast}`;
    const locatorForDisableCurrentMonthDates = await $$(locatorForDisableCurrentMonth);

    let disabledDateCount = 0;
    for (const date of locatorForDisableCurrentMonthDates) {
        const classAttributeValue = await date.getAttribute("class");
        if (classAttributeValue.includes("is-disabled")) {
        disabledDateCount++;
        }
    }
    return disabledDateCount;
    }

    async previousButtonDisbaled() {
    const disbaledButton = await $(this.previousDatesLocator).isEnabled();
    expect(disbaledButton, "The button is enabled").to.be.false;
    }

    // CheckIn dates 
    async clickCheckIn(checkIn) {
        const dateButton = await $(this.datesLocator); 
        await dateButton.waitForClickable({ timeout: 5000 }); 
        await dateButton.click();
        let dateFound = false;

        while (!dateFound) {
        const previousDatesCurrentMonth = await $(
            this.previousDatesLocator
        );
        const afterDatesCurrentMonthElement = await $(this.afterDatesLocator);

        const allAvailableDates = await $$(this.checkInLocator);

        for (const date of allAvailableDates) {
            const suggestionCheckInDate = await date.getAttribute("aria-label");
            if (suggestionCheckInDate === checkIn) {
            await date.click();
            dateFound = true;
            break;
            }
        }

        if (!dateFound) {
            const isPreviousDatesButtonEnabled =
            await previousDatesCurrentMonth.isEnabled();
            const isAfterDatesButtonEnabled =
            await afterDatesCurrentMonthElement.isEnabled();

            if (isPreviousDatesButtonEnabled && !isAfterDatesButtonEnabled) {
            await previousDatesCurrentMonth.click();
            } else if (!isPreviousDatesButtonEnabled && isAfterDatesButtonEnabled) {
            await afterDatesCurrentMonthElement.click();
            }
        }
        }
    }

    async clickCheckOUT(checkOUT) {
        let dateFound = false;

        while (!dateFound) {
        const previousDatesCurrentMonth = await $(
            this.previousDatesLocator
        );
        const afterDatesCurrentMonthElement = await $(this.afterDatesLocator);

        const allAvailableDates = await $$(this.checkInLocator);

        for (const date of allAvailableDates) {
            const suggestionCheckInDate = await date.getAttribute("aria-label");
            if (suggestionCheckInDate === checkOUT) {
            await date.click();
            dateFound = true;
            break;
            }
        }

        if (!dateFound) {
            const isPreviousDatesButtonEnabled =
            await previousDatesCurrentMonth.isEnabled();
            const isAfterDatesButtonEnabled =
            await afterDatesCurrentMonthElement.isEnabled();

            if (isPreviousDatesButtonEnabled && !isAfterDatesButtonEnabled) {
            await previousDatesCurrentMonth.click();
            } else if (!isPreviousDatesButtonEnabled && isAfterDatesButtonEnabled) {
            await afterDatesCurrentMonthElement.click();
            }
        }
        
        }
        
    }

    doneLocator = '//button[@data-stid="apply-date-picker"]'; 
    async clickDoneLocator(){
        await $(this.doneLocator).waitForClickable({timeout: 5000});
        await $(this.doneLocator).click()
    }
        
    //Travelers
    travelers = '//button[@data-stid="open-room-picker"]'; 
    async clickTravelersButton(){
        const travelersButton = await $(this.travelers); 
        await travelersButton.waitForClickable({ timeout: 2000 }); 
        await travelersButton.click();
    }

    increaseAdultPlusButton = '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button'
    decreaseAdultMinusButton = '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button'
    
    adultCountValueLocator = '#traveler_selector_adult_step_input-0';
    async getAdultCountValue(){
        return await $(this.adultCountValueLocator).getAttribute('value'); 
    }
    async selectAdultCount(expextedAdultCount){
        for(let i=0; i < 15; i++){
            const adultCount = await this.getAdultCountValue(); 
            if(Number(adultCount) > Number(expextedAdultCount)){
                await $(this.decreaseAdultMinusButton).click(); 
            }
            else if(Number(adultCount) < Number(expextedAdultCount)){
                await $(this.increaseAdultPlusButton).click(); 
            }
            else{
                break; 
            }
            await browser.pause(1000)
        }    
    }
    increaseChildPlusButton = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button'
    decreaseChildMinusButton = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button'

    childCountValueLocator = '#traveler_selector_children_step_input-0'; 
    async getChildCountValue(){
        return await $(this.childCountValueLocator).getAttribute("value"); 
    }

    async selectChildCount(expChildValue){
        for(let i=0; i < 7; i++){
            const childCount = await this.getChildCountValue(); 
            if(Number(childCount) > Number(expChildValue)){
                await $(this.decreaseChildMinusButton).click();
            }
            else if(Number(childCount) < Number(expChildValue)){
                await $(this.increaseChildPlusButton).click();
            }
            else{
                break;
            }
            await browser.pause(1000)
        }
    }
    childAgeDropdownLocator = '//select[@id="age-traveler_selector_children_age_selector-0-'
    childAgeDropdownLocatorEnds = '"]'

    async selectChildAge(childNum, childAge) {
        childNum = Number(childNum) - 1;
        const childAgeLocator = this.childAgeDropdownLocator + childNum + this.childAgeDropdownLocatorEnds;
        const childAgeDropdown = await $(childAgeLocator);
        childAgeDropdown.selectByVisibleText(childAge);
    }
    doneButtonLocator = '#traveler_selector_done_button'; 
    async clickDoneButton(){
        const doneButton = await $(this.doneButtonLocator); 
        await doneButton.waitForClickable({ timeout: 2000 }); 
        await doneButton.click();
    }
    searchButtonLocator = '#search_button'; 
    async clickHotelsSearchButton(){
        const searchButton = await $(this.searchButtonLocator); 
        await searchButton.waitForClickable({ timeout: 2000 }); 
        await searchButton.click();
    }

    totalTravelersLocator = '//label[text()="Travelers"]/following-sibling::input'; 
    async verifyTotalTravelers(){
        const totalTravelers = await $(this.totalTravelersLocator).getAttribute('value');
        return totalTravelers.split(' ')[0]; 
    }
    //Search 
    clickSearchLocator = '//button[@aria-label="Going to"]'; 
    searchLocator = '#destination_form_field'; 
    async clickSearchButton(destination) {
        await $(this.clickSearchLocator).click(); 
        await $(this.searchLocator).setValue(destination);
    }

    //Search AutoSuggestion
  searchSuggestionsLocator =
  '//button[@data-stid="destination_form_field-result-item-button"]';

    async selectFromAutoSuggestion(searchTHis) {
    const allSuggestion = await $$(this.searchSuggestionsLocator);
    for (const suggestion of allSuggestion) {
        const suggestionDate = await suggestion.getAttribute("aria-label");
        if (suggestionDate.startsWith(searchTHis)) {
        await suggestion.click();
        break;
        }
    }
    }

    //QR Code 
    getTheAppLocator = '//div[text()="Get the app"]'; 
    async clickGetTheApp(){
        const getTheAppButton = await $(this.getTheAppLocator); 
        await getTheAppButton.waitForClickable({ timeout: 5000 }); 
        await getTheAppButton.click();
    }
}

module.exports = LandingPage;