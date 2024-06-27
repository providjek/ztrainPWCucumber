@logout
Feature: Logout
  As a logged-in user, I want to be able to log out
  
  Background:
    Given I am on the login section
    And I log with my "djakisra@gmail.com" and "passpass"

  Scenario: Login - passing
    Given I'm connected
    When I log out
    Then I am logged out and redirected to the home page
