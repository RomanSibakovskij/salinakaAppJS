"use strict"

const {By, Key} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");

const TestDataGenerator = require("../pages/utilities/test.data.generator.js");

class EditAccountPage extends BasePage{

    constructor(driver) {
        super(driver);

        //edit account page web elements
        this._editAccountPageTitle = By.xpath("//div[@class='edit-user']/h3");
        this._editAccountPageProfileCoverImg = By.xpath("//div[@class='user-profile-banner-wrapper']/img");
        this._editAccountPageUpdateProfileCoverImgButton = By.xpath("//div[@class='user-profile-banner-wrapper']//span[@role='img']");
        this._editAccountPageProfileImg = By.xpath("//div[@class='user-profile-avatar-wrapper']/img");
        this._editAccountPageUpdateProfileImgButton = By.xpath("//div[@class='user-profile-avatar-wrapper']//span[@role='img']");
        //input form elements
        this._editAccountPageFullNameSubtext = By.xpath("//label[@for='fullname']");
        this._editAccountPageFullNameInputField = By.xpath("//input[@id='fullname']");
        this._editAccountPageEmailSubtext = By.xpath("//label[@for='email']");
        this._editAccountPageEmailInputField = By.xpath("//input[@id='email']");
        this._editAccountPageAddressSubtext = By.xpath("//label[@for='address']");
        this._editAccountPageAddressInputField = By.xpath("//input[@id='address']");
        this._editAccountPageMobileNumberSubtext = By.xpath("//label[@for='mobile']");
        this._editAccountPageMobileUSCountryCodeOption = By.xpath("//ul[@class=' country-list']/li[@data-country-code='us']");
        this._editAccountPageMobileCountrycodeDropdownMenu = By.xpath("//div[@class=' flag-dropdown']");
        this._editAccountPageMobileNumberInputField = By.xpath("//input[@type='tel']");
        //button elements
        this._editAccountPageBackToProfileButton = By.xpath("//div[@class='edit-user-action']/button[1]");
        this._editAccountPageUpdateProfileButton = By.xpath("//div[@class='edit-user-action']/button[2]");
        //singular input error elements
        this._editAccountPageSingularInputErrorMessage = By.xpath("//span[@class= 'label-input label-error']");
        this._editAccountPageSingularInputErrorMessageBlock = By.xpath("//h5[@class= 'text-center toast-error']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid updated user input data
        const { editedFirstName, editedLastName } = testDataGenerator.getRandomEditedName();
        this._editedFirstName = editedFirstName;
        this._editedFullName = editedFirstName + " " + editedLastName
        this._editedEmail = testDataGenerator.generateRandomEditedEmailAddress(8);
        this._address = testDataGenerator.generateRandomAddress(8);
        this._mobilePhone = testDataGenerator.generateRandomPhoneNumber();
    }

    //clear input field methods
    async clearFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        await new Promise(resolve => setTimeout(resolve, 900));
        await this.driver.executeScript("arguments[0].value = '';", fullNameInputField); //use this for React-build webpages
    }
    async clearEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await emailInputField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE); //use this for React-build webpages
    }
    async clearAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        await new Promise(resolve => setTimeout(resolve, 900));
        await this.driver.executeScript("arguments[0].value = '';", addressInputField); //use this for React-build webpages
    }
    async clearMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await mobilePhoneInputField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE); //use this for React-build webpages
    }

    //valid edited user register data input methods
    async inputEditedFullNameIntoFullNameInputField(){
        const fullNameInputField = await this.driver.findElement(this._editAccountPageFullNameInputField);
        const editedFullName = this._editedFullName;
        Logger.info("Valid user edited full name: ", editedFullName);
        await fullNameInputField.sendKeys(editedFullName);
    }
    async inputEditedEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._editAccountPageEmailInputField);
        const editedEmail = this._editedEmail;
        Logger.info("Valid user edited email: ", editedEmail);
        await emailInputField.sendKeys(editedEmail);
    }
    async inputAddressIntoAddressInputField(){
        const addressInputField = await this.driver.findElement(this._editAccountPageAddressInputField);
        const address = this._address;
        Logger.info("Valid user generated address (edit account page): ", address);
        await addressInputField.sendKeys(address);
    }
    async inputMobilePhoneIntoMobileInputField(){
        const mobilePhoneInputField = await this.driver.findElement(this._editAccountPageMobileNumberInputField);
        const mobilePhone = this._mobilePhone;
        Logger.info("Valid user mobile phone (edit account page): ", mobilePhone);
        await mobilePhoneInputField.sendKeys(mobilePhone);
    }

    //click mobile country code dropdown menu method
    async clickMobileCountryDropdownMenu(){
        const mobileCountryDropdownMenu = await this.driver.findElement(this._editAccountPageMobileCountrycodeDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: mobileCountryDropdownMenu }).click().perform();
    }

    //select "United States" mobile country code option method
    async selectUSMobileCountryOption(){
        const usMobileCountryOption = await this.driver.findElement(this._editAccountPageMobileUSCountryCodeOption);
        usMobileCountryOption.click();
    }

    //click "Update Profile" button method
    async clickUpdateProfileButton(){
        const updateProfileButton = await this.driver.findElement(this._editAccountPageUpdateProfileButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: updateProfileButton }).click().perform();
    }

    //edit account page text element getters
    async getEditAccountPageTitle(){
        const editAccountPageTitle = await this.driver.findElement(this._editAccountPageTitle);
        return await editAccountPageTitle.getText();
    }
    async getEditAccountPageFullNameSubtext(){
        const editAccountPageFullNameSubtext = await this.driver.findElement(this._editAccountPageFullNameSubtext);
        return await editAccountPageFullNameSubtext.getText();
    }
    async getEditAccountPageEmailSubtext(){
        const editAccountPageEmailSubtext = await this.driver.findElement(this._editAccountPageEmailSubtext);
        return await editAccountPageEmailSubtext.getText();
    }
    async getEditAccountPageAddressSubtext(){
        const editAccountPageAddressSubtext = await this.driver.findElement(this._editAccountPageAddressSubtext);
        return await editAccountPageAddressSubtext.getText();
    }
    async getEditAccountPageMobileSubtext(){
        const editAccountPageMobileSubtext = await this.driver.findElement(this._editAccountPageMobileNumberSubtext);
        return await editAccountPageMobileSubtext.getText();
    }

    //private user data getters
    async getEditedFirstName(){return this._editedFirstName;}
    async getEditedEmail(){return this._editedEmail;}

    //edit account page singular input error message getter
    async getEditAccountPageSingularInputErrorMsg(){
        const editAccountPageSingularInputErrorMsg = await this.driver.findElement(this._editAccountPageSingularInputErrorMessage);
        return await editAccountPageSingularInputErrorMsg.getText();
    }

    //edit account page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isEditAccountPageWebElementDisplayed(){
        const elementsToCheck = [
            this._editAccountPageTitle,
            this._editAccountPageProfileCoverImg,
            this._editAccountPageUpdateProfileCoverImgButton,
            this._editAccountPageProfileImg,
            this._editAccountPageUpdateProfileImgButton,
            this._editAccountPageFullNameSubtext,
            this._editAccountPageFullNameInputField,
            this._editAccountPageEmailSubtext,
            this._editAccountPageEmailInputField,
            this._editAccountPageAddressSubtext,
            this._editAccountPageAddressInputField,
            this._editAccountPageMobileNumberSubtext,
            this._editAccountPageMobileCountrycodeDropdownMenu,
            this._editAccountPageMobileNumberInputField,
            this._editAccountPageBackToProfileButton,
            this._editAccountPageUpdateProfileButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { EditAccountPage }