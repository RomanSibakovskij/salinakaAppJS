"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");

const TestDataGenerator = require("../pages/utilities/test.data.generator.js");

class RegisterPage extends BasePage{

    constructor(driver) {
        super(driver);

        //register page web elements
        //register form section
        this._registerPageTitle = By.xpath("//div[@class='auth-main']/h3");
        this._registerPageFullNameSubtext = By.xpath("//label[@for='fullname']");
        this._registerPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._registerPageEmailSubtext = By.xpath("//label[@for='email']");
        this._registerPageEmailInputField = By.xpath("//input[@id='email']");
        this._registerPagePasswordSubtext = By.xpath("//label[@for='password']");
        this._registerPagePasswordInputField = By.xpath("//input[@id='password']");
        this._registerPageSignUpButton = By.xpath("//button[@class='button auth-button']");
        //separator element
        this._registerPageSeparatorText = By.xpath("//div[@class='auth-divider']/h6");
        //other sign up buttons section
        this._registerPageSignUpByFacebookButton = By.xpath("//div[@class='auth-provider']/button[1]");
        this._registerPageSignUpByGoogleButton = By.xpath("//div[@class='auth-provider']/button[2]");
        this._registerPageSignUpByGithubButton = By.xpath("//div[@class='auth-provider']/button[3]");
        //lower section
        this._registerPageSignInOfferSubtext = By.xpath("//div[@class='auth-message']/span");
        this._registerPageSignInButton = By.xpath("//div[@class='auth-message']/button");
        //singular input error message elements
        this._regPageSingularInputErrorMessage = By.xpath("//span[@class= 'label-input label-error']");
        this._regPageSingularInputErrorMessageBlock = By.xpath("//h5[@class= 'text-center toast-error']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid register input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._fullName = firstName + " " + lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(8);
        this._password = testDataGenerator.generateRandomPassword();

    }

    //valid user register data input methods
    async inputFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._registerPageFullNameInputField);
        const fullName = this._fullName;
        Logger.info("Valid user full name: ", fullName);
        await fullNameInputField.sendKeys(fullName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const email = this._email;
        Logger.info("Valid user email: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }

    //click "Sign Up" button method
    async clickRegisterSignUpButton(){
        const registerSignUpButton = await this.driver.findElement(this._registerPageSignUpButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: registerSignUpButton }).click().perform();
    }

    //private user data getters
    async getFirstName(){return this._firstName;}
    async getFullName(){return this._fullName;}
    async getEmail(){return this._email;}
    async getPassword(){return this._password;}

    //register page text element getters
    //register input form
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }
    async getRegisterPageFullNameSubtext(){
        const registerPageFullNameSubtext = await this.driver.findElement(this._registerPageFullNameSubtext);
        return await registerPageFullNameSubtext.getText();
    }
    async getRegisterPageEmailSubtext(){
        const registerPageEmailSubtext = await this.driver.findElement(this._registerPageEmailSubtext);
        return await registerPageEmailSubtext.getText();
    }
    async getRegisterPagePasswordSubtext(){
        const registerPagePasswordSubtext = await this.driver.findElement(this._registerPagePasswordSubtext);
        return await registerPagePasswordSubtext.getText();
    }

    //separator element
    async getRegisterPageSeparatorText(){
        const registerPageSeparatorText = await this.driver.findElement(this._registerPageSeparatorText);
        return await registerPageSeparatorText.getText();
    }

    //lower section
    async getRegisterPageSignInOfferSubtext(){
        const registerPageSignInOfferSubtext = await this.driver.findElement(this._registerPageSignInOfferSubtext);
        return await registerPageSignInOfferSubtext.getText();
    }

    //register page singular input error message getters
    async getRegisterPageSingularInputErrorMsg(){
        const registerPageSingularInputErrorMsg = await this.driver.findElement(this._regPageSingularInputErrorMessage);
        return await registerPageSingularInputErrorMsg.getText();
    }
    async getRegisterPageSingularInputErrorBlockMsg(){
        const registerPageSingularInputErrorBlockMsg = await this.driver.findElement(this._regPageSingularInputErrorMessageBlock);
        return await registerPageSingularInputErrorBlockMsg.getText();
    }

    //register page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageTitle,
            this._registerPageFullNameSubtext,
            this._registerPageFullNameInputField,
            this._registerPageEmailSubtext,
            this._registerPageEmailInputField,
            this._registerPagePasswordSubtext,
            this._registerPagePasswordInputField,
            this._registerPageSignUpButton,
            this._registerPageSeparatorText,
            this._registerPageSignUpByFacebookButton,
            this._registerPageSignUpByGoogleButton,
            this._registerPageSignUpByGithubButton,
            this._registerPageSignInOfferSubtext,
            this._registerPageSignInButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterPage }