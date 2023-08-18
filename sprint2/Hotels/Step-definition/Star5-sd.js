const { When, Then } = require("@wdio/cucumber-framework")
const Stars5 = require("../Pages/Stars5");
const { assert } = require("chai");

const star5 = new Stars5(); 

When(/^I plan to Click on (.+) star from star-rating filter$/, async function(clickIt){
    await star5.click5Star(clickIt);
    await browser.pause(4000) 
})

When(/^I Low-High Select (.+) from sort-by dropdown$/, async function(selectText){
    await star5.clickSortBy(selectText);
    await browser.pause(3000) 
})

Then(/^I am trying to Verify all hotels in search results are (.+) star rated as selected$/, async function (starRating) {
    const allHotelsHaveExpectedRating = await star5.checkAllHotelsStarRating(starRating);
    assert.ok(allHotelsHaveExpectedRating, `Not all hotels have a expected star rating.`);
  });

Then(/^I am Verifying all hotels are listed in increasing order$/, async function () {
    const prices = await star5.verifyPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    assert.deepEqual(prices, sortedPrices, 'Hotel prices are not in ascending order');
});