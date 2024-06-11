import { Page, expect } from "@playwright/test"

export class RegisterPage {

    constructor(public page: Page) {

    }

    private registerElements = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        agreeCheckbox: "label.custom-control-label[for='input-agree']",
        continueBtn: "input[value='Continue']"
    }

    async enterFirstName(inputFirstName: string) {
        await this.page.locator(this.registerElements.firstName).fill(inputFirstName);
    }

    async enterLastName(inputLastName: string) {
        await this.page.locator(this.registerElements.lastName).fill(inputLastName);
    }

    async enterEmail(inputEmail: string) {
        await this.page.locator(this.registerElements.email).fill(inputEmail);
    }

    async enterTelephone(inputTelephone: number) {
        await this.page.locator(this.registerElements.telephone).fill(inputTelephone.toString());
    }

    async enterPassword(inputPassword: string) {
        await this.page.locator(this.registerElements.password).fill(inputPassword);
    }

    async enterConfirmPassword(inputConfirmPassword: string) {
        await this.page.locator(this.registerElements.confirmPassword).fill(inputConfirmPassword);
    }

    async clickAgreeCheckbox() {
        await this.page.locator(this.registerElements.agreeCheckbox).click();
    }

    async clickContinueBtn() {
        await this.page.locator(this.registerElements.continueBtn).click();
    }
}