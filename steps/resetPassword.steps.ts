import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import LoginPage from "../pages/login2-pages";
import configUrl from "../configParams/configUrl";
import { gotoAPage } from "../utils/navigation-utils";
import ResetPage from "../pages/reset-password-pages";


let resetPage: ResetPage;
  

    Given('I am on the {string} page', async function (page) {
      await gotoAPage(page);

    });
  

    When('I fill in reset form with {string} and {string}', async function (email, newPass) {
      resetPage = new ResetPage(page);
      await resetPage.resetPassword(email,newPass);
    });


    Then('The password is reset  and I receive this confirmation alert {string}', async function (string) {
        await resetPage.checkPassReset();
    });




    When('I fill in reset form with non-existent account {string} and {string}', async function (email, pass) {
      await resetPage.resetPassword(email, pass);
    });


    Then('The reset failed with the following error message {string}', async function (msg) {
      await resetPage.checkErrorMsg(msg);
    });