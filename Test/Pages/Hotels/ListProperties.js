const { expect } = require("chai");

class ListProperties {
  
  listYourPropertyDisplay= '//p[text()="What would you like to list?"]'
  async displayMessage(){
      //Switch to the new window/tab if needed
      const windowHandles = await browser.getWindowHandles();
      await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1
      await $(this.listYourPropertyDisplay).isDisplayed()
      await browser.pause(3000)
  }

  //verify Lodging and Private residence options are displayed
  lodgingLocator = "#classification_lodging";
  privateResidenceLocator = "#classification_privateResidence";

  async lodgingPrivateVerify() {
    const loadIsDisplayed = await $(this.lodgingLocator).isDisplayed();
    // expect(loadIsDisplayed, 'Lodging is Not Displayed').to.be.true;

    const privateResidenceLocatorIsDisplayed = await $(this.privateResidenceLocator).isDisplayed();
    // expect(privateResidenceLocatorIsDisplayed, 'Private residence is Not Displayed').to.be.true;
  }
  async clickPrivateResidence(){
    await $(this.privateResidenceLocator).click()
    await browser.pause(2000);
  }
  step1to3Locator = '//div[text()="Step 1 of 3"]';
  async verifyStep1to3() {
    const step1to3IsDisplayed = await $(this.step1to3Locator).isDisplayed();
    await browser.pause(3000);
    expect(step1to3IsDisplayed, "Step 1 to 3 is not Displayed").to.be.true;
  }


  decreaseBedroomLocator = '//button[@aria-label="Decrease bedrooms"]'
  increaseBedroomLocator = '//button[@aria-label="Increase bedrooms"]'


  bedroomNumberLocator = '//input[@name="bedroom-count"]/preceding-sibling::span'

  async getBedroomNumberCount() {
      
      const bedRoomElement = await $(this.bedroomNumberLocator);
      const bedRoomText = await bedRoomElement.getText(); // Get the text "4 bedrooms"
      const bedroomNumberText = bedRoomText.split(' ')[0]; // Split and get the first part "4"
      const bedroomNumber = Number(bedroomNumberText); // Convert to a number          
      return bedroomNumber;
  }

    
  async selectBedroom(expBedroomCount) {
      await browser.pause(2000);
      for (let i = 0; i < 10; i++) {
        const bedroomCount = await this.getBedroomNumberCount();
      if (Number(bedroomCount) < Number(expBedroomCount)) {
          await $(this.increaseBedroomLocator).click();
      } else if (Number(bedroomCount) > Number(expBedroomCount)) {
          await $(this.decreaseBedroomLocator).click();
      } else {
          break;
      }

      }
    }

  decreaseBathroomLocator = '//button[@aria-label="Decrease bathrooms"]'
  increaseBathroomLocator = '//button[@aria-label="Increase bathrooms"]'
  bathroomNumberLocator = '//input[@name="bathroom-count"]/preceding-sibling::span'

  async getBathroomNumberCount() {
      const bathRoomElement = await $(this.bathroomNumberLocator);
      const bathRoomText = await bathRoomElement.getText(); // Get the text "4 bedrooms"
      const bathroomNumberText = bathRoomText.split(' ')[0]; // Split and get the first part "4"
      const bathroomNumber = Number(bathroomNumberText); // Convert to a number          
      return bathroomNumber;
  }
  
  async selectBathroom(expBathroomCount) {
      await browser.pause(2000);
      for (let i = 0; i < 10; i++) {
        const bathroomCount = await this.getBathroomNumberCount();
      if (Number(bathroomCount) < Number(expBathroomCount)) {
          await $(this.increaseBathroomLocator).click();
      } else if (Number(bathroomCount) > Number(expBathroomCount)) {
          await $(this.decreaseBathroomLocator).click();
      } else {
          break;
      }

      }
    }
  
  nextButton = '#propertyInfoNextBtn'; 
  async clickNextButton(){
    await $(this.nextButton).click(); 
    await browser.pause(2000)
  }
  
  step2to3Locator = '//div[text()="Step 2 of 3"]';
  async verifyStep2to3() {
    const step2to3IsDisplayed = await $(this.step2to3Locator).isDisplayed();
    expect(step2to3IsDisplayed, "Step 2 to 3 is not Displayed").to.be.true;
  }

  placeLocatedLocator = '//h1[contains(text(),"Where")]'
  async placeLocatedLocatorDisplayed(){
      await $(this.placeLocatedLocator).isDisplayed()
      await browser.pause(3000)
  }

  enterAddressTextLocator = '#locationTypeAhead'; 
  async enterTextMap(text){
    await $(this.enterAddressTextLocator).setValue(text)
  }

  // Select 1211 6th Avenue, New York, NY, USA from auto-suggestion

  searchSuggestionAddressLocator = '//li[@class="typeahead-prediction-item fds-list-item"]'
  async selectSdrressFromAutoSuggestion(searchThis) {
    const allSuggestionAddress = await $$(this.searchSuggestionAddressLocator);
    for (const suggestion of allSuggestionAddress) {
        const suggestionAddressText = await suggestion.getText();
        await browser.pause(3000);
        
        
        if (suggestionAddressText.trim().toLowerCase() === searchThis.trim().toLowerCase()) {
            // console.log("Before click");
            await suggestion.click();
            // console.log("After click");
            await browser.pause(5000);
            return suggestionAddressText; 
        }
    }
}
  mapLocator = '(//div)[65]'; 
  async verifyMapDisplayed(){
    const diplayedMap = await $(this.mapLocator).isDisplayed();
    expect(diplayedMap, 'Map is not displayed').to.be.true; 
  }

  mapPinLocator= '//img[@src="https://maps.gstatic.com/mapfiles/transparent.png" and @draggable="false"]'

  async mapPinDisplayed(){
    await $(this.mapPinLocator).isDisplayed()
    await browser.pause(3000)
  }

  mapBelowTextLocator= '//span[text()="Move the pin to adjust the location of your property."]'

  async mapBelowTextDisplayed(){
    await $(this.mapBelowTextLocator).isDisplayed()
    await browser.pause(3000)
  }

  

}
module.exports = ListProperties;
