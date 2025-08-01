"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const { RegisterPage } = require("../pages/register.page.js");
const { EditAccountPage } = require("../pages/edit.account.page.js");

const Logger = require("./utilities/logger.js");

class LoginPage extends BasePage{

    constructor(driver) {
        super(driver);

        //login page web elements
        //register form section
        this._loginPageTitle = By.xpath("//div[@class='auth-main']/h3");
        this._loginPageEmailSubtext = By.xpath("//label[@for='email']");
        this._loginPageEmailInputField = By.xpath("//input[@id='email']");
        this._loginPagePasswordSubtext = By.xpath("//label[@for='password']");
        this._loginPagePasswordInputField = By.xpath("//input[@id='password']");
        this._loginPageForgotPasswordLink = By.xpath("//div[@class='auth-field auth-action']/a");
        this._loginPageSignInButton = By.xpath("//button[@class='button auth-button']");
        //separator element
        this._loginPageSeparatorText = By.xpath("//div[@class='auth-divider']/h6");
        //other sign up buttons section
        this._loginPageSignInByFacebookButton = By.xpath("//div[@class='auth-provider']/button[1]");
        this._loginPageSignInByGoogleButton = By.xpath("//div[@class='auth-provider']/button[2]");
        this._loginPageSignInByGithubButton = By.xpath("//div[@class='auth-provider']/button[3]");
        //lower section
        this._loginPageSignUpOfferSubtext = By.xpath("//div[@class='auth-message']/span");
        this._loginPageSignUpButton = By.xpath("//div[@class='auth-message']/button");
        //singular input error elements
        this._loginPageSingularInputErrorMessage = By.xpath("//span[@class= 'label-input label-error']");
        this._loginPageSingularInputErrorMessageBlock = By.xpath("//h5[@class= 'text-center toast-error']");

        const registerPage = new RegisterPage(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);

        //valid user login input data
        this._validLoginEmail = registerPage.getEmail();
        this._validLoginPassword = registerPage.getPassword();

        //valid user edited login input data
        this._validEditedLoginEmail = editAccountPage.getEditedEmail();

    }

    //valid login data input methods
    async inputValidLoginEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const loginEmail = await this._validLoginEmail;
        Logger.info("Valid user login email: ", loginEmail);
        await emailInputField.sendKeys(loginEmail);
    }
    async inputValidLoginPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginPagePasswordInputField);
        const loginPassword = await this._validLoginPassword;
        Logger.info("Valid user login password: ", loginPassword);
        await passwordInputField.sendKeys(loginPassword);
    }

    //valid edited login data input methods
    async inputValidEditedLoginEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginPageEmailInputField);
        const editedLoginEmail = this._validEditedLoginEmail;
        Logger.info("Valid edited user login email: ", editedLoginEmail);
        await emailInputField.sendKeys(editedLoginEmail);
    }

    //click "Sign In" button method
    async clickSignInButton(){
        const loginButton = await this.driver.findElement(this._loginPageSignInButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: loginButton }).click().perform();
    }

    //login page text element getters
    //login input form
    async getLoginPageTitle(){
        const loginPageTitle = await this.driver.findElement(this._loginPageTitle);
        return await loginPageTitle.getText();
    }
    async getLoginPageEmailSubtext(){
        const loginPageEmailSubtext = await this.driver.findElement(this._loginPageEmailSubtext);
        return await loginPageEmailSubtext.getText();
    }
    async getLoginPagePasswordSubtext(){
        const loginPagePasswordSubtext = await this.driver.findElement(this._loginPagePasswordSubtext);
        return await loginPagePasswordSubtext.getText();
    }
    async getLoginPageForgotPasswordLinkText(){
        const loginPageForgotPasswordLinkText = await this.driver.findElement(this._loginPageForgotPasswordLink);
        return await loginPageForgotPasswordLinkText.getText();
    }
    async getLoginPageSeparatorText(){
        const loginPageSeparatorText = await this.driver.findElement(this._loginPageSeparatorText);
        return await loginPageSeparatorText.getText();
    }
    async getLoginPageSignUpOfferSubtext(){
        const loginPageSignUpOfferSubtext = await this.driver.findElement(this._loginPageSignUpOfferSubtext);
        return await loginPageSignUpOfferSubtext.getText();
    }

    //login page singular input error message getter
    async getLoginPageSingularInputErrorMsg(){
        const loginPageSingularInputErrorMsg = await this.driver.findElement(this._loginPageSingularInputErrorMessage);
        return await loginPageSingularInputErrorMsg.getText();
    }
    async getLoginPageSingularInputErrorBlockMsg(){
        const loginPageSingularInputErrorBlockMsg = await this.driver.findElement(this._loginPageSingularInputErrorMessageBlock);
        return await loginPageSingularInputErrorBlockMsg.getText();
    }

    //login page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isLoginPageWebElementDisplayed(){
        const elementsToCheck = [
            this._loginPageTitle,
            this._loginPageEmailSubtext,
            this._loginPageEmailInputField,
            this._loginPagePasswordSubtext,
            this._loginPagePasswordInputField,
            this._loginPageForgotPasswordLink,
            this._loginPageSignInButton,
            this._loginPageSeparatorText,
            this._loginPageSignInByFacebookButton,
            this._loginPageSignInByGoogleButton,
            this._loginPageSignInByGithubButton,
            this._loginPageSignUpOfferSubtext,
            this._loginPageSignUpButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { LoginPage };