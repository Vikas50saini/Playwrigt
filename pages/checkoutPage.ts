import { Page } from "@playwright/test"

export class CheckoutPage {

    constructor(public page: Page) { }

    checkoutElements = {
        firstName: "#input-payment-firstname",
        lastName: "#input-payment-lastname",
        address1: "#input-payment-address-1",
        city: "#input-payment-city",
        country: "#input-payment-country",
        region: "#input-payment-zone",
        agreeCheckbox: "label.custom-control-label[for='input-agree']",
        continueBtn: "#button-save[type='submit']",
        addNewAddressRadioBtn: "label[for='input-payment-address-new']"
    }

    async clickAddNewAddRadioBtn() {
        const count = await this.page.locator(this.checkoutElements.addNewAddressRadioBtn).count();
        if(count ===1 ){
            await this.page.waitForLoadState('domcontentloaded', {timeout: 10000});
            await this.page.locator(this.checkoutElements.addNewAddressRadioBtn).click();
        }
    }

    async enterFirstName(firstName: string) {
        await this.page.locator(this.checkoutElements.firstName).fill(firstName)
    }
    async enterLastName(lastName: string) {
        await this.page.locator(this.checkoutElements.lastName).fill(lastName)
    }
    async enterAddress1(address1: string) {
        await this.page.locator(this.checkoutElements.address1).fill(address1)
    }
    async enterCity(city: string) {
        await this.page.locator(this.checkoutElements.city).fill(city)
    }
    async selectCountry(country: string) {
        await this.page.locator(this.checkoutElements.country).selectOption({ label: country })
    }
    async selectRegion(region: string) {
        await this.page.locator(this.checkoutElements.region).selectOption({ label: region })
    }

    async checkAgreeCheckbox() {
        await this.page.locator(this.checkoutElements.agreeCheckbox).click()
    }

    async clickContinueBtn() {
        await this.page.locator(this.checkoutElements.continueBtn).click()
    }

}