import { Before, After, setDefaultTimeout, World, Status } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { ITestCaseHookParameter } from "@cucumber/cucumber";
import * as fs from 'fs';

let page: Page;
let browser: Browser;
let URL: string = "https://ztrain-web.vercel.app";
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

After(async function (this: World, scenario: ITestCaseHookParameter) {
    if (scenario.result?.status !== Status.PASSED) {
        await takeScreenShotOnFailure(this, scenario);
    }
    await browser.close();
});

const takeScreenShotOnFailure = async (world: World, scenario: ITestCaseHookParameter) => {
    const screenshotPath: string = '../Reports/screenshots/';
    const screenshotExtn: string = '.png';
    const screenshotFullPath = `${screenshotPath}${scenario.pickle.name.replace(/ /g, '_')}${screenshotExtn}`;

    try {
        await page.screenshot({
            path: screenshotFullPath,
            fullPage: true,
            timeout: 60000,
          });

        const screenShot = await fs.promises.readFile(screenshotFullPath, 'base64');
        if (screenShot) await world.attach(screenShot, 'image/png');
    } catch (error) {
        console.log(`Failed to take screenshot due to: ${error}`);
    }
};

export { page, browser };
