Feature: Children

    @children1
    Scenario: Verify Children age dropdown for 2 children
        Given I am on hotels landing page
        When I change children count to 2
        Then I verify Children-age dropdown are 2
             And I verify Plus-button is enabled
             And I verify minus-button is enabled


        @children2
        Scenario: Verify Children age dropdown for 6 children
            Given I am on hotels landing page

            When I change children count to 6
            Then I verify Children-age dropdown are 6
                And I verify Plus button children is disabled
                And I verify minus-button is enabled

        @children3
        Scenario: Verify Children age dropdown for 5 children
            Given I am on hotels landing page
            When I change children count to 5
                Then I verify Children-age dropdown are 5
                And I verify Plus-button is enabled
                And I verify minus-button is enabled

        @children4
        Scenario: Verify Children age dropdown for 0 children
        Given I am on hotels landing page
        When I change children count to 0
            Then I verify Children-age dropdown are 0
             And I verify Plus-button is enabled
             And I verify minus button children 0 is disabled