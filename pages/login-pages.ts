import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import messages from '../utils/messages';
import {page} from "../steps/worlds";


class LoginPage {
  readonly loginButton: Locator;
  readonly password: Locator;
  readonly email: Locator;
  readonly msgError : Locator;

  constructor(page: Page) {
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.password = page.getByLabel('Password');
    this.email = page.locator('#modalusername');
    this.msgError = page.locator("div.Alert_iwrp__5q1xH.Alert_danger__Wsdhv");
  }

  async fillEmail(email: string) {
    await this.email.fill(email);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);
  }

  async clickOnLonginBtn(){
    await this.loginButton.click();
  }

  async doLogin(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.loginButton.click();
  }
  async haveMessgeError(msg: string){
    await expect(this.msgError).toHaveText(msg);
  }

}

export default LoginPage;