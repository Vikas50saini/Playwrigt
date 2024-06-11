import { test, expect } from "../../fixture/myFixture"
import billingAddress from "../../testData/billingAddress.json"
import registerData from "../../testData/registerData.json"
import * as fs from 'fs';

test.describe("Add to Cart Test Suit", () => {

    test.beforeEach("Navigate to homepage", async ({ page, baseURL }) => {
        await test.step("Step 1: Go to homepage", async () => {
            await page.goto(`${baseURL}`);
        })
    })

    test("Registration Tests", async ({ homePage, registerPage, page }) => {
        await test.step("Step 2: Navigate to Registration page", async () => {
            await homePage.clickMyAccountDropdownBtn();
            await homePage.navigateRegisterPage();
        })

        await test.step("Step3: Enter user registration details and create a user account", async () => {
            await registerPage.enterFirstName(registerData.firstName);
            await registerPage.enterLastName(registerData.lastName);
            const email = getEmailAddess();
            await registerPage.enterEmail(email);
            fs.writeFileSync("framework/testData/userCredData.json", JSON.stringify({
                emailAdd: email,
                password: registerData.password
            }));
            await registerPage.enterTelephone(registerData.telephone);
            await registerPage.enterPassword(registerData.password);
            await registerPage.enterConfirmPassword(registerData.confirmPassword);
            await registerPage.clickAgreeCheckbox();
            await registerPage.clickContinueBtn();
        })

        await test.step("Step4: Validate user account registration", async () => {
            const successMsg = page.getByText("Your Account Has Been Created!");
            await expect(successMsg).toBeVisible();
        })
    })

    test("Place order Tests", async ({ homePage, loginPage, accountPage, listPage, checkoutPage, confirmPage, page }) => {
        await test.step("Step 2: Navigate to Login page", async () => {
            await homePage.clickMyAccountDropdownBtn();
            await homePage.navigateLoginPage();
        })

        await test.step("Step3: Login with user credentials", async () => {
            let userData: any;
            try {
                const data = fs.readFileSync("framework/testData/userCredData.json", 'utf8');
                userData = JSON.parse(data);
            } catch (err) {
                console.error('Error reading the JSON file:', err);
                return;
            }
            await loginPage.enterEmail(userData.emailAdd);
            await loginPage.enterPassword(userData.password);
            await loginPage.clickLoginBtn();
        })

        await test.step("Step4: Select produc and Navigate to product list page", async () => {
            await accountPage.hoverMegaMenu();
            await accountPage.selectProductFromMegaMenu("Apple");
        })

        await test.step("Step5: Add product in cart and Navigate to checkout page", async () => {
            await listPage.hoverOnProduct()
            await listPage.clickAddToCart()
            await listPage.clickCheckout()
        })

        await test.step("Step6: Enter Address details and confirm the order", async () => {
            await checkoutPage.clickAddNewAddRadioBtn()
            await checkoutPage.enterFirstName(registerData.firstName)
            await checkoutPage.enterLastName(registerData.lastName)
            await checkoutPage.enterAddress1(billingAddress.address1)
            await checkoutPage.enterCity(billingAddress.city)
            await checkoutPage.selectCountry(billingAddress.country)
            await checkoutPage.selectRegion(billingAddress.region)
            await checkoutPage.checkAgreeCheckbox()
            await checkoutPage.clickContinueBtn()
            await confirmPage.clickOnConfirmOrderBtn()
        })

        await test.step("Step7: Validate order is placed or not", async() => {
            const successMsg = page.getByText("Your order has been placed!");
            await expect(successMsg).toBeVisible();
        })
    })

})

const getEmailAddess = (): string => `vikas${Math.random().toString(16).substring(6)}@gmail.com`;