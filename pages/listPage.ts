import { Page } from "@playwright/test"

export class ListPage{

    constructor(public page:Page){}
   
    private deatilElemets = {
        productImage:"a[id*='mz-product-grid-image-34']",
        addToCartBtn: "button.cart-34",
        checkOut: "a.btn.btn-secondary.btn-block"
    }

    async hoverOnProduct(){
        await this.page.waitForLoadState('domcontentloaded',{timeout:10000});
        await this.page.locator(this.deatilElemets.productImage).hover()
    }

    async clickAddToCart(){
        await this.page.waitForLoadState('domcontentloaded',{timeout:10000});
        await this.page.locator(this.deatilElemets.addToCartBtn).click()
    }

    async clickCheckout(){
        await this.page.waitForLoadState('networkidle',{timeout:10000});
        await this.page.locator(this.deatilElemets.checkOut).last().click({force:true})
    }
}