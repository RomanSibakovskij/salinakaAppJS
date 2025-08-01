"use strict"

const {By, Key} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");
const TestDataGenerator = require("../pages/utilities/test.data.generator.js");
const { RegisterPage } = require("../pages/register.page.js");

class CheckoutPage extends BasePage{

    constructor(driver) {
        super(driver);

        //checkout page web elements
        //checkout header (list)
        this._checkoutPageHeaderMenuElements = By.xpath("//ul[@class='checkout-header-menu']/li");
        //order summary section
        this._checkoutPageSectionTitle = By.xpath("//h3[@class='text-center']");
        this._checkoutPageOrderSummarySectionSubtitle = By.xpath("//div[@class='checkout-step-1']/span");
        //table elements
        this._checkoutPageProductQtyIncreaseButtonElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-control']/button[1]");
        this._checkoutPageProductQtyDecreaseButtonElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-control']/button[2]");
        this._checkoutPageProductImageElements = By.xpath("//div[@class='checkout-items']//img");
        this._checkoutPageProductNameLinkElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-details']/a");
        this._checkoutPageProductQtySubtextElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[1]/span");
        this._checkoutPageProductQtyElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[1]/h5");
        this._checkoutPageProductSizeSubtextElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[2]/span");
        this._checkoutPageProductSizeElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[2]/h5");
        this._checkoutPageProductColorSubtextElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[3]/span");
        this._checkoutPageProductColorElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-specs']/div[3]/div");
        this._checkoutPageProductUnitPriceElements = By.xpath("//div[@class='checkout-items']//div[@class='basket-item-price']");
        this._checkoutPageProductRemoveButtonElements = By.xpath("//div[@class='checkout-items']//button[@class='basket-item-remove button button-border button-border-gray button-small']");
        //subtotal
        this._checkoutPageOrderSubtotalSubtext = By.xpath("//div[@class='basket-total text-right']/p");
        this._checkoutPageOrderSubtotalPrice = By.xpath("//div[@class='basket-total text-right']/h2");
        //buttons
        this._checkoutPageContinueShoppingButton = By.xpath("//div[@class='checkout-shipping-action']/button[1]");
        this._checkoutPageNextStepButton = By.xpath("//div[@class='checkout-shipping-action']/button[2]");
        //shipping section
        //input form
        this._checkoutPageFullNameSubtext = By.xpath("//label[@for='fullname']");
        this._checkoutPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._checkoutPageEmailSubtext = By.xpath("//label[@for='email']");
        this._checkoutPageEmailInputField = By.xpath("//input[@id='email']");
        this._checkoutPageAddressSubtext = By.xpath("//label[@for='address']");
        this._checkoutPageAddressInputField = By.xpath("//input[@id='address']");
        this._checkoutPageMobileSubtext = By.xpath("//label[@for='mobile']");
        this._checkoutPageMobileCountryCodeDropdownMenu = By.xpath("//div[@class=' flag-dropdown']");
        this._checkoutPageMobileUSCountryCodeOption = By.xpath("//ul[@class=' country-list']/li[@data-country-code='us']");
        this._checkoutPageMobileInputField = By.xpath("//input[@type='tel']");
        //shipping options
        this._checkoutPageShippingOptionSubtext = By.xpath("//div[@class='checkout-field']/label[@class='label-input']");
        this._checkoutPageShippingOptionCheckbox = By.xpath("//div[@class='checkout-checkbox-field']/label");
        this._checkoutPageShippingOptionDesc = By.xpath("//div[@class='checkout-checkbox-field']//h5");
        this._checkoutPageShippingOptionPrice = By.xpath("//div[@class='checkout-checkbox-field']//h4");
        //total (shipping)
        this._checkoutPageShippingSubtext = By.xpath("//table//tr[1]/td[1]");
        this._checkoutPageShippingPrice = By.xpath("//table//tr[1]/td[2]");
        this._checkoutPageSubtotalSubtext = By.xpath("//table//tr[2]/td[1]");
        this._checkoutPageSubtotalPrice = By.xpath("//table//tr[2]/td[2]");
        this._checkoutPageTotalSubtext = By.xpath("//table//tr[3]/td[1]");
        this._checkoutPageTotalPrice = By.xpath("//table//tr[3]/td[2]");
        //payment section
        this._checkoutPagePaymentOptionsSubtext = By.xpath("//span[@class='d-block padding-s']");
        //payment options
        //credit card
        this._checkoutPagePaymentOptionCreditCardCheckbox = By.xpath("//label[@for='modeCredit']");
        this._checkoutPagePaymentOptionCreditCardOptionName = By.xpath("//label[@for='modeCredit']//h4");
        this._checkoutPagePaymentOptionCreditCardOptionDesc = By.xpath("//label[@for='modeCredit']//span");
        this._checkoutPagePaymentOptionCreditCardIconElements = By.xpath("//label[@for='modeCredit']/div[@class='d-flex']/div");
        this._checkoutPagePaymentOptionAcceptedCardsSubtext = By.xpath("//div[@class='checkout-collapse-sub']/span");
        this._checkoutPagePaymentOptionAcceptedCardsIconElements = By.xpath("//div[@class='checkout-collapse-sub']/div[@class='checkout-cards-accepted d-flex-center']/div");
        //input form
        this._checkoutPagePaymentOptionCreditCardFullNameSubtext = By.xpath("//label[@for='name']");
        this._checkoutPagePaymentOptionCreditCardFullNameInputField = By.xpath("//input[@id='name']");
        this._checkoutPagePaymentOptionCreditCardNumberSubtext = By.xpath("//label[@for='cardnumber']");
        this._checkoutPagePaymentOptionCreditCardNumberInputField = By.xpath("//input[@id='cardnumber']");
        this._checkoutPagePaymentOptionCreditCardExpDateSubtext = By.xpath("//label[@for='expiry']");
        this._checkoutPagePaymentOptionCreditCardExpDateInputField = By.xpath("//input[@id='expiry']");
        this._checkoutPagePaymentOptionCreditCardCVVSubtext = By.xpath("//label[@for='ccv']");
        this._checkoutPagePaymentOptionCreditCardCVVInputField = By.xpath("//input[@id='ccv']");
        //paypal option
        this._checkoutPagePaymentOptionPaypalCheckbox = By.xpath("//label[@for='modePayPal']");
        this._checkoutPagePaymentOptionPaypalOptionName = By.xpath("//label[@for='modePayPal']//h4");
        this._checkoutPagePaymentOptionPaypalOptionDesc = By.xpath("//label[@for='modePayPal']//span");
        this._checkoutPagePaymentOptionPaypalIcon = By.xpath("//label[@for='modePayPal']/div[@class='payment-img payment-img-paypal']");
        //total (payment)
        this._checkoutPagePaymentTotalSubtext = By.xpath("//div[@class='basket-total text-right']/p");
        this._checkoutPagePaymentTotalPrice = By.xpath("//div[@class='basket-total text-right']/h2");
        //singular input error element
        this._checkoutPageSingularInputErrorMessage = By.xpath("//span[@class= 'label-input label-error']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        const registerPage = new RegisterPage(this.driver);

        //valid checkout input data

        this._checkoutShippingAddress = testDataGenerator.generateRandomAddress(8);
        this._checkoutShippingMobilePhone = testDataGenerator.generateRandomPhoneNumber();

        this._checkoutCredCardName = registerPage.getFullName();
        this._checkoutCredCardNumber = "4111 1111 1111 1111" //visa test number
        this._checkoutCredCardExpDate = testDataGenerator.generateRandomExpiryDate();
        this._checkoutCredCardCVV = testDataGenerator.generateRandomCVV();

    }

    //click "Credit Card" payment option checkbox method
    async clickCreditCardPaymentOptionCheckbox(){
        const creditCardPaymentOptionCheckbox = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: creditCardPaymentOptionCheckbox }).click().perform();
    }

    //click "Next Step / Confirm" button method
    async clickNextStepButton(){
        const nextStepButton = await this.driver.findElement(this._checkoutPageNextStepButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: nextStepButton }).click().perform();
    }

    //valid shipping section input methods (the remaining data is already present)
    async inputShippingAddressIntoShippingAddressInputField(){
        const shippingAddressInputField = await this.driver.findElement(this._checkoutPageAddressInputField);
        const shippingAddress = this._checkoutShippingAddress;
        Logger.info("Valid user generated shipping address (checkout page shipping section): ", shippingAddress);
        await shippingAddressInputField.sendKeys(shippingAddress);
    }
    async inputShippingMobilePhoneIntoShippingMobileInputField(){
        const shippingMobilePhoneInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        const shippingMobilePhone = this._checkoutShippingMobilePhone;
        Logger.info("Valid user shipping mobile phone (checkout page shipping section): ", shippingMobilePhone);
        await shippingMobilePhoneInputField.sendKeys(shippingMobilePhone);
    }

    //click international shipping option
    async clickInternationalShippingOption(){
        const internationalShippingOption = await this.driver.findElement(this._checkoutPageShippingOptionCheckbox);
        await internationalShippingOption.click();
    }

    //click mobile country code dropdown method
    async clickShippingMobileCountryCodeDropdownMenu(){
        const shippingMobileCountryCodeDropdownMenu = await this.driver.findElement(this._checkoutPageMobileCountryCodeDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: shippingMobileCountryCodeDropdownMenu }).click().perform();
    }

    //select "United States" mobile country code option
    async selectUSMobileCountryCodeOption(){
        const usShippingMobileCountryOption = await this.driver.findElement(this._checkoutPageMobileUSCountryCodeOption);
        await usShippingMobileCountryOption.click();
    }

    //clear shipping input field methods
    async clearShippingFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._checkoutPageFullNameInputField);
        await new Promise(resolve => setTimeout(resolve, 900));
        await this.driver.executeScript("arguments[0].value = '';", fullNameInputField); //use this for React-build webpages
    }
    async clearShippingEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutPageEmailInputField);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await emailInputField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE); //use this for React-build webpages
    }
    async clearShippingMobileInputField(){
        const mobileInputField = await this.driver.findElement(this._checkoutPageMobileInputField);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await mobileInputField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE); //use this for React-build webpages
    }
    async clearCreditCardExpDateInputField(){
        const creditCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await creditCardExpDateInputField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE); //use this for React-build webpages
    }

    //payment options
    //credit card

    //valid credit card data input methods
    async inputValidCredCardNameIntoCredCardNameInputField(){
        const credCardNameInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameInputField);
        const fullName = await this._checkoutCredCardName;
        Logger.info("Valid user credit card full name (checkout page payment section - credit card): ", fullName);
        await credCardNameInputField.sendKeys(fullName);
    }
    async inputValidCredCardNumberIntoCredCardNumberInputField(){
        const credCardNumberInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberInputField);
        const creditCardNumber = this._checkoutCredCardNumber;
        Logger.info("Valid generated user credit card number (checkout page payment section - credit card): ", creditCardNumber);
        await credCardNumberInputField.sendKeys(creditCardNumber);
    }
    async inputValidCredCardExpDateIntoCredCardExpDateInputField(){
        const credCardExpDateInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateInputField);
        const creditCardExpDate = this._checkoutCredCardExpDate;
        Logger.info("Valid generated user credit card expiration date (checkout page payment section - credit card): ", creditCardExpDate);
        await credCardExpDateInputField.sendKeys(creditCardExpDate);
    }
    async inputValidCredCardCVVIntoCredCardCVVInputField(){
        const credCardCVVInputField = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVInputField);
        const creditCardCVV = this._checkoutCredCardCVV;
        Logger.info("Valid generated user credit card CVV number (checkout page payment section - credit card): ", creditCardCVV);
        await credCardCVVInputField.sendKeys(creditCardCVV);
    }

    //checkout page product data getters
    //order summary
    async getCheckoutPageProductName(){
        const elements = await this.driver.findElements(this._checkoutPageProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductQty(){
        const elements = await this.driver.findElements(this._checkoutPageProductQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductSize(){
        const elements = await this.driver.findElements(this._checkoutPageProductSizeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product size(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductUnitPrice(){
        const elements = await this.driver.findElements(this._checkoutPageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageOrderSummarySubtotalPrice(){
        const checkoutPageOrderSummarySubtotalPrice = await this.driver.findElement(this._checkoutPageOrderSubtotalPrice);
        return await checkoutPageOrderSummarySubtotalPrice.getText();
    }

    //shipping options
    async getCheckoutPageShippingOptionPrice(){
        const checkoutPageShippingOptionPrice = await this.driver.findElement(this._checkoutPageShippingOptionPrice);
        return await checkoutPageShippingOptionPrice.getText();
    }

    //total (shipping)
    async getCheckoutPageShippingPrice(){
        const checkoutPageShippingPrice = await this.driver.findElement(this._checkoutPageShippingPrice);
        return await checkoutPageShippingPrice.getText();
    }
    async getCheckoutPageSubtotalPrice(){
        const checkoutPageSubtotalPrice = await this.driver.findElement(this._checkoutPageSubtotalPrice);
        return await checkoutPageSubtotalPrice.getText();
    }
    async getCheckoutPageTotalPrice(){
        const checkoutPageTotalPrice = await this.driver.findElement(this._checkoutPageTotalPrice);
        return await checkoutPageTotalPrice.getText();
    }

    //total (payment)
    async getCheckoutPageTotalPaymentPrice(){
        const checkoutPageTotalPaymentPrice = await this.driver.findElement(this._checkoutPagePaymentTotalPrice);
        return await checkoutPageTotalPaymentPrice.getText();
    }

    //checkout page text element getters
    async getCheckoutPageSectionTitle(){
        const checkoutPageSectionTitle = await this.driver.findElement(this._checkoutPageSectionTitle);
        return await checkoutPageSectionTitle.getText();
    }
    async getCheckoutPageOrderSummarySectionSubtitle(){
        const checkoutPageOrderSummarySectionSubtitle = await this.driver.findElement(this._checkoutPageOrderSummarySectionSubtitle);
        return await checkoutPageOrderSummarySectionSubtitle.getText();
    }

    //product table
    async getCheckoutPageProductQtySubtext(){
        const elements = await this.driver.findElements(this._checkoutPageProductQtySubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product quantity subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductSizeSubtext(){
        const elements = await this.driver.findElements(this._checkoutPageProductSizeSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product size subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getCheckoutPageProductColorSubtext(){
        const elements = await this.driver.findElements(this._checkoutPageProductColorSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get checkout page order summary section product color subtext(s):', error.message);
                    return '';
                }
            })
        );
    }

    //subtotal
    async getCheckoutPageOrderSubtotalSubtext(){
        const checkoutPageOrderSubtotalSubtext = await this.driver.findElement(this._checkoutPageOrderSubtotalSubtext);
        return await checkoutPageOrderSubtotalSubtext.getText();
    }

    //shipping section
    //input form
    async getCheckoutPageShippingFullNameSubtext(){
        const checkoutPageShippingFullNameSubtext = await this.driver.findElement(this._checkoutPageFullNameSubtext);
        return await checkoutPageShippingFullNameSubtext.getText();
    }
    async getCheckoutPageShippingEmailSubtext(){
        const checkoutPageShippingEmailSubtext = await this.driver.findElement(this._checkoutPageEmailSubtext);
        return await checkoutPageShippingEmailSubtext.getText();
    }
    async getCheckoutPageShippingAddressSubtext(){
        const checkoutPageShippingAddressSubtext = await this.driver.findElement(this._checkoutPageAddressSubtext);
        return await checkoutPageShippingAddressSubtext.getText();
    }
    async getCheckoutPageShippingMobileSubtext(){
        const checkoutPageShippingMobileSubtext = await this.driver.findElement(this._checkoutPageMobileSubtext);
        return await checkoutPageShippingMobileSubtext.getText();
    }

    //shipping options
    async getCheckoutPageShippingOptionSubtext(){
        const checkoutPageShippingOptionSubtext = await this.driver.findElement(this._checkoutPageShippingOptionSubtext);
        return await checkoutPageShippingOptionSubtext.getText();
    }
    async getCheckoutPageShippingOptionDesc(){
        const checkoutPageShippingOptionDesc = await this.driver.findElement(this._checkoutPageShippingOptionDesc);
        return await checkoutPageShippingOptionDesc.getText();
    }

    //total (shipping)
    async getCheckoutPageShippingSubtext(){
        const checkoutPageShippingSubtext = await this.driver.findElement(this._checkoutPageShippingSubtext);
        return await checkoutPageShippingSubtext.getText();
    }
    async getCheckoutPageSubtotalSubtext(){
        const checkoutPageSubtotalSubtext = await this.driver.findElement(this._checkoutPageSubtotalSubtext);
        return await checkoutPageSubtotalSubtext.getText();
    }
    async getCheckoutPageTotalSubtext(){
        const checkoutPageTotalSubtext = await this.driver.findElement(this._checkoutPageTotalSubtext);
        return await checkoutPageTotalSubtext.getText();
    }

    //payment section
    async getCheckoutPagePaymentOptionsSubtext(){
        const checkoutPagePaymentOptionsSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionsSubtext);
        return await checkoutPagePaymentOptionsSubtext.getText();
    }

    //payment options
    //credit card
    async getCheckoutPagePaymentCreditCardOptionName(){
        const checkoutPagePaymentCreditCardOptionName = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardOptionName);
        return await checkoutPagePaymentCreditCardOptionName.getText();
    }
    async getCheckoutPagePaymentCreditCardOptionDesc(){
        const checkoutPagePaymentCreditCardOptionDesc = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardOptionDesc);
        return await checkoutPagePaymentCreditCardOptionDesc.getText();
    }
    async getCheckoutPagePaymentAcceptedCardsSubtext(){
        const checkoutPagePaymentAcceptedCardsSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionAcceptedCardsSubtext);
        return await checkoutPagePaymentAcceptedCardsSubtext.getText();
    }

    //input form
    async getCheckoutPageCreditCardFullNameSubtext(){
        const checkoutPageCreditCardFullNameSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardFullNameSubtext);
        return await checkoutPageCreditCardFullNameSubtext.getText();
    }
    async getCheckoutPageCreditCardNumberSubtext(){
        const checkoutPageCreditCardNumberSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardNumberSubtext);
        return await checkoutPageCreditCardNumberSubtext.getText();
    }
    async getCheckoutPageCreditCardExpDateSubtext(){
        const checkoutPageCreditCardExpDateSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardExpDateSubtext);
        return await checkoutPageCreditCardExpDateSubtext.getText();
    }
    async getCheckoutPageCreditCardCVVSubtext(){
        const checkoutPageCreditCardCVVSubtext = await this.driver.findElement(this._checkoutPagePaymentOptionCreditCardCVVSubtext);
        return await checkoutPageCreditCardCVVSubtext.getText();
    }

    //paypal option
    async getCheckoutPagePaypalOptionName(){
        const checkoutPagePaypalOptionName = await this.driver.findElement(this._checkoutPagePaymentOptionPaypalOptionName);
        return await checkoutPagePaypalOptionName.getText();
    }
    async getCheckoutPagePaypalOptionDesc(){
        const checkoutPagePaypalOptionDesc = await this.driver.findElement(this._checkoutPagePaymentOptionPaypalOptionDesc);
        return await checkoutPagePaypalOptionDesc.getText();
    }

    //total (payment)
    async getCheckoutPageTotalPaymentSubtext(){
        const checkoutPageTotalPaymentSubtext = await this.driver.findElement(this._checkoutPagePaymentTotalSubtext);
        return await checkoutPageTotalPaymentSubtext.getText();
    }

    //checkout page singular input error message getter
    async getCheckoutPageSingularInputErrorMsg(){
        const checkoutPageSingularInputErrorMsg = await this.driver.findElement(this._checkoutPageSingularInputErrorMessage);
        return await checkoutPageSingularInputErrorMsg.getText();
    }

    //checkout page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCheckoutPageSummarySectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageHeaderMenuElements,
            this._checkoutPageSectionTitle,
            this._checkoutPageOrderSummarySectionSubtitle,
            this._checkoutPageProductQtyIncreaseButtonElements,
            this._checkoutPageProductQtyDecreaseButtonElements,
            this._checkoutPageProductImageElements,
            this._checkoutPageProductNameLinkElements,
            this._checkoutPageProductQtySubtextElements,
            this._checkoutPageProductQtyElements,
            this._checkoutPageProductSizeSubtextElements,
            this._checkoutPageProductSizeElements,
            this._checkoutPageProductColorSubtextElements,
            this._checkoutPageProductColorElements,
            this._checkoutPageProductUnitPriceElements,
            this._checkoutPageProductRemoveButtonElements,
            this._checkoutPageOrderSubtotalSubtext,
            this._checkoutPageOrderSubtotalPrice,
            this._checkoutPageContinueShoppingButton,
            this._checkoutPageNextStepButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageShippingSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageHeaderMenuElements,
            this._checkoutPageSectionTitle,
            this._checkoutPageFullNameSubtext,
            this._checkoutPageFullNameInputField,
            this._checkoutPageEmailSubtext,
            this._checkoutPageEmailInputField,
            this._checkoutPageAddressSubtext,
            this._checkoutPageAddressInputField,
            this._checkoutPageMobileSubtext,
            this._checkoutPageMobileCountryCodeDropdownMenu,
            this._checkoutPageMobileInputField,
            this._checkoutPageShippingOptionSubtext,
            //this._checkoutPageShippingOptionCheckbox,
            this._checkoutPageShippingOptionDesc,
            this._checkoutPageShippingOptionPrice,
            this._checkoutPageShippingSubtext,
            this._checkoutPageShippingPrice,
            this._checkoutPageSubtotalSubtext,
            this._checkoutPageSubtotalPrice,
            this._checkoutPageTotalSubtext,
            this._checkoutPageTotalPrice,
            this._checkoutPageContinueShoppingButton,
            this._checkoutPageNextStepButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPagePaymentSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageHeaderMenuElements,
            this._checkoutPageSectionTitle,
            this._checkoutPagePaymentOptionsSubtext,
            //this._checkoutPagePaymentOptionCreditCardCheckbox,
            //this._checkoutPagePaymentOptionCreditCardOptionName,
            this._checkoutPagePaymentOptionCreditCardOptionDesc,
            this._checkoutPagePaymentOptionCreditCardIconElements,
            this._checkoutPagePaymentOptionPaypalCheckbox,
            this._checkoutPagePaymentOptionPaypalOptionName,
            this._checkoutPagePaymentOptionPaypalOptionDesc,
            this._checkoutPagePaymentOptionPaypalIcon,
            this._checkoutPagePaymentTotalSubtext,
            this._checkoutPagePaymentTotalPrice,
            this._checkoutPageContinueShoppingButton,
            this._checkoutPageNextStepButton //confirm button is here
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isCheckoutPageCreditCardSectionWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPagePaymentOptionAcceptedCardsSubtext,
            this._checkoutPagePaymentOptionAcceptedCardsIconElements,
            this._checkoutPagePaymentOptionCreditCardFullNameSubtext,
            this._checkoutPagePaymentOptionCreditCardFullNameInputField,
            this._checkoutPagePaymentOptionCreditCardNumberSubtext,
            this._checkoutPagePaymentOptionCreditCardNumberInputField,
            this._checkoutPagePaymentOptionCreditCardExpDateSubtext,
            this._checkoutPagePaymentOptionCreditCardExpDateInputField,
            this._checkoutPagePaymentOptionCreditCardCVVSubtext,
            this._checkoutPagePaymentOptionCreditCardCVVInputField
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { CheckoutPage };