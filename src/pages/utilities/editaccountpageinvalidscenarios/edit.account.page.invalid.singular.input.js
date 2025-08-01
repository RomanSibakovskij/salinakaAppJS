"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");

const TestDataGenerator = require("../test.data.generator.js");

class EditAccountPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._editAccountPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._editAccountPageEmailInputField = By.xpath("//input[@id='email']");
        this._editAccountPageAddressInputField = By.xpath("//input[@id='address']");
        this._editAccountPageMobileNumberInputField = By.xpath("//input[@type='tel']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input - no singular input
        this._noEditedFullName = "";
        this._noEditedEmail = "";
        this._noAddress = "";
        this._noMobileNumber = "";

        //invalid singular input - too short singular input
        this._tooShortEditedFullName = "F G"; // 3 chars
        this._tooShortEditedEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name, domain
        this._tooShortAddress = "6.T"; // 3 chars
        this._tooShortMobileNumber = 87; // 2 digits

        //invalid singular input - too long singular input
        this._tooLongEditedFullName = "Ffddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfhgsdfrtyuoijhfczcvxvbdfsdfrtrwrrhgfdfghjtrterewfdfdghfghdytry Hfddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfhgsdfrtyuoijhfczcvxvbdfsdfrtrwrrhgfdfghjtrterewfdfdghfghdytry"; // 201 chars
        this._tooLongEditedEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain
        this._tooLongAddress = "3. Ffddsgdsfssdsfgdhjfghsdrtuioikjfdgsdfhfhgsdfrtyuoijhfczcvxvbdfsdfrtrwrrhgfdfghjtrterewfdfdghfghd"; // 100 chars
        this._tooLongMobileNumber = "436567664354346576574554355654"; // 30 digits

        //invalid singular input - invalid singular input format
        this._invalidEditedFullNameFormat = "@#$@#$%%$^%"; // special symbols only
        this._invalidEditedEmailFormat = "sfdsffakemail.com"; //missing '@'
        this._existingEditedEmail = "m0@example.com"; // used beforehand in manual testing
        this._invalidAddressFormat = "@#$#%$#%^"; // special symbols only
        this._invalidMobileNumberFormat = "#$#%^^&"; // special symbols only

    }

    //invalid edited user register data input methods - no singular input
    async inputNoEditedFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        const noEditedFullName = this._noEditedFullName;
        Logger.info("No edited full name: ", noEditedFullName);
        await fullNameInputField.sendKeys(noEditedFullName);
    }
    async inputNoEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const noEditedEmail = this._noEditedEmail;
        Logger.info("No edited email: ", noEditedEmail);
        await emailInputField.sendKeys(noEditedEmail);
    }
    async inputNoAddressIntoAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        const noAddress = this._noAddress;
        Logger.info("No generated address (edit account page): ", noAddress);
        await addressInputField.sendKeys(noAddress);
    }
    async inputNoMobilePhoneIntoMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        const noMobilePhone = this._noMobileNumber;
        Logger.info("No mobile phone (edit account page): ", noMobilePhone);
        await mobilePhoneInputField.sendKeys(noMobilePhone);
    }

    //invalid edited user register data input methods - too short singular input
    async inputTooShortEditedFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        const tooShortEditedFullName = this._tooShortEditedFullName;
        Logger.info("Too short edited full name: ", tooShortEditedFullName);
        await fullNameInputField.sendKeys(tooShortEditedFullName);
    }
    async inputTooShortEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const tooShortEditedEmail = this._tooShortEditedEmail;
        Logger.info("Too short edited email: ", tooShortEditedEmail);
        await emailInputField.sendKeys(tooShortEditedEmail);
    }
    async inputTooShortAddressIntoAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        const tooShortAddress = this._tooShortAddress;
        Logger.info("Too short generated address (edit account page): ", tooShortAddress);
        await addressInputField.sendKeys(tooShortAddress);
    }
    async inputTooShortMobilePhoneIntoMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        const tooShortMobilePhone = this._tooShortMobileNumber;
        Logger.info("Too short mobile phone (edit account page): ", tooShortMobilePhone);
        await mobilePhoneInputField.sendKeys(tooShortMobilePhone);
    }

    //invalid edited user register data input methods - too long singular input
    async inputTooLongEditedFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        const tooLongEditedFullName = this._tooLongEditedFullName;
        Logger.info("Too long edited full name: ", tooLongEditedFullName);
        await fullNameInputField.sendKeys(tooLongEditedFullName);
    }
    async inputTooLongEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const tooLongEditedEmail = this._tooLongEditedEmail;
        Logger.info("Too long edited email: ", tooLongEditedEmail);
        await emailInputField.sendKeys(tooLongEditedEmail);
    }
    async inputTooLongAddressIntoAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        const tooLongAddress = this._tooLongAddress;
        Logger.info("Too long generated address (edit account page): ", tooLongAddress);
        await addressInputField.sendKeys(tooLongAddress);
    }
    async inputTooLongMobilePhoneIntoMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        const tooLongMobilePhone = this._tooLongMobileNumber;
        Logger.info("Too long mobile phone (edit account page): ", tooLongMobilePhone);
        await mobilePhoneInputField.sendKeys(tooLongMobilePhone);
    }

    //invalid edited user register data input methods - invalid singular input format
    async inputInvalidEditedFullNameFormatIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        const invalidEditedFullNameFormat = this._invalidEditedFullNameFormat;
        Logger.info("Invalid edited full name format: ", invalidEditedFullNameFormat);
        await fullNameInputField.sendKeys(invalidEditedFullNameFormat);
    }
    async inputInvalidEditedEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const invalidEditedEmailFormat = this._invalidEditedEmailFormat;
        Logger.info("Invalid edited email format: ", invalidEditedEmailFormat);
        await emailInputField.sendKeys(invalidEditedEmailFormat);
    }
    async inputExistingEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const existingEditedEmail = this._existingEditedEmail;
        Logger.info("Existing edited email: ", existingEditedEmail);
        await emailInputField.sendKeys(existingEditedEmail);
    }
    async inputInvalidAddressFormatIntoAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        const invalidAddressFormat = this._invalidAddressFormat;
        Logger.info("Invalid generated address format (edit account page): ", invalidAddressFormat);
        await addressInputField.sendKeys(invalidAddressFormat);
    }
    async inputInvalidMobilePhoneFormatIntoMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        const invalidMobilePhoneFormat = this._invalidMobileNumberFormat;
        Logger.info("Invalid mobile phone format (edit account page): ", invalidMobilePhoneFormat);
        await mobilePhoneInputField.sendKeys(invalidMobilePhoneFormat);
    }

}
module.exports = EditAccountPageInvalidSingularInput;