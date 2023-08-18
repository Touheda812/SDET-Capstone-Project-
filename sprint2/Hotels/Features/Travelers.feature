Feature: Travelers 
    Scenario: Verify user can update number of guests on Home page

        Given I am on hotels landing page 
        When I Click on Travelers
        And I Change Adults as 6
        And I Change Children as 3
        And I Select child-1 age as 4
        And I Select child-2 age as Under 1
        And I Select child-3 age as 7
        And I Click Done
        Then I Verify total number of Travelers is sum of adults and children as same as selected 