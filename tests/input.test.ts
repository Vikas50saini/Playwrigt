import { Locator, Page, expect, test } from "@playwright/test"
import { beforeEach } from "node:test"

test.describe("input test suit", async () => {

    test.beforeEach("Launch the app", async ({ page }) => {
        await page.goto("https://letcode.in/edit");
        await page.waitForLoadState("domcontentloaded");
    })

    test.afterEach("wait", async ({ page }) => {
        await page.waitForTimeout(3000);
    })

    test("Enter your full Name", async ({ page }) => {
        const name = await page.$("id=fullName");
        console.log("NAME: ", name);

        await name?.type("vikas saini");
    })
    
    test("Append a text and press keyboard tab", async ({ page }) => {
        const name = await page.$("id=join");
        //await name?.focus();
        for (let i = 0; i < 8; i++) {
            await page.keyboard.press("Tab");           
        }
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Space");           
        await name?.type("Human",{delay: 800});
    })

    test("What is inside the text box", async ({ page }) => {
        const name:Locator =  page.locator("id=getMe");
        const text=await name.getAttribute("value");
        await test.expect(text).toEqual("ortonikc");
    })
    
    test("Clear the text", async ({ page }) => {
        const name =  page.locator("id=clearMe");
        await name.clear();
    })
    
    test("Confirm edit field is disabled", async ({ page }) => {
        const name =  page.locator("id=noEdit");
        const flag=await name.isDisabled();
        test.expect(flag).toBeTruthy();
        
        // now enable the text field
        await page.evaluate(async()=>{
            const selector= document.querySelector("#noEdit");
            await selector?.removeAttribute("disabled");
        })
        await test.expect(await name.isDisabled()).toBeFalsy();
        
        await name.type("Vikas Saini");
    })
    
    test("Confirm text is readonly", async ({ page }) => {
        const name =  page.locator("id=dontwrite");
        const flag=await name.isEditable();
        test.expect(flag).toBeFalsy();
        await page.screenshot({fullPage:true,path:"./Screenshot/image.png",mask:[name]});
    })

})