@register
Feature: Account creation
  As a user, I would like to create an account to use the W3 site.

  Scenario: Account creation - Case study
   Given I am on a "sign" page
   When I fill in my valid information
      |email |pwd |fname|lname |
      |provi-test18@yopmail.com|P@ss1234|Djek |Provi |
   And I confirm my registration with the link received by email from "W3schools" to "provi-test17@yopmail.com"
   Then My account should be activated
   And I should be redirected to the home page
   
 
#Scenario: Account creation - non passing case
