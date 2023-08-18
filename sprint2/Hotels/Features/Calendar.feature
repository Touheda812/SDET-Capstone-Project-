Feature: Privacy

    Scenario: Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels landing page
        When I Click on Dates
        Then I Verify current month is displayed
            And I Verify past dates is disabled
            And I Verify back button on current month is disabled
         