import { Before, After, setDefaultTimeout, World, Status, IWorld } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { ITestCaseHookParameter } from "@cucumber/cucumber";
import * as fs from 'fs';
import * as path from 'path';

let page: Page;
let browser: Browser;
const URL: string = "https://ztrain-web.vercel.app";
setDefaultTimeout(60_000);

Before(async function () {
    try {
        browser = await chromium.launch({ headless: true });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto(URL, { timeout: 60000, waitUntil: 'load' });
        console.log(`Init... Site Title ${await page.title()}`);
    } catch (error) {
        console.log(`Chromium navigation failed due to ${error}`);
        throw new Error(`Chromium navigation failed due to ${error}`);
    }
});

After(async function () {    

        await browser.close();
});

export { page, browser };


////////////////////////////////////////////////////////////////

/*
import { Before, After, setDefaultTimeout, World, Status } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { ITestCaseHookParameter } from "@cucumber/cucumber";
import * as fs from 'fs';
import * as path from 'path';

let page: Page;
let browser: Browser;
const URL: string = "https://ztrain-web.vercel.app";
setDefaultTimeout(60_000);

Before(async function () {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto(URL, { timeout: 60000, waitUntil: 'load' });
        console.log(`Init... Site Title ${await page.title()}`);
    } catch (error) {
        console.log(`Chromium navigation failed due to ${error}`);
        throw new Error(`Chromium navigation failed due to ${error}`);
    }
});

After(async function () {        
    await browser.close();
    
});

export { page, browser };

/*
const takeScreenShotOnFailure = async (world: World, scenario: ITestCaseHookParameter) => {
    const screenshotPath: string = path.resolve(__dirname, '../reports/screenshots/');
    const screenshotExtn: string = '.png';
    const screenshotFullPath = path.join(screenshotPath, scenario.pickle.name.replace(/ /g, '_') + screenshotExtn);

    try {
        if (browser && browser.isConnected()) {
            if (!fs.existsSync(screenshotPath)) {
                fs.mkdirSync(screenshotPath, { recursive: true });
            }
            await page.screenshot({
                path: screenshotFullPath,
                fullPage: true,
                timeout: 60000,  // Increase the timeout if needed
                type: 'png'      // Ensure the format is png
            });
    console.log(screenshotFullPath);

            const screenShot = await fs.promises.readFile(screenshotFullPath, 'base64');
            console.log(screenshotFullPath);
            if (screenShot) await world.attach(screenshotFullPath, 'image/png');
        } else {
            console.log('Browser is not connected to take screenshot.');
        }
    } catch (error) {
        console.log(`Failed to take screenshot due to: ${error}`);
    }
};


/*

import { Before, After, setDefaultTimeout, Status, World, ITestCaseHookParameter } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page;
let browser: Browser;
let URL: string = "https://ztrain-web.vercel.app";
setDefaultTimeout(60_000);

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto(URL, { timeout: 60000, waitUntil: 'load' });
        console.log(`Init... Site Title ${await page.title()}`);
    } catch (error) {
        console.log(`Chrom navigation failed due to ${error}`);
        throw new Error(`Chrom navigation failed due to ${error}`);
    }
    return page;
});

After(async function (this: World, scenario: ITestCaseHookParameter) {
    if (scenario.result?.status !== Status.PASSED) {
        const screenshotPath = `../reports/screenshots/${scenario.pickle.name}.png`;
        await page.screenshot({ path: screenshotPath, fullPage: true });
        this.attach(`../${screenshotPath}`, 'image/png');
    }
    await browser.close();
});

export { page, browser };
*/
