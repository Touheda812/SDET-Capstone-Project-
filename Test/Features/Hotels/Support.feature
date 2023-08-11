Feature: Support

    @Support1
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page
        When I Click on Support
        And I Click on Site Feedback
        And I Click on Submit button
        Then I verify error-message is displayed
        And I verify red-box error is displayed

    @Support2
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page
        When I Click on Support 
        And I Click on Site Feedback
        And I Select any OVERALL rating
        And I Select any CONTENT rating
        And I Select any DESIGN rating
        And I Select any EASE OF USE rating
        And I Click on Submit button
        Then I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed

        #npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Support1'