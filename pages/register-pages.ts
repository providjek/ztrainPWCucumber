import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import {page} from "../steps/worlds";


class RegisterPage {
  readonly profilIcon: Locator;
  readonly registerButton: Locator;
  readonly password: Locator;
  readonly confPassword: Locator;
  readonly email: Locator;
  readonly profilPlaceholder : Locator;
  readonly registerSection: Locator;

  constructor(page: Page) {
    this.profilIcon = page.locator('#style_avatar_wrapper__pEGIQ span');
    this.password = page.getByPlaceholder('Mot de passe', { exact: true });
    this.email = page.getByPlaceholder('Email');
    this.registerSection = page.getByRole('tab', { name: 'Inscription' });
    this.confPassword = page.getByPlaceholder('Confirmer votre mot de passe');
    this.registerButton = page.getByRole('button', { name: 'Inscription' });
    this.profilPlaceholder = page.locator('#style_avatar_wrapper__pEGIQ');
  }

  async gotoRegisterSection(){
    await this.profilIcon.nth(1).click();
    await this.registerSection.click();
  }


  async fillEmail(email: string) {
    await this.email.fill(email);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);

  }

  async fillConfPassword(confPass: string) {
   await this.confPassword.fill(confPass);
  }

  async clickOnRegisterBtn(){
    await this.registerButton.click();
  }

  async singnUp(email: string, pass: string){
    await this.fillEmail(email);
    await this.fillPassword(pass);
    await this.fillConfPassword(pass);
    await this.clickOnRegisterBtn();
  }
  async singnWithFalsePass(email: string, pass: string, confPass: string){
    await this.fillEmail(email);
    await this.fillPassword(pass);
    await this.fillConfPassword(confPass);
    await this.clickOnRegisterBtn();
  }
 
  async checkRegister(email: string){
    await expect(this.profilPlaceholder).toContainText(email);
  }

}

export default RegisterPage;