import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page;
let browser: Browser;
let URL: string = "https://profile.w3schools.com/log-in";
setDefaultTimeout(30_000);

Before(async () => {
    try{
       
        browser = await chromium.launch({headless : false});
        const context = await browser.newContext();
        page = await context.newPage();
        //await page.goto(URL);
        console.log(`Init... Site Title ${await page.title}`);
        
    }
    catch(error) {
        console.log(`Chrom navigation failed due to ${error}`);
        throw new Error(`Chrom navigation failed due to ${error}`);
    }
return page;

});
                                        
After(async () => {
    setDefaultTimeout(10_000);
    //await page.close();
    //await browser.close();
   console.log('TR de');
});

export {page, browser};