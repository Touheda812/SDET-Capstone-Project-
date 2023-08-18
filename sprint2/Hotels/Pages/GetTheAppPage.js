const { expect } = require("chai");

class GetTheAppPage{
    headingScanDownloadAppLocator = '#marquee-title'; 
    async verifyScanDownload(){
        const isDisplayedScanDownload = await $(this.headingScanDownloadAppLocator)
        await isDisplayedScanDownload.waitForDisplayed({timeout: 3000}); 
        const displayedScan = await isDisplayedScanDownload.isDisplayed(); 
        expect(displayedScan, 'Scan the QR code and download our app is NOT displayed').to.be.true; 
    }

    QrCodeLocator = '//img[@alt="QR code"]'; 
    async verifyQrCode(){
        const isDisplayedQrCode = await $(this.QrCodeLocator); 
        await isDisplayedQrCode.waitForDisplayed({timeout: 3000}); 
        const displayedQR = await isDisplayedQrCode.isDisplayed(); 
        expect(displayedQR, 'QR Code is NOT displayed').to.be.true; 
    }

}
module.exports = GetTheAppPage; 
