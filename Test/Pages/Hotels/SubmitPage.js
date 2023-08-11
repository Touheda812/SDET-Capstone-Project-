const { expect } = require("chai");

class SubmitPage {
  submitLocator = '//input[@type="submit"]';

  async clickSubmit() {
    // Switch to the new window/tab if needed
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1

    // Now interact with elements on the feedback form
    await $(this.submitLocator).waitForClickable();
    await $(this.submitLocator).click();
  }

  errorMessage = '//p[text()="The following fields are required:"]';
  async verifyErrorDisplayed() {
    const errorIsDisplayed = await $(this.errorMessage).isDisplayed();
    expect(errorIsDisplayed, "The error is not displayed").to.be.true;
  }

  redBoxError = "#error-1";
  async verifyRedBoxErrorDisplayed() {
    const redBoxErrorIsDisplayed = await $(this.redBoxError).isDisplayed();
    expect(redBoxErrorIsDisplayed, "The red error box is not displayed").to.be.true;
  }

  
}
module.exports = SubmitPage;
