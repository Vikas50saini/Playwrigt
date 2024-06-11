import { chromium, test } from "@playwright/test"

test("login test demo", async () => {
      
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.locator("xpath=(//a[contains(@href,'/account')]//span)[2]").hover();
    await page.locator("xpath=//span[contains(text(),'Login')]").click();
    
    await page.locator("id=input-email").fill("vikas081348c99@gmail.com");
    await page.locator("id=input-password").fill("Welcome12345");
    await page.locator("css=input[value='Login']").click();

    await page.waitForTimeout(5000);

})