"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");

class CheckoutPageNoSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements

        //shipping section
        //input form
        this._checkoutPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._checkoutPageEmailInputField = By.xpath("//input[@id='email']");
        this._checkoutPageAddressInputField = By.xpath("//input[@id='address']");
        this._checkoutPageMobileInputField = By.xpath("//input[@type='tel']");
        //payment options
        //input form
        this._checkoutPagePaymentOptionCreditCardFullNameInputField = By.xpath("//input[@id='name']");
        this._checkoutPagePaymentOptionCreditCardNumberInputField = By.xpath("//input[@id='cardnumber']");
        this._checkoutPagePaymentOptionCreditCardExpDateInputField = By.xpath("//input[@id='expiry']");
        this._checkoutPagePaymentOptionCreditCardCVVInputField = By.xpath("//input[@id='ccv']");

        //invalid checkout input data - no singular input
        this._noCheckoutFullName = "";
        this._noCheckoutEmail = "";
        this._noCheckoutAddress = "";
        this._noCheckoutMobile = "";
        this._noCheckoutCreditCardFullName = "";
        this._noCheckoutCreditCardNumber = "";
        this._noCheckoutCreditCardExpDate = "";
        this._noCheckoutCreditCardCVVNumber = "";

    }

    //invalid shipping section input methods - no singular input
    async inputNoShippingFullNameIntoShippingFullNameInputField(){
        const shippingFullNameInputField = await this.driver.findElement(this._checkoutPageFullNameInputField);
        const noShippingFullName = this._noCheckoutFullName;
        Logger.info("No shipping full name (checkout page shipping section): ", noShippingFullName);
        await shippingFullNameInputField.sendKeys(noShippingFullName);
    }
    async inputNoShippingEmailIntoShippingEmailInputField(){
        const shippingEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const noShippingEmail = this._noCheckoutEmail;
        Logger.info("No shipping email (checkout page shipping section): ", noShippingEmail);
        await shippingEmailInputField.sendKeys(noShippingEmail);
    }
    async inputNoShippingAddressIntoShippingAddressInputField(){
        const shippingAddressInputField = await this.driver.findElement(this._checkoutPageAddressInputField);
        const noShippingAddress = this._noCheckoutAddress;
        Logger.info("No shipping address (checkout page shipping section): ", noShippingAddress);
        await shippingAddressInputField.sendKeys(noShippingAddress);
    }
    async inputNoShippingMobilePhoneIntoShippingMobileInputField(){
        const shippingMobilePhoneInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        const noShippingMobilePhone = this._noCheckoutMobile;
        Logger.info("No shipping mobile phone (checkout page shipping section): ", noShippingMobilePhone);
        await shippingMobilePhoneInputField.sendKeys(noShippingMobilePhone);
    }

    //invalid credit card data input methods - no singular input
    async inputNoCredCardNameIntoCredCardNameInputField(){
        const credCardNameInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameInputField);
        const noFullName = this._noCheckoutCreditCardFullName;
        Logger.info("No credit card full name (checkout page payment section - credit card): ", noFullName);
        await credCardNameInputField.sendKeys(noFullName);
    }
    async inputNoCredCardNumberIntoCredCardNumberInputField(){
        const credCardNumberInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberInputField);
        const noCreditCardNumber = this._noCheckoutCreditCardNumber;
        Logger.info("No credit card number (checkout page payment section - credit card): ", noCreditCardNumber);
        await credCardNumberInputField.sendKeys(noCreditCardNumber);
    }
    async inputNoCredCardExpDateIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const noCreditCardExpDate = this._noCheckoutCreditCardExpDate;
        Logger.info("No credit card expiration date (checkout page payment section - credit card): ", noCreditCardExpDate);
        await credCardExpDateInputField.sendKeys(noCreditCardExpDate);
    }
    async inputNoCredCardCVVIntoCredCardCVVInputField(){
        const credCardCVVInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVInputField);
        const noCreditCardCVV = this._noCheckoutCreditCardCVVNumber;
        Logger.info("No credit card CVV number (checkout page payment section - credit card): ", noCreditCardCVV);
        await credCardCVVInputField.sendKeys(noCreditCardCVV);
    }

}
module.exports = CheckoutPageNoSingularInput;