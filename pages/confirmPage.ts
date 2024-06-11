import {Page} from "@playwright/test"

export class ConfirmPage{

    constructor(public page:Page){}
   
    private confirmElements = {
        confirmOrderBtn: "#button-confirm[type='button']"
    }

    async clickOnConfirmOrderBtn(){
      const confirmBtn = this.page.locator(this.confirmElements.confirmOrderBtn);
      await confirmBtn.waitFor({state:"visible"});
      await confirmBtn.click({timeout: 15000});
    }

}