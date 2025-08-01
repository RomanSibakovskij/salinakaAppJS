"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../base.page.js");

const Logger = require("../logger.js");

class LoginPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._loginPageEmailInputField = By.xpath("//input[@id='email']");
        this._loginPagePasswordInputField = By.xpath("//input[@id='password']");

        //invalid user login input data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";

        //invalid user login input data - invalid singular input
        this._invalidLoginEmail = "fdfsfdsf@fakemail.com";
        this._invalidLoginEmailFormat = "asadsadfakemail.com";
        this._invalidLoginPassword = "#$#%$#ssadFg21"

    }

    //invalid login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No login email: ", noLoginEmail);
        await emailInputField.sendKeys(noLoginEmail);
    }
    async inputNoLoginPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginPagePasswordInputField);
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No login password: ", noLoginPassword);
        await passwordInputField.sendKeys(noLoginPassword);
    }

    //invalid login data input methods - invalid singular input
    async inputInvalidLoginEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const invalidLoginEmail = this._invalidLoginEmail;
        Logger.info("Invalid login email: ", invalidLoginEmail);
        await emailInputField.sendKeys(invalidLoginEmail);
    }
    async inputInvalidLoginEmailFormatIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const invalidLoginEmailFormat = this._invalidLoginEmailFormat;
        Logger.info("Invalid login email format: ", invalidLoginEmailFormat);
        await emailInputField.sendKeys(invalidLoginEmailFormat);
    }
    async inputInvalidLoginPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginPagePasswordInputField);
        const invalidLoginPassword = this._invalidLoginPassword;
        Logger.info("Invalid login password: ", invalidLoginPassword);
        await passwordInputField.sendKeys(invalidLoginPassword);
    }

}
module.exports = LoginPageInvalidSingularInput;