import { test, Page, expect } from "@playwright/test"



test.describe("Alert Test Suit", () => {

    test.afterEach("tear down", async ({ page }) => {
        await page.waitForTimeout(5000)
        await page.close();
    })

    test("Test 1: handle dropdown", async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

        // select by inner text
        await page.locator("id=select-demo").selectOption({ label: "Monday" })

        // select by value
        await page.locator("id=select-demo").selectOption("Monday")

        // select by index
        await page.locator("id=select-demo").selectOption({ index: 5 })

    })

    test("Test 2: handle jquery dropdown", async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

        await page.locator("css=.selection span[aria-labelledby='select2-country-container']").click()
        await page.locator("css=#select2-country-results").locator("li", { hasText: "India" }).click()
    })
})