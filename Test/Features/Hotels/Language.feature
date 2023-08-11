Feature: Language

    Scenario: Verify language can be changed successfully
        Given I am on hotels landing page 
    
        When I Click on English language
        And I select Español in Language dropdown
        And I Click on Save button on the Language 
        Then I verify Español is displayed

        When I Click on Español language 
        And I select English in Language dropdown
        And I Click on Guardar button on the Language 
        Then I verify English is displayed