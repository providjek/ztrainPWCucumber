@register
Feature: Account creation
  As a user, I want to be able to create an account, in order to be able to buy items on the platform.
  Background:
    Given I am on the registration section

  @registera
  Scenario: Account creation - Case study
    When I fill in my "provi-test51@yopmail.com" and "P@ss1234" details
    Then I am registered and logged in with my address "provi-test51@yopmail.com"

  Scenario Outline: Account creation - not passing
    When I fill in my false <email> <password>  and <confPass> details
    Then Registration fails and I receive the message <message>
    
    Examples:
      | email               | password  |confPass  | message                                          |
      |"providjek.com"      | "P@ss1234"|"P@ss1234"|"Le format de l'email est invalid"                |
      |"providjek@gmail.com"|"pass"     |"pass"    |"Le mot de passe doit avoir au moins 8 caracteres"|
      |"providjek@gmail.com"| "P@ss1234"|"Pass1234"|"Les deux mots de passe ne sont pas identiques"   |

  Scenario: Creating an account with an existing email address - not a passing case
    When I fill in my "provi-test3@yopmail.com" and "P@ss1234" details
    Then Registration fails and I receive the message "Cet utilisateur existe déjà"

  Scenario: Account creation using google account
    When I register with my google account
    Then I am redirected to the google login page
    And I register with my google account

  #Scenario: Création de compte - cas non passant
