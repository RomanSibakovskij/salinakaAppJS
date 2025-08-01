"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { CheckoutPage } = require("../../pages/checkout.page.js");

class CheckoutPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page order summary section text element assert test method
    async isCheckoutPageOrderSummarySectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page order summary section title is as expected
        const checkoutPageOrderSummarySectionTitle = await checkoutPage.getCheckoutPageSectionTitle();
        assert.strictEqual(checkoutPageOrderSummarySectionTitle, "Order Summary", "The checkout page order summary section title doesn't match expectations.");
        //assert the checkout page order summary section title is as expected
        const checkoutPageOrderSummarySectionSubtitle = await checkoutPage.getCheckoutPageOrderSummarySectionSubtitle();
        assert.strictEqual(checkoutPageOrderSummarySectionSubtitle, "Review items in your basket.", "The checkout page order summary section subtitle doesn't match expectations.");
        //product table
        //assert the checkout page order summary product table product quantity subtext(s) is as expected
        const checkoutPageProductQtySubtextElements = await checkoutPage.getCheckoutPageProductQtySubtext();
        for (const subtext of checkoutPageProductQtySubtextElements) {
            assert.strictEqual(subtext, "Quantity", "The checkout page order summary product table product quantity subtext(s) doesn't match expectations.");
        }
        //assert the checkout page order summary product table product size subtext(s) is as expected
        const checkoutPageProductSizeSubtextElements = await checkoutPage.getCheckoutPageProductSizeSubtext();
        for (const subtext of checkoutPageProductSizeSubtextElements) {
            assert.strictEqual(subtext, "Size", "The checkout page order summary product table product size subtext(s) doesn't match expectations.");
        }
        //assert the checkout page order summary product table product color subtext(s) is as expected
        const checkoutPageProductColorSubtextElements = await checkoutPage.getCheckoutPageProductColorSubtext();
        for (const subtext of checkoutPageProductColorSubtextElements) {
            assert.strictEqual(subtext, "Color", "The checkout page order summary product table product color subtext(s) doesn't match expectations.");
        }
        //subtotal
        //assert the checkout page order summary section subtotal price subtext is as expected
        const checkoutPageOrderSummarySubtotalSubtext = await checkoutPage.getCheckoutPageOrderSubtotalSubtext();
        assert.strictEqual(checkoutPageOrderSummarySubtotalSubtext, "Subtotal:", "The checkout page order summary section subtotal price subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page shipping section text element assert test method
    async isCheckoutPageShippingSectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page shipping section title is as expected
        const checkoutPageShippingSectionTitle = await checkoutPage.getCheckoutPageSectionTitle();
        assert.strictEqual(checkoutPageShippingSectionTitle, "Shipping Details", "The checkout page shipping section title doesn't match expectations.");
        //input form
        //assert the checkout page shipping section full name subtext is as expected
        const checkoutPageShippingFullNameSubtext = await checkoutPage.getCheckoutPageShippingFullNameSubtext();
        assert.strictEqual(checkoutPageShippingFullNameSubtext, "* Full Name", "The checkout page shipping section full name subtext doesn't match expectations.");
        //assert the checkout page shipping section email subtext is as expected
        const checkoutPageShippingEmailSubtext = await checkoutPage.getCheckoutPageShippingEmailSubtext();
        assert.strictEqual(checkoutPageShippingEmailSubtext, "* Email Address", "The checkout page shipping section email subtext doesn't match expectations.");
        //assert the checkout page shipping address subtext is as expected
        const checkoutPageShippingAddressSubtext = await checkoutPage.getCheckoutPageShippingAddressSubtext();
        assert.strictEqual(checkoutPageShippingAddressSubtext, "* Shipping Address", "The checkout page shipping address subtext doesn't match expectations.");
        //assert the checkout page shipping section mobile number subtext is as expected
        const checkoutPageShippingMobileNumberSubtext = await checkoutPage.getCheckoutPageShippingMobileSubtext();
        assert.strictEqual(checkoutPageShippingMobileNumberSubtext, "Mobile Number", "The checkout page shipping section mobile subtext doesn't match expectations.");
        //shipping option
        //assert the checkout page shipping option subtext is as expected
        const checkoutPageShippingOptionSubtext = await checkoutPage.getCheckoutPageShippingOptionSubtext();
        assert.strictEqual(checkoutPageShippingOptionSubtext, "Shipping Option", "The checkout page shipping option subtext doesn't match expectations.");
        //assert the checkout page shipping option description is as expected
        const checkoutPageShippingOptionDesc = await checkoutPage.getCheckoutPageShippingOptionDesc();
        assert.strictEqual(checkoutPageShippingOptionDesc, "  International Shipping  7-14 days", "The checkout page shipping option description doesn't match expectations.");
        //total (shipping)
        //assert the checkout page shipping subtext is as expected
        const checkoutPageShippingSubtext = await checkoutPage.getCheckoutPageShippingSubtext();
        assert.strictEqual(checkoutPageShippingSubtext, "International Shipping:  ", "The checkout page shipping section international shipping doesn't match expectations.");
        //assert the checkout page shipping subtotal subtext is as expected
        const checkoutPageShippingSubtotalSubtext = await checkoutPage.getCheckoutPageSubtotalSubtext();
        assert.strictEqual(checkoutPageShippingSubtotalSubtext, "Subtotal:  ", "The checkout page shipping section subtotal subtext doesn't match expectations.");
        //assert the checkout page shipping total subtext is as expected
        const checkoutPageShippingTotalSubtext = await checkoutPage.getCheckoutPageTotalSubtext();
        assert.strictEqual(checkoutPageShippingTotalSubtext, "Total:  ", "The checkout page shipping section total subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page payment section text element assert test method
    async isCheckoutPagePaymentSectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert the checkout page payment section title is as expected
        const checkoutPagePaymentSectionTitle = await checkoutPage.getCheckoutPageSectionTitle();
        assert.strictEqual(checkoutPagePaymentSectionTitle, "Payment", "The checkout page payment section title doesn't match expectations.");
        //assert the checkout page payment section subtitle is as expected
        const checkoutPagePaymentSectionSubtitle = await checkoutPage.getCheckoutPagePaymentOptionsSubtext();
        assert.strictEqual(checkoutPagePaymentSectionSubtitle, "Payment Option", "The checkout page payment section subtitle doesn't match expectations.");
        //assert the checkout page payment section total price subtext is as expected
        const checkoutPagePaymentSectionTotalPriceSubtext = await checkoutPage.getCheckoutPageTotalPaymentSubtext();
        assert.strictEqual(checkoutPagePaymentSectionTotalPriceSubtext, "Total:", "The checkout page payment section total price subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page payment options section (credit card) text element assert test method
    async isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //payment options
        //credit card
        //assert the checkout page payment credit card option name is as expected
        const checkoutPagePaymentCredCardOptionName = await checkoutPage.getCheckoutPagePaymentCreditCardOptionName();
        assert.strictEqual(checkoutPagePaymentCredCardOptionName, "Credit Card", "The checkout page payment section credit card option name doesn't match expectations.");
        //assert the checkout page payment credit card option description is as expected
        const checkoutPagePaymentCredCardOptionDesc = await checkoutPage.getCheckoutPagePaymentCreditCardOptionDesc();
        assert.strictEqual(checkoutPagePaymentCredCardOptionDesc, "Pay with Visa, Master Card and other debit or credit card", "The checkout page payment section credit card option description doesn't match expectations.");
        //assert the checkout page payment accepted credit card subtext is as expected
        const checkoutPagePaymentAcceptedCredCardSubtext = await checkoutPage.getCheckoutPagePaymentAcceptedCardsSubtext();
        assert.strictEqual(checkoutPagePaymentAcceptedCredCardSubtext, "Accepted Cards", "The checkout page payment section accepted credit card subtext doesn't match expectations.");
        //input form
        //assert the checkout page payment accepted credit card full name subtext is as expected
        const checkoutPagePaymentAcceptedCredCardFullNameSubtext = await checkoutPage.getCheckoutPageCreditCardFullNameSubtext();
        assert.strictEqual(checkoutPagePaymentAcceptedCredCardFullNameSubtext, "* Name on Card", "The checkout page payment section credit card full name subtext doesn't match expectations.");
        //assert the checkout page payment accepted credit card number subtext is as expected
        const checkoutPagePaymentAcceptedCredCardNumberSubtext = await checkoutPage.getCheckoutPageCreditCardNumberSubtext();
        assert.strictEqual(checkoutPagePaymentAcceptedCredCardNumberSubtext, "* Card Number", "The checkout page payment section credit card card number subtext doesn't match expectations.");
        //assert the checkout page payment accepted credit card exp date subtext is as expected
        const checkoutPagePaymentAcceptedCredCardExpDateSubtext = await checkoutPage.getCheckoutPageCreditCardExpDateSubtext();
        assert.strictEqual(checkoutPagePaymentAcceptedCredCardExpDateSubtext, "* Expiry Date", "The checkout page payment section credit card exp date subtext doesn't match expectations.");
        //assert the checkout page payment accepted credit card CVV subtext is as expected
        const checkoutPagePaymentAcceptedCredCardCVVSubtext = await checkoutPage.getCheckoutPageCreditCardCVVSubtext();
        assert.strictEqual(checkoutPagePaymentAcceptedCredCardCVVSubtext, "* CCV", "The checkout page payment section credit card CVV subtext doesn't match expectations.");
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page payment options section (PayPal) text element assert test method
    async isCheckoutPagePayPalPaymentOptionSectionTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //payment options
        //paypal
        //assert the checkout page payment paypal option name is as expected
        const checkoutPagePaymentPayPalOptionName = await checkoutPage.getCheckoutPagePaypalOptionName();
        assert.strictEqual(checkoutPagePaymentPayPalOptionName, "PayPal", "The checkout page payment section paypal option name doesn't match expectations.");
        //assert the checkout page payment paypal option description is as expected
        const checkoutPagePaymentPayPalOptionDesc = await checkoutPage.getCheckoutPagePaypalOptionDesc();
        assert.strictEqual(checkoutPagePaymentPayPalOptionDesc, "Pay easily, fast and secure with PayPal.", "The checkout page payment section paypal option description doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = CheckoutPageTextElementAssert;