import { type Locator , expect } from '@playwright/test';
import { Browser, chromium, Page } from "playwright";
import {page} from "../steps/worlds";



class HomePage {
  readonly profilIcon: Locator;
 readonly logoutBtn: Locator;
 readonly emailProfilPlaceholder: Locator;

  constructor(page: Page) {
    this.profilIcon = page.locator('#style_avatar_wrapper__pEGIQ span');
    this.logoutBtn = page.getByRole('link', { name: 'Se déconnecter' });
    this.emailProfilPlaceholder = page.locator('.MuiTypography-root.MuiTypography-body1.css-80nwu0');
  }

  async clickOnLogoutBtn(){
    await this.logoutBtn.click();
  }

  async isLogged(){
    await expect(this.emailProfilPlaceholder).toBeVisible();
  }

  async logout(){
    await this.profilIcon.first().click();
    await this.clickOnLogoutBtn();
  }

  async isLoggout(){
    //Verifie que l'elt est carrément absent du DOM
    await expect(this.emailProfilPlaceholder).toHaveCount(0);
  }


}

export default HomePage;