import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import LoginPage from "../pages/login-pages";
import configUrl from "../configParams/configUrl";
import { switchLogAndSingPage } from "../utils/navigation-utils";

let loginPage: LoginPage;



Given('I am on a {string} page', async function (pageLog) {
    await switchLogAndSingPage(pageLog);   
    loginPage =  new LoginPage(page);

  });
 

When('I give my email {string} and my pass {string}', async function (email, pass) {
    await loginPage.fillEmail(email);
    await loginPage.fillPassword(pass);
    await loginPage.clickOnLonginBtn();
  });


Then('I am logged now', async function () {
    await page.waitForTimeout(10_000); //Comment bien gerer les timeout

    await expect(page).toHaveURL(/.*pathfinder/);
    await expect(page).toHaveTitle(/W3schools Pathfinder/);

  });


    When('I connect with invalid {string} and {string} information', async function (email, pass) {
      await loginPage.fillEmail(email);
      await loginPage.fillPassword(pass);
      await loginPage.clickOnLonginBtn();
    });

   
    Then('the connection fails and I receive the {string}.', async function (msg) {
      await page.waitForTimeout(10_000); //Comment bien gerer les timeout
      await loginPage.haveMessgeError(msg);
    });

  