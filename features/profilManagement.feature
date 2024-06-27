@profile
Feature: Profile information management
  As a logged-in user
  I need to be able to update my personal information (name, address, telephone number, password, etc.)
  Background:
    Given I am on the login section
    And I log with my "user@test.test" and "testtest"
    And I am logged with "user@test.test" in and redirected to the home page
    And I am on the "PROFILE" page

@profiledd
  Scenario: Modification of personal information
    When I update my personal informations
      |fName         |lName       |address|phone  |bilingAddres|deliveryAddres|title      |
      |Djekoundakom|Providence|Yasaa|65434|Cameroun  |Douala 237  |Madame |
    Then I can see the message "Votre profile a été mis à jour avec succes" confirming the update

@profileER
  Scenario: change password
    When I change my old password "testtest" with the new one "P@New1234"
    Then I can see the message "Votre mot de passe a été mis à jour avec succes" confirming the password update
