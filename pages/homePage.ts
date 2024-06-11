import { Page } from "@playwright/test"

export class HomePage {

    constructor(public page:Page){}

    private homeElements = {
        myAccountDropdownBtn: "li:nth-child(6) a[role='button'] .title",
        loginBtn: "ul li:nth-child(6) li:nth-child(1) .title",
        registerBtn: "ul li:nth-child(6) li:nth-child(2) .title"
    }

    async clickMyAccountDropdownBtn() {
       await this.page.locator(this.homeElements.myAccountDropdownBtn).hover()
    }

    async navigateLoginPage() {
       await this.page.locator(this.homeElements.loginBtn).click()
    }

    async navigateRegisterPage() {
       await this.page.locator(this.homeElements.registerBtn).click()
    }
}