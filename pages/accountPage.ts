import {Page} from "@playwright/test"

export class AccountPage{

    constructor(public page:Page){}

    accountElement = {
        megaMenu  : "#widget-navbar-217834 .mega-menu.position-static  a[role='button']",
        productName :(product:string)=> `.nav-item a[title='${product}']`
    }
 
    async hoverMegaMenu(){
     await this.page.locator(this.accountElement.megaMenu).hover()
    }
 
    async selectProductFromMegaMenu(product:string){
     await this.page.locator(this.accountElement.productName(product)).click()
    }
 
 }