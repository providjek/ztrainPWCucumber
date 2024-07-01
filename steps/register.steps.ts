import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import configUrl from "../configParams/configUrl";
import RegisterPage from "../pages/register-pages";
import fs from 'fs';
 
let registerPage: RegisterPage;
const registerData = JSON.parse(fs.readFileSync('./jdd/registerJDD.json', 'utf8'));


Given('I am on the registration section', async function () {
    registerPage =  new RegisterPage(page);
    await registerPage.gotoRegisterSection();
 });

When('I fill in my account details from valid Account', async function () {
 
    await registerPage.singnUp(registerData.validAccount.email, registerData.validAccount.password);
});

When('I fill in my account details from invalid account details case: {string}', async function (index) {
    console.log("TESTT: "+index);
    const accountData = registerData.invalidAccounts[parseInt(index)];
    console.log(accountData.email+" + "+accountData.password+" + "+accountData.message);
    await registerPage.singnWithFalsePass(accountData.email, accountData.password, accountData.confPass);
});

When('I fill in my account details from existing Account', async function () {
  
    await registerPage.singnUp(registerData.existingAccount.email, registerData.existingAccount.password);
});

Then('Registration fails and I receive the error invalid message for {string} case', async function (index) {
    const accountData = registerData.invalidAccounts[parseInt(index)];
    console.log(accountData.message);
    await expect(page.getByLabel('Inscription').getByRole('paragraph')).toContainText(accountData.message);

});

Then('Registration fails and I receive the error inexisting message', async function () {
    
        await expect(page.getByLabel('Inscription').getByRole('paragraph')).toContainText(registerData.existingAccount.message);
    
});

Then('I am registered and logged in with my address', async function () {
 
   await registerPage.checkRegister(registerData.validAccount.email);
});



//////////////////3///////////////////////////////////////////////////

When('I register with my google account', function () {
 
});

Then('I register with my google account', function () {
 
});
