import { Locator, Page, expect, test } from "@playwright/test"
import { beforeEach } from "node:test"

test.describe("input test suit", async () => {

    test.beforeEach("Launch the app", async ({ page }) => {
        await page.goto("https://letcode.in/windows");
        await page.waitForLoadState("domcontentloaded", {timeout: 50000});
    })

    test("Single page handling", async ({ page , context}) => {
        const oldtab = page;
        const [newTab] = await Promise.all([
            context.waitForEvent("page"),
            await oldtab.click("#home")
        ]);
        const newPageTitle=await newTab.title();
        expect(newPageTitle).toEqual("LetCode with Koushik");

        await newTab.waitForLoadState("domcontentloaded");

        // to switch the focus on newly opened tab 
        await newTab.bringToFront();

        // now click on edit button on newly opened tab
        await newTab.locator("'Log in'").click();

        const oldTabTitle=await oldtab.title();
        expect(oldTabTitle).toEqual("Window handling - LetCode");

        //closing old tab
        await oldtab.close();
    })
})