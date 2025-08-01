"use strict"

const BaseTest = require("../../utilities/base.test.js");
const ShoppingCartModal = require("../../../pages/modals/shopping.cart.modal.js");

const Logger = require("../../../pages/utilities/logger.js");

class ShoppingCartModalDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart modal product data logger
    async logShoppingCartModalProductData(){
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        console.log("Shopping cart modal displayed product data: " + "\n");
        //shopping cart table
        //log shopping cart modal product name(s)
        const shopCartModalProductNames = await shoppingCartModal.getShopCartModalProductNameLinks();
        Logger.info("Shopping cart modal product name(s): " + shopCartModalProductNames);
        //log shopping cart modal product quantity(ies)
        const shopCartModalProductQty = await shoppingCartModal.getShopCartModalProductQuantities();
        Logger.info("Shopping cart modal product quantity(ies): " + shopCartModalProductQty);
        //log shopping cart modal product size(s)
        const shopCartModalProductSizes = await shoppingCartModal.getShopCartModalProductSizes();
        Logger.info("Shopping cart modal product size(s): " + shopCartModalProductSizes);
        //summary section
        //log shopping cart modal product(s) subtotal price
        const shopCartModalProductSubtotalPrice = await shoppingCartModal.getShopCartModalSubtotalPrice();
        Logger.info("Shopping cart modal product(s) subtotal price: " + shopCartModalProductSubtotalPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartModalDataLogger;