"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");

class CheckoutPageInvalidSingularInput extends BasePage{

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

        //invalid checkout input data - invalid singular input format
        this._invalidCheckoutFullNameFormat = "#$%$^% %$#%@"; // special symbols only
        this._invalidCheckoutEmailFormat = "sfdgfdfakemail.com"; // missing '@'
        this._existingCheckoutEmail = "m0@example.com"; // used beforehand in manual testing for another account
        this._invalidCheckoutAddressFormat = "@#$%$^%"; // special symbols only
        this._invalidCheckoutMobileFormat = "@$#$#%$^%"; // special symbols only
        this._invalidCheckoutCreditCardFullNameFormat = "#$#%$^%^% &*&^%&^%"; // special symbols only
        this._invalidCheckoutCreditCardNumberFormat = "#$%^%*&^"; // special symbols only
        this._invalidCheckoutCreditCardExpDateFormat = "%^/$#/*&^%"; // special symbols only
        this._reversedCheckoutCreditCardExpDate = "2029/11/11"; // reversed format
        this._invalidCheckoutCreditCardCVVNumberFormat = "@#$"; // special symbols only

    }

    //invalid shipping section input methods - invalid singular input
    async inputInvalidShippingFullNameFormatIntoShippingFullNameInputField(){
        const shippingFullNameInputField = await this.driver.findElement(this._checkoutPageFullNameInputField);
        const invalidShippingFullNameFormat = this._invalidCheckoutFullNameFormat;
        Logger.info("Invalid shipping full name format (checkout page shipping section): ", invalidShippingFullNameFormat);
        await shippingFullNameInputField.sendKeys(invalidShippingFullNameFormat);
    }
    async inputInvalidShippingEmailFormatIntoShippingEmailInputField(){
        const shippingEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const invalidShippingEmailFormat = this._invalidCheckoutEmailFormat;
        Logger.info("Invalid shipping email format (checkout page shipping section): ", invalidShippingEmailFormat);
        await shippingEmailInputField.sendKeys(invalidShippingEmailFormat);
    }
    async inputExistingShippingEmailIntoShippingEmailInputField(){
        const shippingEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const existingShippingEmail = this._existingCheckoutEmail;
        Logger.info("Existing shipping email (checkout page shipping section): ", existingShippingEmail);
        await shippingEmailInputField.sendKeys(existingShippingEmail);
    }
    async inputInvalidShippingAddressFormatIntoShippingAddressInputField(){
        const shippingAddressInputField = await this.driver.findElement(this._checkoutPageAddressInputField);
        const invalidShippingAddressFormat = this._invalidCheckoutAddressFormat;
        Logger.info("Invalid shipping address format (checkout page shipping section): ", invalidShippingAddressFormat);
        await shippingAddressInputField.sendKeys(invalidShippingAddressFormat);
    }
    async inputInvalidShippingMobilePhoneFormatIntoShippingMobileInputField(){
        const shippingMobilePhoneInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        const invalidShippingMobilePhoneFormat = this._invalidCheckoutMobileFormat;
        Logger.info("Invalid shipping mobile phone format (checkout page shipping section): ", invalidShippingMobilePhoneFormat);
        await shippingMobilePhoneInputField.sendKeys(invalidShippingMobilePhoneFormat);
    }

    //invalid credit card data input methods -invalid singular input format
    async inputInvalidCredCardNameFormatIntoCredCardNameInputField(){
        const credCardNameInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameInputField);
        const invalidFullNameFormat = this._invalidCheckoutCreditCardFullNameFormat;
        Logger.info("Invalid credit card full name format (checkout page payment section - credit card): ", invalidFullNameFormat);
        await credCardNameInputField.sendKeys(invalidFullNameFormat);
    }
    async inputInvalidCredCardNumberFormatIntoCredCardNumberInputField(){
        const credCardNumberInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberInputField);
        const invalidCreditCardNumberFormat = this._invalidCheckoutCreditCardNumberFormat;
        Logger.info("Invalid credit card number format (checkout page payment section - credit card): ", invalidCreditCardNumberFormat);
        await credCardNumberInputField.sendKeys(invalidCreditCardNumberFormat);
    }
    async inputInvalidCredCardExpDateFormatIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const invalidCreditCardExpDateFormat = this._invalidCheckoutCreditCardExpDateFormat;
        Logger.info("Invalid credit card expiration date format (checkout page payment section - credit card): ", invalidCreditCardExpDateFormat);
        await credCardExpDateInputField.sendKeys(invalidCreditCardExpDateFormat);
    }
    async inputReversedCredCardExpDateIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const reversedCreditCardExpDate = this._reversedCheckoutCreditCardExpDate;
        Logger.info("Reversed credit card expiration date (checkout page payment section - credit card): ", reversedCreditCardExpDate);
        await credCardExpDateInputField.sendKeys(reversedCreditCardExpDate);
    }
    async inputInvalidCredCardCVVFormatIntoCredCardCVVInputField(){
        const credCardCVVInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVInputField);
        const invalidCreditCardCVVFormat = this._invalidCheckoutCreditCardCVVNumberFormat;
        Logger.info("Invalid credit card CVV number format (checkout page payment section - credit card): ", invalidCreditCardCVVFormat);
        await credCardCVVInputField.sendKeys(invalidCreditCardCVVFormat);
    }

}
module.exports = CheckoutPageInvalidSingularInput;