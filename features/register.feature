@registerAll
Feature: Account creation
  As a user, I want to be able to create an account, in order to be able to buy items on the platform.
  Background:
    Given I am on the registration section

  @registerPassing
  Scenario: Account creation - Case study
    When I fill in my account details from valid Account
    Then I am registered and logged in with my address 
  
  @registerNotPassing
  Scenario Outline: Account creation - not passing
    When I fill in my account details from invalid account details case: <invalidAccount>
    Then Registration fails and I receive the error invalid message for <invalidAccount> case
     
    Examples:
      | invalidAccount |
      |" 0 "              |
      |" 2 "             |
      |" 1 "             |
 
  @registerPassant
  Scenario: Creating an account with an existing email address - not a passing case
    When I fill in my account details from existing Account
    Then Registration fails and I receive the error inexisting message
  
  Scenario: Account creation using google account
    When I register with my google account
    Then I am redirected to the google login page
    And I register with my google account


