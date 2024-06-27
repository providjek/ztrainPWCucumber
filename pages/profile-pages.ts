import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import messages from '../utils/messages';
import {page} from "../steps/worlds";


class ProfilePage {
  readonly fName: Locator;
  readonly lName: Locator;
  readonly address: Locator;
  readonly phone: Locator;
  readonly bilingAddres: Locator;
  readonly deliveryAddress: Locator;
  readonly title: Locator;
  readonly mrOption: Locator;
  readonly mrsOption: Locator;
  readonly updateBtn: Locator;
  readonly alerteConfUpdate: Locator;
  readonly oldPass: Locator;
  readonly newPass: Locator;
  readonly updatePassBtn: Locator;
  readonly alerteUpdatePass: Locator;

  constructor(page: Page) {
    this.fName = page.getByLabel('Nom', { exact: true });
    this.lName = page.getByLabel('Prénom');
    this.address = page.getByLabel('Adresse', { exact: true });
    this.phone = page.getByLabel('Télephone');
    this.bilingAddres =  page.getByLabel('Adresse de facturation');
    this.deliveryAddress = page.getByLabel('Adresse de livraison');
    this.title = page.getByLabel('Civilité');
    this.mrOption = page.getByRole('option', { name: 'Monsieur' });
    this.mrsOption = page.getByRole('option', { name: 'Madame' });
    this.updateBtn =  page.locator('.style_btn2__0wrea');
    this.alerteConfUpdate = page.getByText('Votre profile a été mis à');
    this.oldPass = page.getByLabel('Mot de passe actuel');
    this.newPass = page.locator('#filled-adornment-password').nth(1);
    this.updatePassBtn = page.getByRole('button', { name: 'Update' }).nth(1);
    this.alerteUpdatePass = page.getByText('Votre mot de passe a été mis');
    
  }

  async gotoLoginSection(){
    await page.locator('#style_avatar_wrapper__pEGIQ span').first().click();
  }

  async updateProfile(fName:string, lName: string, address: string, phone: string, bilingAddres: string, deliveryAddress: string, title: string){
   await this.fName.fill(fName);
   await this.lName.fill(lName);
   await this.address.fill(address);
   await this.phone.fill(phone);
   await this.bilingAddres.fill(bilingAddres);
   await this.deliveryAddress.fill(deliveryAddress);
   await this.chooseCivility(title);
   await this.updateBtn.click();    
}

  async chooseCivility(title:string){
    await this.title.click();
    if(title=="Monsieur"){
     await this.mrOption.click();
    }else{
     await this.mrsOption.click();
    }
  }

  async updatePassword(oldPass: string, newPass: string){
    this.oldPass.fill(oldPass);
    this.newPass.fill(newPass);
    this.alerteUpdatePass.click();
  }


   
  /*
  async haveMessgeError(msg: string){
    await expect(this.msgError).toHaveText(msg);
  }
  */
 

} 

export default ProfilePage;