@demo
Feature: Login feautre

Scenario: Login ok
    Given I am on a "login" page
    When I give my email "provi-test5@yopmail.com" and my pass "P@ss1234"
    Then I am logged now
@demo1
Scenario: Login non passant
    Given I am on a "login" page
    When I connect with invalid <email> and <mdp> information
    Then the connection fails and I receive the <msg>.

    Examples:
      |email                     |mdp       |msg       |
      |"emailInexist@yopmail.com"|"P@ss1234"|"A user with this email does not exist"|
      |"provi-test5@yopmail.com" |"pass"    |"Make sure you type your email and password correctly. Both your password and email are case-sensitive."|
