import { Page } from "@playwright/test"

export class LoginPage {

    constructor(public page: Page) {

    }

    private loginElements = {
        email: "#input-email",
        password: "#input-password",
        loginBtn: "input[value='Login']"
    }

    async enterEmail(emailAddress: string) {
        await this.page.locator(this.loginElements.email).fill(emailAddress);
    }

    async enterPassword(password: string) {
        await this.page.locator(this.loginElements.password).fill(password);
    }

    async clickLoginBtn() {
        await this.page.locator(this.loginElements.loginBtn).click();
    }
}