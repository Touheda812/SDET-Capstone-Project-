Feature: QR Code 
    Scenario: Verify Get the app section
        Given I am on hotels landing page
        When I Click Get the app button
        Then I Verify Scan the QR code and download our app is displayed
        And I Verify QR Code is displayed