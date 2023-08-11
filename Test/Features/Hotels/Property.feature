Feature: Property

    Scenario: Verify "List your Property" flow
        Given I am on hotels landing page 
        When I Click on List your property
        Then I verify What would you like to list is displayed
        And I verify Lodging and Private residence options is displayed

        When I Click on Private residence
        Then I verify Step 1 of 3 is displayed

        When I Enter 4 as bedroom
        And I Enter 2.5 as bathroom
        And I Click on Next button
        
        Then I verify Step 2 of 3 is displayed
        And I verify Where is your property located is displayed

        When I Enter 121 in address
        And I Select 1211 6th Avenue, New York, NY from auto-suggestion
        Then I verify map is displayed
        And I verify pin in map is displayed
        And I verify Move the pin to adjust the location of your property. is displayed 