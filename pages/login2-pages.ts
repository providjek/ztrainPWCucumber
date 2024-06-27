import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import messages from '../utils/messages';
import { page } from '../steps/worlds';


class LoginPage {
  readonly profilIcon: Locator;
  readonly loginButton: Locator;
  readonly password: Locator;
  readonly email: Locator;
  readonly profilPlaceholder : Locator;

  constructor(page: Page) {
    this.profilIcon = page.locator('#style_avatar_wrapper__pEGIQ span');
    this.email = page.getByPlaceholder('Email');
    this.password = page.getByPlaceholder('Mot de passe');
    this.loginButton = page.getByRole('button', { name: 'Connexion', exact: true });
    this.profilPlaceholder = page.locator('#style_avatar_wrapper__pEGIQ');
  }

  async gotoLoginSection(){
    await page.locator('#style_avatar_wrapper__pEGIQ span').first().click();
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
  /*
  async haveMessgeError(msg: string){
    await expect(this.msgError).toHaveText(msg);
  }
  */
 async haveEmailProfilPlaceholder(email: string){
  await expect(page.locator('#style_avatar_wrapper__pEGIQ')).toContainText(email);

 }

} 

export default LoginPage;