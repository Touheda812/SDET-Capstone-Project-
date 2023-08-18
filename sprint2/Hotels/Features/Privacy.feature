Feature: Privacy

    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page
        Given I am on hotels landing page
        When I Click Sign in link
        And I Click Sign in button
        And I Click One Key Rewards Terms & Conditions link
        Then I Verify One Key Terms and Conditions heading is displayed
        And I Verify Effective from date format is in correct format (expected format: MMMM d, yyyy)
        When I Click Privacy Statement link
        Then I Verify Privacy Statement heading is displayed
        And I Verify Last Updated date format (expected format: MMMM d, yyyy)