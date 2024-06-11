import { test, Page, expect } from "@playwright/test"



test.describe("Alert Test Suit", () => {
    
    test.beforeEach("Navigate to webpage", async({page})=>{
        await test.step("Step 1: landing on alert page", async () => {
            await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
        })
    })

    test.afterEach("tear down", async({page})=>{
            await page.close();
    })

    test("Test 1: Handle alert popup tests", async ({ page }) => {
        await test.step("Step 2: Click and handle alert", async () => {
            page.on("dialog", async (alert) => {
                const msg = alert.message();
                expect(msg).toEqual("I am a JS Alert");
                await alert.accept();
            })
            await page.locator("css=button[onclick='jsAlert()']").click();
        })
    })

    test("Test 2: Handle confirmation popup tests", async ({ page }) => {
        await test.step("Step 2: Click and handle confirmation popup", async () => {
            page.on("dialog", async (alert) => {
                const msg = alert.message();
                expect(msg).toEqual("I am a JS Confirm");
                await alert.dismiss();
            })
            await page.locator("css=button[onclick='jsConfirm()']").click();
        })
    })

    test("Test 3: Handle prompt tests", async ({ page }) => {
        await test.step("Step 2: Click and handle prompt popup", async () => {
            page.on("dialog", async (alert) => {
                const msg = alert.message();
                expect(msg).toEqual("I am a JS prompt");
                await alert.accept("hello all from Vikas");
            })
            await page.locator("css=button[onclick='jsPrompt()']").click();
        })
    })
})