"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

const Logger = require("../utilities/logger.js");

const TestDataGenerator = require("../utilities/test.data.generator.js");

class RegisterPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._registerPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._registerPageEmailInputField = By.xpath("//input[@id='email']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='password']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid singular input - no singular input
        this._noFullName = "";
        this._noEmail = "";
        this._noPassword = "";

        //invalid singular input - too short singular input
        this._tooShortFullName = "F G"; //3 chars
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortPassword = "Rf$#@3S"; //7 chars

        //invalid singular input - too long singular input
        this._tooLongFullName = "Fhfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyfdsfgdfsdffdgfdhgdvcxvcfghfgjjfggfdfgddgfd Jhfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyfdsfgdfsdffdgfdhgdvcxvcfghfgjjfggfdfgddgfd"; //201 chars (first and last name (with space separating them))
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain
        this._tooLongPassword = "Rfddsgdsfs22435435@#$@$%^$%#^$#$#fdfdsfdsfsdf$#$%$%^$#%#sdfDFdfsdfcxcvxcvcv"; //75 chars

        //invalid singular input - invalid singular input format
        this._invalidFullNameFormat = "@#$@$^%%^&"; //special symbols only
        this._invalidEmailFormat = "sdsfsfakemail.com"; //missing '@'
        this._existingEmail = "m0@example.com"; //used beforehand in manual testing

    }

    //invalid user register data input methods - no singular input
    async inputNoFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._registerPageFullNameInputField);
        const noFullName = this._noFullName;
        Logger.info("No full name: ", noFullName);
        await fullNameInputField.sendKeys(noFullName);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const noEmail = this._noEmail;
        Logger.info("No email: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const noPassword = this._noPassword;
        Logger.info("No password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }

    //invalid user register data input methods - too short singular input
    async inputTooShortFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._registerPageFullNameInputField);
        const tooShortFullName = this._tooShortFullName;
        Logger.info("Too short user full name: ", tooShortFullName);
        await fullNameInputField.sendKeys(tooShortFullName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooShortEmail = this._tooShortEmail;
        Logger.info("Too short user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooShortPassword = this._tooShortPassword;
        Logger.info("Too short user password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }

    //invalid user register data input methods - too long singular input
    async inputTooLongFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._registerPageFullNameInputField);
        const tooLongFullName = this._tooLongFullName;
        Logger.info("Too long user full name: ", tooLongFullName);
        await fullNameInputField.sendKeys(tooLongFullName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooLongEmail = this._tooLongEmail;
        Logger.info("Too long user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooLongPassword = this._tooLongPassword;
        Logger.info("Too long user password: ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }

    //invalid user register data input methods - invalid singular input
    async inputInvalidFullNameFormatIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._registerPageFullNameInputField);
        const invalidFullNameFormat = this._invalidFullNameFormat;
        Logger.info("Invalid user full name format: ", invalidFullNameFormat);
        await fullNameInputField.sendKeys(invalidFullNameFormat);
    }
    async inputInvalidEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const invalidEmailFormat = this._invalidEmailFormat;
        Logger.info("Invalid user email format: ", invalidEmailFormat);
        await emailInputField.sendKeys(invalidEmailFormat);
    }
    async inputExistingEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const existingEmail = this._existingEmail;
        Logger.info("Existing user email: ", existingEmail);
        await emailInputField.sendKeys(existingEmail);
    }

}
module.exports = RegisterPageInvalidSingularInput;