import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import {page} from "../steps/worlds";


class RegisterPage {
  readonly signBtn: Locator;
  readonly password: Locator;
  readonly email: Locator;
  readonly fName: Locator;
  readonly lName: Locator;
  readonly contBtn: Locator;

  constructor(page: Page) {
    this.signBtn = page.getByRole('button', { name: 'Log in' });
    this.password = page.getByLabel('Password');
    this.email = page.locator('#modalusername');
    this.signBtn = page.getByRole('button', { name: 'Sign up for free' });
    this.fName = page.getByPlaceholder('Add your first name');
    this.lName = page.getByPlaceholder('Add your last name');
    this.contBtn = page.getByRole('button', { name: 'Continue', exact: true });
  }

  async fillEmail(email: string) {
    await this.email.fill(email);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);
  }
  async fillFName(fName: string){
    await this.fName.fill(fName);
  }
  async fillLName(lName: string){
    await this.lName.fill(lName);
  }
  async clickOnContBtn(){
    await this.contBtn.click();
  }

  async clickOnSignBtn(){
    await this.signBtn.click();
  }

 

}

export default RegisterPage;