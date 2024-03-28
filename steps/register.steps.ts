import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import LoginPage from "../pages/login-pages";
import configUrl from "../configParams/configUrl";
import { switchLogAndSingPage } from "../utils/navigation-utils";
import RegisterPage from "../pages/register-pages";
 
let registerPage: RegisterPage;

When('I fill in my valid information', async function (registerInfo) {
    
});

When('I confirm my registration with the link received by email from {string} to {string}', function (string, string2) {
  
});

Then('My account should be activated', function () {
});


Then('I should be redirected to the home page', function () {
});