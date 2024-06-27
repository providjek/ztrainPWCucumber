import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../pages/home-pages";
import {page} from "./worlds";


let homePage: HomePage;

Given('I\'m connected', async function () {
  homePage = new HomePage(page);
  await homePage.isLogged();
});


When('I log out', async function () {
 await homePage.logout();
});


Then('I am logged out and redirected to the home page', async function () {
  await homePage.isLoggout();
});
