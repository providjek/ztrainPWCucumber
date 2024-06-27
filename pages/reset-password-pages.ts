import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import messages from '../utils/messages';
import {page} from "../steps/worlds";


class ResetPage {
  readonly popupConf: Locator;
  readonly resetBtn: Locator;
  readonly password: Locator;
  readonly email: Locator;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.email = page.getByPlaceholder('Votre email');
    this.password =  page.getByPlaceholder('Nouveau mot de passe');
    this.popupConf = page.locator('#style_container__P9Oh0 div');
    this.resetBtn = page.getByRole('button', { name: 'Réinitialiser' });
    this.errorMsg = page.getByText('Cet utilisateur n\'existe pas');
  }

  async resetPassword(email:string, newPass:string){
   await this.email.fill(email);
   await this.password.fill(newPass);
   await this.resetBtn.click();
  }

  async checkPassReset(){
    //await expect(this.popupConf).toBeVisible();
    await page.waitForSelector("#style_container__P9Oh0 div");
    await expect(this.popupConf).toBeVisible();

  }

  async checkErrorMsg(msg:string){
    await expect(this.errorMsg).toContainText(msg);
  }
  /*
  async haveMessgeError(msg: string){
    await expect(this.msgError).toHaveText(msg);
  }
  */


} 

export default ResetPage;