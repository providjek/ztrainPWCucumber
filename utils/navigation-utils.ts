import { page } from "../steps/worlds";
import configUrl from "../configParams/configUrl";

 export async function switchLogAndSingPage(pageName: string) {
    switch (pageName) {
        case 'login':
            console.log('Login Proccess');
            await page.goto(configUrl.prod.loginUrl);
            break;
        case 'sign':
            console.log('Sing up process');
            await page.goto(configUrl.prod.singUpUrl);
            break;
    } 
 }