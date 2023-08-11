Feature: Sign In 
    
    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels landing page 
        When I Click on Sign in link 
        And I Click on Sign in button on the sign In page 
        And I enter invalid email address 
        And I Click on Continue button on the sign In page
        Then I verify error message is displayed


