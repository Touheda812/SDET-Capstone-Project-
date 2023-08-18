class Stars5{
    stars5Locator = '//label[contains(@aria-label,'; 
    star5LocatorEnd = ' s")]'; 

    async click5Star(starNum){
        const locatorFor5Star = `${this.stars5Locator}"${starNum}${this.star5LocatorEnd}` 
        await $(locatorFor5Star).click(); 
        await browser.pause(3000); 
    }

    sortByLocator = '#sort-filter-dropdown-sort'; 
    async clickSortBy(selectText){
        await $(this.sortByLocator).selectByVisibleText(selectText); 
        await browser.pause(3000); 
    }

    starLocatorFirst = '//span[text()="';
    starLocatorLast = ' out of 5"]';
    hotelLocator = '//a[@data-stid="open-hotel-information"]';

    async checkAllHotelsStarRating(expectedStarRating) {
        const hotelElements = await $$(this.hotelLocator);

        for (const hotelElement of hotelElements) {
        const locatorForStar = `${this.starLocatorFirst}${expectedStarRating}${this.starLocatorLast}`;
        const locatorForStarElement = await hotelElement.$(locatorForStar);

        if (
            !locatorForStarElement ||
            !(await locatorForStarElement.isDisplayed())
        ) {
            return false;
        }
        }

        return true;
    }

    allPricesLocators = '//div[contains(text(),"The price is ")]';
    async verifyPrices() {
        const allHotelPrices = await $$(this.allPricesLocators);
        const prices = [];

        for (const hotelPrices of allHotelPrices) {
        const priceText = await hotelPrices.getText();
        const priceTextParts = await priceText.split(" ");
        const extractPrice = await priceTextParts.slice(3).join(" ");
        prices.push(extractPrice);
    }
        return prices;
  }
}
    
module.exports = Stars5; 