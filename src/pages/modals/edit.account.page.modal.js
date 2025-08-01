"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");
const { RegisterPage } = require("../register.page.js");
const Logger = require("../utilities/logger");

class EditAccountPageModal extends BasePage{

    constructor(driver) {
        super(driver);

        //popup modal elements
        this._editAccountPageModalTitle = By.xpath("//div[@class='text-center padding-l']/h4");
        this._editAccountPageModalText = By.xpath("//div[@class='text-center padding-l']/p");
        this._editAccountPageModalPasswordInputField = By.xpath("//div[@class='text-center padding-l']/input");
        this._editAccountPageModalCloseButton = By.xpath("//div[@aria-label='Product Modal']/button");
        this._editAccountPageModalConfirmButton = By.xpath("//div[@class='d-flex-center']/button");

        const registerPage = new RegisterPage(this.driver);

        this._validPassword = registerPage.getPassword();

    }

    //edit account page modal text element getters
    async getEditAccountPageModalTitle(){
        const editAccountPageModalTitle = await this.driver.findElement(this._editAccountPageModalTitle);
        return await editAccountPageModalTitle.getText();
    }
    async getEditAccountPageModalText(){
        const editAccountPageModalText = await this.driver.findElement(this._editAccountPageModalText);
        return await editAccountPageModalText.getText();
    }

    //input password into password input field method
    async inputPasswordIntoModalPasswordInputField(){
        const modalPasswordInputField = await this.driver.findElement(this._editAccountPageModalPasswordInputField);
        const password = this._validPassword;
        Logger.info("Valid user password (edit account page password modal): ", password);
        await modalPasswordInputField.sendKeys(password);
    }

    //click "Confirm" button method
    async clickConfirmButton(){
        const confirmButton = await this.driver.findElement(this._editAccountPageModalConfirmButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: confirmButton }).click().perform();
    }

    //edit account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isEditAccountPageModalWebElementDisplayed(){
        const elementsToCheck = [
            this._editAccountPageModalTitle,
            this._editAccountPageModalCloseButton,
            this._editAccountPageModalText,
            this._editAccountPageModalPasswordInputField,
            this._editAccountPageModalConfirmButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = EditAccountPageModal;