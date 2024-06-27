import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import configUrl from "../configParams/configUrl";
import RegisterPage from "../pages/register-pages";
 
let registerPage: RegisterPage;

Given('I am on the registration section', async function () {
    registerPage =  new RegisterPage(page);
    await registerPage.gotoRegisterSection();
 });

When('I fill in my {string} and {string} details', async function (email, pass) {
 
    await registerPage.singnUp(email, pass);
});

Then('I am registered and logged in with my address {string}', async function (email) {
 
   await registerPage.checkRegister(email);
});

////////////////////////////2////////////////////////////////////////////////////////

When('I fill in my false {string} {string}  and {string} details', async function (email, pass, confPass) {
   
    await registerPage.singnWithFalsePass(email, pass, confPass);

});

Then('Registration fails and I receive the message {string}', async function (erroMsg) {
    await expect(page.getByLabel('Inscription').getByRole('paragraph')).toContainText(erroMsg);

});

//////////////////3///////////////////////////////////////////////////

When('I register with my google account', function () {
 
});

Then('I register with my google account', function () {
 
});