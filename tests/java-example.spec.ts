import test from "@playwright/test";

test("@java pw java-doc", async  ({ page }) => {
    test.setTimeout(150_000);
    await page.waitForTimeout(120_000);
  
    await page.goto('https://playwright.dev/');

    // Create a locator.
    const getStarted = page.getByRole('link', { name: 'Get started' });
    // Click it.
    await getStarted.click();
    page.getByRole('button', { name: 'Node.js'});

    await page.getByRole("link", {name: "Java"}).click
   // await page.locator("css=a[href=\"/java/docs/intro\"]").click

});