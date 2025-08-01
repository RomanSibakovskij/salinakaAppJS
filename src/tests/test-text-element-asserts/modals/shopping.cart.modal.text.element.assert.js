"use strict"

const assert = require("node:assert");
const BaseTest = require("../../utilities/base.test.js");
const ShoppingCartModal = require("../../../pages/modals/shopping.cart.modal.js");

class ShoppingCartModalTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart modal text element assert test method
    async isShoppingCartModalTextElementAsExpected(){
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        //assert the shopping cart modal title is as expected
        const shopCartModalTitle = await shoppingCartModal.getShopCartModalTitle();
        assert.strictEqual(shopCartModalTitle, "My Basket", "The shopping cart modal title doesn't match expectations.");
        //shopping cart table list elements
        //assert the shopping cart each product quantity subtext(s) is as expected
        const actualProductQtyElements = await shoppingCartModal.getShopCartModalProductQtySubtexts();
        for (const subtext of actualProductQtyElements) {
            assert.strictEqual(subtext, "Quantity", "The shopping cart modal product quantity subtext(s) doesn't match expectations.");
        }
        //assert the shopping cart each product size subtext(s) is as expected
        const actualProductSizeElements = await shoppingCartModal.getShopCartModalProductSizeSubtexts();
        for (const subtext of actualProductSizeElements) {
            assert.strictEqual(subtext, "Size", "The shopping cart modal product size subtext(s) doesn't match expectations.");
        }
        //assert the shopping cart each product color subtext(s) is as expected
        const actualProductColorElements = await shoppingCartModal.getShopCartModalProductColorSubtexts();
        for (const subtext of actualProductColorElements) {
            assert.strictEqual(subtext, "Color", "The shopping cart modal product color subtext(s) doesn't match expectations.");
        }
        //summary section
        //assert the shopping cart modal subtotal price is as expected
        const shopCartModalSubtotalSubtext = await shoppingCartModal.getShopCartModalSubtotalPriceSubtext();
        assert.strictEqual(shopCartModalSubtotalSubtext, "Subtotal Amout:", "The shopping cart modal subtotal price subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartModalTextElementAssert;