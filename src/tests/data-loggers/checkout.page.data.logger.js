"use strict"

const BaseTest = require("../utilities/base.test.js");
const { CheckoutPage } = require("../../pages/checkout.page.js");

const Logger = require("../../pages/utilities/logger.js");

class CheckoutPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page order summary product data logger method
    async logCheckoutPageOrderSummaryProductData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page order summary section displayed product data: " + "\n");
        //log checkout page order summary section product name(s)
        const checkoutPageProductNames = await checkoutPage.getCheckoutPageProductName();
        Logger.info("Checkout page order summary section product name(s): " + checkoutPageProductNames);
        //log checkout page order summary section product quantity(ies)
        const checkoutPageProductQuantities = await checkoutPage.getCheckoutPageProductQty();
        Logger.info("Checkout page order summary section product quantity(ies): " + checkoutPageProductQuantities);
        //log checkout page order summary section product size(s)
        const checkoutPageProductSizes = await checkoutPage.getCheckoutPageProductSize();
        Logger.info("Checkout page order summary section product size(s): " + checkoutPageProductSizes);
        //log checkout page order summary section product unit price(s)
        const checkoutPageProductUnitPrices = await checkoutPage.getCheckoutPageProductUnitPrice();
        Logger.info("Checkout page order summary section product unit price(s): " + checkoutPageProductUnitPrices);
        //log checkout page order summary section subtotal price
        const checkoutPageOrderSummarySubtotalPrice = await checkoutPage.getCheckoutPageOrderSummarySubtotalPrice();
        Logger.info("Checkout page order summary section subtotal price: " + checkoutPageOrderSummarySubtotalPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page shipping section data logger method
    async logCheckoutPageShippingData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page order summary section displayed product data: " + "\n");
        //log checkout page shipping section international shipping price
        const checkoutPageShippingInternationalPrice = await checkoutPage.getCheckoutPageShippingOptionPrice();
        Logger.info("Checkout page shipping section international shipping price: " + checkoutPageShippingInternationalPrice);
        //total
        //log checkout page shipping section international shipping price
        const checkoutPageShippingPrice = await checkoutPage.getCheckoutPageShippingPrice();
        Logger.info("Checkout page shipping section international shipping (total) price: " + checkoutPageShippingPrice);
        //log checkout page shipping section international shipping price
        const checkoutPageSubtotalPrice = await checkoutPage.getCheckoutPageSubtotalPrice();
        Logger.info("Checkout page shipping section subtotal price: " + checkoutPageSubtotalPrice);
        //log checkout page shipping section international shipping price
        const checkoutPageTotalPrice = await checkoutPage.getCheckoutPageTotalPrice();
        Logger.info("Checkout page shipping section total price: " + checkoutPageTotalPrice + "\n");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page payment section data logger method
    async logCheckoutPagePaymentData(){
        const checkoutPage = new CheckoutPage(this.driver);
        console.log("Checkout page payment section displayed total payment data: " + "\n");
        //log checkout page payment section total price
        const checkoutPagePaymentTotalPrice = await checkoutPage.getCheckoutPageTotalPaymentPrice();
        Logger.info("Checkout page payment section total price: " + checkoutPagePaymentTotalPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = CheckoutPageDataLogger;