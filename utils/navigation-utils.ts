import { page } from "../steps/worlds";
import configUrl from "../configParams/configUrl";

 export async function gotoAPage(pageName: string) {
    switch (pageName) {
        case 'RESET_PASS':
            console.log('Reset Page get....');
            await page.goto(configUrl.prod.resetUrl, { timeout: 60000, waitUntil: 'load' });
            break;
        case 'PROFILE':
            console.log('Profile Page get....');
            await page.goto(configUrl.prod.profileUrl, { timeout: 60000, waitUntil: 'load' });
            break;
        case 'sign':
            console.log('Sing up process');
            await page.goto(configUrl.prod.singUpUrl);
            break;
    } 
 }