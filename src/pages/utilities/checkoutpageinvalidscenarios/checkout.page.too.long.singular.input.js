"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");
const TestDataGenerator = require("../test.data.generator.js");

class CheckoutPageTooLongSingularInput extends BasePage{

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

        //invalid checkout input data - too long singular input
        this._tooLongCheckoutFullName = "Afddsgdsfssdsfgdhjfg Dfddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfh"; //61 chars
        this._tooLongCheckoutEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //1 char -> name, domain
        this._tooLongCheckoutAddress = "3.Dddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfhgsdfrtyuoijhfczcvxvbdfsdfrtrwrrhgfdfghjtrterewfdfdghfg"; // 100 chars
        this._tooLongCheckoutMobile = "536567664354346576574554355654"; // 30 digits
        this._tooLongCheckoutCreditCardFullName = "Rfddsgdsfssdsfgdhjfg Kfddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfh"; // 61 chars
        this._tooLongCheckoutCreditCardNumber = "4111 1111 1111 1111 1"; //17 digits
        this._tooLongCheckoutCreditCardExpDate = "12/30/20223"; // too long year input
        this._tooLongCheckoutCreditCardCVVNumber = 45456; // 5 digits

    }

    //invalid shipping section input methods - too long singular input
    async inputTooLongShippingFullNameIntoShippingFullNameInputField(){
        const shippingFullNameInputField = await this.driver.findElement(this._checkoutPageFullNameInputField);
        const tooLongShippingFullName = this._tooLongCheckoutFullName;
        Logger.info("Too long shipping full name (checkout page shipping section): ", tooLongShippingFullName);
        await shippingFullNameInputField.sendKeys(tooLongShippingFullName);
    }
    async inputTooLongShippingEmailIntoShippingEmailInputField(){
        const shippingEmailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        const tooLongShippingEmail = this._tooLongCheckoutEmail;
        Logger.info("Too long shipping email (checkout page shipping section): ", tooLongShippingEmail);
        await shippingEmailInputField.sendKeys(tooLongShippingEmail);
    }
    async inputTooLongShippingAddressIntoShippingAddressInputField(){
        const shippingAddressInputField = await this.driver.findElement(this._checkoutPageAddressInputField);
        const tooLongShippingAddress = this._tooLongCheckoutAddress;
        Logger.info("Too long shipping address (checkout page shipping section): ", tooLongShippingAddress);
        await shippingAddressInputField.sendKeys(tooLongShippingAddress);
    }
    async inputTooLongShippingMobilePhoneIntoShippingMobileInputField(){
        const shippingMobilePhoneInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        const tooLongShippingMobilePhone = this._tooLongCheckoutMobile;
        Logger.info("Too long shipping mobile phone (checkout page shipping section): ", tooLongShippingMobilePhone);
        await shippingMobilePhoneInputField.sendKeys(tooLongShippingMobilePhone);
    }

    //invalid credit card data input methods - too long singular input
    async inputTooLongCredCardNameIntoCredCardNameInputField(){
        const credCardNameInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameInputField);
        const tooLongFullName = this._tooLongCheckoutCreditCardFullName;
        Logger.info("Too long credit card full name (checkout page payment section - credit card): ", tooLongFullName);
        await credCardNameInputField.sendKeys(tooLongFullName);
    }
    async inputTooLongCredCardNumberIntoCredCardNumberInputField(){
        const credCardNumberInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberInputField);
        const tooLongCreditCardNumber = this._tooLongCheckoutCreditCardNumber;
        Logger.info("Too long credit card number (checkout page payment section - credit card): ", tooLongCreditCardNumber);
        await credCardNumberInputField.sendKeys(tooLongCreditCardNumber);
    }
    async inputTooLongCredCardExpDateIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const tooLongCreditCardExpDate = this._tooLongCheckoutCreditCardExpDate;
        Logger.info("Too long credit card expiration date (checkout page payment section - credit card): ", tooLongCreditCardExpDate);
        await credCardExpDateInputField.sendKeys(tooLongCreditCardExpDate);
    }
    async inputTooLongCredCardCVVIntoCredCardCVVInputField(){
        const credCardCVVInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVInputField);
        const tooLongCreditCardCVV = this._tooLongCheckoutCreditCardCVVNumber;
        Logger.info("Too long credit card CVV number (checkout page payment section - credit card): ", tooLongCreditCardCVV);
        await credCardCVVInputField.sendKeys(tooLongCreditCardCVV);
    }

}
module.exports = CheckoutPageTooLongSingularInput;