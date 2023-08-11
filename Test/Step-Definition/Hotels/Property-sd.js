const { When } = require("@wdio/cucumber-framework");
const ListProperties = require("../../Pages/Hotels/ListProperties");

const listProperties = new ListProperties();

let bedroomCount = 0;
let bathroomCount = 0;

When(/^I Enter (.+) as bedroom$/, async function (enterNum) {
  await listProperties.selectBedroom(enterNum);
  bedroomCount = enterNum;
  await browser.pause(3000);
});

When(/^I Enter (.+) as bathroom$/, async function (enterNum) {
  await listProperties.selectBathroom(enterNum);
  bathroomCount = enterNum;
  await browser.pause(3000);
});

When(/^I Enter (.+) in address$/, async function (num) {
  await listProperties.enterTextMap(num); 
  await browser.pause(3000);

})

When(/^I Select (.+) from auto-suggestion$/, async function (NewYork1) {
  await listProperties.selectSdrressFromAutoSuggestion(NewYork1); 
  await browser.pause(3000);

})


