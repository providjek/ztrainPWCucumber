import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect, test} from "@playwright/test";
import {page} from "./worlds";
import LoginPage from "../pages/login2-pages";
import configUrl from "../configParams/configUrl";
import { gotoAPage } from "../utils/navigation-utils";
import ProfilePage from "../pages/profile-pages";


let profilePage: ProfilePage;

    
  Given('I am on the (string) page', async function (pageName: string) {
    //page.goto("https://ztrain-web.vercel.app/profile");
    await gotoAPage(pageName);
  });

  When('I update my personal informations', async function (personalData) {
    profilePage = new ProfilePage(page);
    await profilePage.updateProfile(personalData.rawTable[1][0],personalData.rawTable[1][1],personalData.rawTable[1][2],personalData.rawTable[1][3],personalData.rawTable[1][4],personalData.rawTable[1][5],personalData.rawTable[1][6]);
      
    });


    Then('I can see the message {string} confirming the update', async function (msg) {
      await expect(profilePage.alerteConfUpdate, "Le profil n'a pas été mis à jour ").toContainText("CERDDD");
    });



    When('I change my old password {string} with the new one {string}', async function (oldpass, newpass) {
      profilePage = new ProfilePage(page);
     await profilePage.updatePassword(oldpass, newpass);
    });

    Then('I can see the message {string} confirming the password update', async function (msg) {
      await expect(profilePage.alerteUpdatePass).toContainText(msg);
    });
