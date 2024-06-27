
Feature: Reset Password
  As a user who has forgotten my password,
  I want to be able to restore my password
  so that I can access my account again
@resetPass
  Scenario: Restore a forgotten password
    Given I am on the 'RESET_PASS' page
    When I fill in reset form with "providjek@gmail.com" and "pass1234"
    Then The password is reset  and I receive this confirmation alert "Votre mot de asse à été réinitialisé"

  @resetNonPassing
  Scenario: Password restoration non-existent account - Non-passing
    Given I am on the 'RESET_PASS' page
    When I fill in reset form with "inexist@gmail.com" and "pass1234"
    Then The reset failed with the following error message "Cet utilisateur n'existe pas"


