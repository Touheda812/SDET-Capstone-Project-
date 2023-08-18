Feature: Search

    Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels landing page
        When I Search Manhattan, NY
        And I select Manhattan New York, New York, United States 
        And I Enter Check-in date as Sep 29, 2023
        And I Enter Check-out date as Oct 16, 2023
        And I Click on check inOut Done button
        And I Click on Hotels Search button
        And I plan to Click on 5 star from star-rating filter
        And I Low-High Select Price: low to high from sort-by dropdown
        Then I am trying to Verify all hotels in search results are 5.0 star rated as selected 
        And I am Verifying all hotels are listed in increasing order