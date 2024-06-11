import { test as baseTest } from "@playwright/test"

import { RegisterPage } from "../pages/registerPage"
import { ListPage } from "../pages/listPage"
import { HomePage } from "../pages/homePage"
import { ConfirmPage } from "../pages/confirmPage"
import { CheckoutPage } from "../pages/checkoutPage"
import { AccountPage } from "../pages/accountPage"
import { LoginPage } from "../pages/loginPage"


type pages = {
    registerPage: RegisterPage;
    listPage: ListPage;
    homePage: HomePage;
    confirmPage: ConfirmPage;
    checkoutPage: CheckoutPage;
    accountPage: AccountPage;
    loginPage: LoginPage;
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    listPage: async ({ page }, use) => {
        await use(new ListPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    confirmPage: async ({ page }, use) => {
        await use(new ConfirmPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;