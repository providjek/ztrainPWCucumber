import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import LoginPage from "../pages/login2-pages";
import configUrl from "../configParams/configUrl";

let loginPage: LoginPage;

///////////////////////////////

    Given('I am on the login section', async function () {
      loginPage =  new LoginPage(page);
      await loginPage.gotoLoginSection();
    });

    When('I log with my {string} and {string}', async function (email, pass) {
      await loginPage.doLogin(email, pass);
    });


    Then('I am logged with {string} in and redirected to the home page', async function (email) {
      await page.waitForTimeout(10_000); //Comment bien gerer les timeout
      await loginPage.haveEmailProfilPlaceholder(email);
    });

///////////////////////////////////


    Then('The connection fails and I receive the message {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });


////////////////////////////////////////:


    When('I connect to my google account', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });


    Then('I am redirected to the google login page', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });


    Then('I log in with my google account', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });