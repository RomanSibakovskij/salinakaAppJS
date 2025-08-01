"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");
const TestDataGenerator = require("../test.data.generator.js");

class CheckoutPageTooShortSingularInput extends BasePage{

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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid checkout input data - too short singular input
        this._tooShortCheckoutFullName = "A D"; //3 chars
        this._tooShortCheckoutEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortCheckoutAddress = "3.K"; // 3 chars
        this._tooShortCheckoutMobile = 57; // 2 digits
        this._tooShortCheckoutCreditCardFullName = "R K"; // 3 chars
        this._tooShortCheckoutCreditCardNumber = "4111 1111 1111 111"; //1 5 digits
        this._tooShortCheckoutCreditCardExpDate = "12/30/202"; // too short year input
        this._tooShortCheckoutCreditCardCVVNumber = 45; // 2 digits

    }

    //invalid shipping section input methods - too short singular input
    async inputTooShortShippingFullNameIntoShippingFullNameInputField(){
        const shippingFullNameInputField = await this.driver.findElement(this._checkoutPageFullNameInputField);
        const tooShortShippingFullName = this._tooShortCheckoutFullName;
        Logger.info("Too short shipping full name (checkout page shipping section): ", tooShortShippingFullName);
        await shippingFullNameInputField.sendKeys(tooShortShippingFullName);
    }
    async inputTooShortShippingEmailIntoShippingEmailInputField(){
        const shippingEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooShortShippingEmail = this._tooShortCheckoutEmail;
        Logger.info("Too short shipping email (checkout page shipping section): ", tooShortShippingEmail);
        await shippingEmailInputField.sendKeys(tooShortShippingEmail);
    }
    async inputTooShortShippingAddressIntoShippingAddressInputField(){
        const shippingAddressInputField = await this.driver.findElement(this._checkoutPageAddressInputField);
        const tooShortShippingAddress = this._tooShortCheckoutAddress;
        Logger.info("Too short shipping address (checkout page shipping section): ", tooShortShippingAddress);
        await shippingAddressInputField.sendKeys(tooShortShippingAddress);
    }
    async inputTooShortShippingMobilePhoneIntoShippingMobileInputField(){
        const shippingMobilePhoneInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        const tooShortShippingMobilePhone = this._tooShortCheckoutMobile;
        Logger.info("Too short shipping mobile phone (checkout page shipping section): ", tooShortShippingMobilePhone);
        await shippingMobilePhoneInputField.sendKeys(tooShortShippingMobilePhone);
    }

    //invalid credit card data input methods - too short singular input
    async inputTooShortCredCardNameIntoCredCardNameInputField(){
        const credCardNameInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameInputField);
        const tooShortFullName = this._tooShortCheckoutCreditCardFullName;
        Logger.info("Too short credit card full name (checkout page payment section - credit card): ", tooShortFullName);
        await credCardNameInputField.sendKeys(tooShortFullName);
    }
    async inputTooShortCredCardNumberIntoCredCardNumberInputField(){
        const credCardNumberInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberInputField);
        const tooShortCreditCardNumber = this._tooShortCheckoutCreditCardNumber;
        Logger.info("Too short credit card number (checkout page payment section - credit card): ", tooShortCreditCardNumber);
        await credCardNumberInputField.sendKeys(tooShortCreditCardNumber);
    }
    async inputTooShortCredCardExpDateIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const tooShortCreditCardExpDate = this._tooShortCheckoutCreditCardExpDate;
        Logger.info("Too short credit card expiration date (checkout page payment section - credit card): ", tooShortCreditCardExpDate);
        await credCardExpDateInputField.sendKeys(tooShortCreditCardExpDate);
    }
    async inputTooShortCredCardCVVIntoCredCardCVVInputField(){
        const credCardCVVInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVInputField);
        const tooShortCreditCardCVV = this._tooShortCheckoutCreditCardCVVNumber;
        Logger.info("Too short credit card CVV number (checkout page payment section - credit card): ", tooShortCreditCardCVV);
        await credCardCVVInputField.sendKeys(tooShortCreditCardCVV);
    }

}
module.exports = CheckoutPageTooShortSingularInput;