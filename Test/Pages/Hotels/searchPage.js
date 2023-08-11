class searchPage{
    //Locators 
    verifySearchSelection = '//button[@data-stid="destination_form_field-menu-trigger"]';

    //Functions 
    async verifyResult() {
        return await $(this.verifySearchSelection).getText(); 
        
    }
}

module.exports = searchPage; 