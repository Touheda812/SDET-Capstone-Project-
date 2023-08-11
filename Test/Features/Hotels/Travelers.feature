@travelers 
Feature: Travelers

    Scenario: Verify the travelers count is correct
        Given I am on hotels landing page
        When I change adults count to 4
            And I change children count to 2
            And I select child-1 age as 2
            And I select child-2 age as Under 1
            And I click on Done button on travelers
        Then I verify the travelers count is updated correctly
    
    