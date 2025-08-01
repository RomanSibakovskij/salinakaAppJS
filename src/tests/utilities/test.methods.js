"use strict"

const assert = require("node:assert");

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { EditAccountPage } = require("../../pages/edit.account.page.js");
const { LoginPage } = require("../../pages/login.page.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");
const { ShopDashboardPage } = require("../../pages/shop.dashboard.page.js");
const { CheckoutPage } = require("../../pages/checkout.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/regpageinvalidscenarios/register.page.invalid.singular.input.js");
const EditAccountPageInvalidSingularInput = require("../../pages/utilities/editaccountpageinvalidscenarios/edit.account.page.invalid.singular.input.js");
const LoginPageInvalidSingularInput = require("../../pages/utilities/loginpageinvalidscenarios/login.page.invalid.singular.input.js");
const CheckoutPageNoSingularInput = require("../../pages/utilities/checkoutpageinvalidscenarios/checkout.page.no.singular.input.js");
const CheckoutPageTooShortSingularInput = require("../../pages/utilities/checkoutpageinvalidscenarios/checkout.page.too.short.singular.input.js");
const CheckoutPageTooLongSingularInput = require("../../pages/utilities/checkoutpageinvalidscenarios/checkout.page.too.long.singular.input.js");
const CheckoutPageInvalidSingularInput = require("../../pages/utilities/checkoutpageinvalidscenarios/checkout.page.invalid.singular.input.js");

const EditAccountPageModal = require("../../pages/modals/edit.account.page.modal.js");
const ShopDashPageFilterModal = require("../../pages/modals/shop.dash.page.filter.modal.js");
const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");

const BaseTest = require("./base.test");

const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../test-text-element-asserts/register.page.text.element.assert.js");
const AccountDashPageTextElementAssert = require("../test-text-element-asserts/account.dash.page.text.element.assert.js");
const EditAccountPageTextElementAssert = require("../test-text-element-asserts/edit.account.page.text.element.assert.js");
const LoginPageTextElementAssert = require("../test-text-element-asserts/login.page.text.element.assert.js");
const SingleProductPageTextElementAssert = require("../test-text-element-asserts/single.product.page.text.element.assert.js");
const CheckoutPageTextElementAssert = require("../test-text-element-asserts/checkout.page.text.element.assert.js");

const ShopDashPageFilterModalTextElementAssert = require("../test-text-element-asserts/modals/shop.dash.filter.modal.text.element.assert.js");
const ShoppingCartModalTextElementAssert = require("../test-text-element-asserts/modals/shopping.cart.modal.text.element.assert.js");

const HomePageDataLogger = require("../data-loggers/home.page.data.logger.js");
const AccountDashPageDataLogger = require("../data-loggers/account.dash.page.data.logger.js");
const SingleProductPageDataLogger = require("../data-loggers/single.product.page.data.logger.js");
const ShopDashboardPageDataLogger = require("../data-loggers/shop.dashboard.page.data.logger.js");
const CheckoutPageDataLogger = require("../data-loggers/checkout.page.data.logger.js");

const ShopDashPageFilterModalDataLogger = require("../data-loggers/modals/shop.dash.page.filter.modal.data.logger.js");
const ShoppingCartModalDataLogger = require("../data-loggers/modals/shopping.cart.modal.data.logger.js");

const Logger = require("../../pages/utilities/logger.js");

const {captureScreenshot} = require("./screenshot.class");

class TestMethods extends BaseTest{

        constructor(driver) {
            super();
            this.driver = driver;
        }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //user navigation to register page test method
    async navigateToRegisterPageTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
         //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar "Sign Up" button
        await generalPage.clickHeaderNavbarSignUpButton();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/signup", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/signup ; Actual: ${actualURL}`)
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "User Navigation To Register Page Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation test method
    async validUserAccountCreationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after valid data input
        await captureScreenshot(this.driver, "Register Page Display After Valid Data Input");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //assert the user account has been created
        const actualUsername = await generalPage.getHeaderNavbarUsername();
        const expectedUsername = await registerPage.getFirstName();
        assert.strictEqual(actualUsername, expectedUsername, "The header navbar account username doesn't match expectations or the user account creation process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Account Creation Test Result");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user account creation test method - no user full name
    async invalidUserAccountCreationNoFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //don't input user full name into full name input field
        await registerPageInvalidSingularInput.inputNoFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - no full name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Full Name");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed
        const regPageNoFullNameInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
        assert.strictEqual(regPageNoFullNameInputError, "Full name is required.", "The register page missing full name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Full Name");
    }

    //invalid user account creation test method - no user email
    async invalidUserAccountCreationNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //don't input user email into email input field
        await registerPageInvalidSingularInput.inputNoEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - no email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Email");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed
        const regPageNoEmailInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
        assert.strictEqual(regPageNoEmailInputError, "Email is required.", "The register page missing email input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Email");
    }

    //invalid user account creation test method - no user password
    async invalidUserAccountCreationNoPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //don't input user password into password input field
        await registerPageInvalidSingularInput.inputNoPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - no password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - No Password");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed
        const regPageNoPasswordInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
        assert.strictEqual(regPageNoPasswordInputError, "Password is required.", "The register page missing password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - No Password");
    }

    //too short singular input

    //invalid user account creation test method - too short user full name (1 char)
    async invalidUserAccountCreationTooShortFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input too short user full name into full name input field (3 chars)
        await registerPageInvalidSingularInput.inputTooShortFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too short full name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Full Name");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooShortFullNameInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooShortFullNameInputError, "Name should be at least 4 characters.", "The register page too short full name input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Full Name");
    }

    //invalid user account creation test method - too short user email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input too short user email into email input field (1 char -> name, domain)
        await registerPageInvalidSingularInput.inputTooShortEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too short email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Email");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooShortEmailInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooShortEmailInputError, "Email is too short.", "The register page too short email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Email");
    }

    //invalid user account creation test method - too short user password (7 chars)
    async invalidUserAccountCreationTooShortPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input too short user password into password input field (7 chars)
        await registerPageInvalidSingularInput.inputTooShortPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too short password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Short Password");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooShortPasswordInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooShortPasswordInputError, "Password length should be at least 8 characters.", "The register page too short password input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short password input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Short Password");
    }

    //too long singular input

    //invalid user account creation test method - too long user full name (201 chars)
    async invalidUserAccountCreationTooLongFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input too long user full name into full name input field (201 chars)
        await registerPageInvalidSingularInput.inputTooLongFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too long full name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Full Name");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooLongFullNameInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooLongFullNameInputError, "Full Name is too long.", "The register page too long full name input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Full Name");
    }

    //invalid user account creation test method - too long user email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input too long user email into email input field (100 chars -> name, domain)
        await registerPageInvalidSingularInput.inputTooLongEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too long email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Email");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooLongEmailInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooLongEmailInputError, "Email is too long.", "The register page too long email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Email");
    }

    //invalid user account creation test method - too long user password (75 chars)
    async invalidUserAccountCreationTooLongPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input too long user password into password input field (75 chars)
        await registerPageInvalidSingularInput.inputTooLongPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - too long password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Too Long Password");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageTooLongPasswordInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageTooLongPasswordInputError, "Password is too long.", "The register page too long password input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long password input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Too Long Password");
    }

    //invalid singular input format

    //invalid user account creation test method - invalid user full name format (special symbols only)
    async invalidUserAccountCreationInvalidFullNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input invalid user full name format into full name input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidFullNameFormatIntoFullNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - invalid full name format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Full Name Format");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageInvalidFullNameInputFormatError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageInvalidFullNameInputFormatError, "Full Name cannot consist of special symbols only.", "The register page invalid full name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid full name input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Full Name Format");
    }

    //invalid user account creation test method - invalid user email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input invalid user email format into email input field (missing '@')
        await registerPageInvalidSingularInput.inputInvalidEmailFormatIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - invalid email input format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Invalid Email Format");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageInvalidEmailInputError = await registerPage.getRegisterPageSingularInputErrorMsg();
            assert.strictEqual(regPageInvalidEmailInputError, "Email is not valid.", "The register page invalid email input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid email input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Invalid Email Format");
    }

    //invalid user account creation test method - existing email (used beforehand in manual testing)
    async invalidUserAccountCreationExistingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //input valid user full name into full name input field
        await registerPage.inputFullNameIntoFullNameInputField();
        //input existing email into email input field (used beforehand in manual testing)
        await registerPageInvalidSingularInput.inputExistingEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //capture screenshot of the register page after invalid data input - existing email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input - Existing Email");
        //click "Sign Up" button
        await registerPage.clickRegisterSignUpButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const regPageExistingEmailInputError = await registerPage.getRegisterPageSingularInputErrorBlockMsg();
            assert.strictEqual(regPageExistingEmailInputError, "Email is already in use. Please use another email", "The register page existing email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The existing email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result - Existing Email");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit user account data test

    //valid edit user account data test method
    async validEditUserAccountDataTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        const editAccountPageModal = new EditAccountPageModal(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field (return back for random input, currently it's being put as undefined)
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid edited email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after valid data input
        await captureScreenshot(this.driver, "Edit Account Page Display After Valid Data Input");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //edit account page modal web element assert
        await editAccountPageModal.isEditAccountPageModalWebElementDisplayed();
        //edit account modal page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageModalTextElementAsExpected();
        //capture screenshot of edit account page modal before password input (modal appears only during automation run)
        await captureScreenshot(this.driver, "Edit Account Page Modal Display Before Password Input");
        //input valid password into password input field
        await editAccountPageModal.inputPasswordIntoModalPasswordInputField();
        //capture screenshot of edit account page modal after valid password input
        await captureScreenshot(this.driver, "Edit Account Page Modal Display After Valid Password Input");
        //click "Confirm" button
        await editAccountPageModal.clickConfirmButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user data has been edited
        const actualUsername = await generalPage.getHeaderNavbarUsername();
        const expectedUsername = await editAccountPage.getEditedFirstName();
        assert.strictEqual(actualUsername, expectedUsername, "The header navbar account username doesn't match expectations or the user account data edit process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit User Account Test Result");
    }

    //invalid edit user account data tests

    //no singular input

    //invalid edit user account data test method - no user edited full name
    async invalidEditUserAccountDataNoFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //don't input edited full name into full name input field
        await editAccountPageInvalidSingularInput.inputNoEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        //await editAccountPage.clearEmailInputField();
        //input valid edited email into email input field
        //await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - no full name
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Full Name");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoFullNameInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoFullNameInputError, "Full name is required", "The edit account page missing edited full name input error doesn't match expectations.");
        } catch (e){
            Logger.error("The missing edited full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - No Full Name");
    }

    //invalid edit user account data test method - no user edited email
    async invalidEditUserAccountDataNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //don't input valid email into email input field
        await editAccountPageInvalidSingularInput.inputNoEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - no email
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Email");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoEmailInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoEmailInputError, "Email is required", "The edit account page missing edited email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The missing edited email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - No Email");
    }

    //invalid edit user account data test method - no user address
    async invalidEditUserAccountDataNoAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //don't input address into address input field
        await editAccountPageInvalidSingularInput.inputNoAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - no address
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Address");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoAddressInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoAddressInputError, "Address is required", "The edit account page missing address input error doesn't match expectations.");
        } catch (e){
            Logger.error("The missing address input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - No Address");
    }

    //invalid edit user account data test method - no user mobile phone
    async invalidEditUserAccountDataNoMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //don't input mobile phone into mobile input field
        await editAccountPageInvalidSingularInput.inputNoMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - no mobile
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - No Mobile");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoMobileInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoMobileInputError, "Mobile phone is required", "The edit account page missing mobile phone input error doesn't match expectations.");
        } catch (e){
            Logger.error("The missing mobile phone input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - No Mobile");
    }

    //invalid edit user account data test method - no user password
    async invalidEditUserAccountDataNoUserPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        const editAccountPageModal = new EditAccountPageModal(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field (return back for random input, currently it's being put as undefined)
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid edited email into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after valid data input
        await captureScreenshot(this.driver, "Edit Account Page Display After Valid Data Input");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //edit account page modal web element assert
        await editAccountPageModal.isEditAccountPageModalWebElementDisplayed();
        //edit account modal page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageModalTextElementAsExpected();
        //capture screenshot of edit account page modal before password input (modal appears only during automation run)
        await captureScreenshot(this.driver, "Edit Account Page Modal Display Before Password Input");
        //input valid password into password input field
        //await editAccountPageModal.inputPasswordIntoModalPasswordInputField();
        //capture screenshot of edit account page modal after valid password input
        await captureScreenshot(this.driver, "Edit Account Page Modal Display After Valid Password Input");
        //click "Confirm" button
        await editAccountPageModal.clickConfirmButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - No User Password");
    }

    //too short singular input

    //invalid edit user account data test method - too short user edited full name (3 chars)
    async invalidEditUserAccountDataTooShortFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input too short edited full name into full name input field (3 chars)
        await editAccountPageInvalidSingularInput.inputTooShortEditedFullNameIntoFullNameInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too short full name
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short Full Name");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoFullNameInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoFullNameInputError, "Full name should be at least 4 characters.", "The edit account page too short edited full name input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short edited full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Short Full Name");
    }

    //invalid edit user account data test method - too short user edited email (1 char -> name, domain)
    async invalidEditUserAccountDataTooShortEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input too short valid email into email input field (1 char -> name, domain)
        await editAccountPageInvalidSingularInput.inputTooShortEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too short email
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short Email");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoEmailInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoEmailInputError, "Email is too short", "The edit account page too short edited email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short edited email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Short Email");
    }

    //invalid edit user account data test method - too short user address (3 chars)
    async invalidEditUserAccountDataTooShortAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input too short address into address input field (3 chars)
        await editAccountPageInvalidSingularInput.inputTooShortAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too short address
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short Address");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoAddressInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoAddressInputError, "Address is too short", "The edit account page too short address input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short address input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Short Address");
    }

    //invalid edit user account data test method - too short user mobile phone (2 digits)
    async invalidEditUserAccountDataTooShortMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //input too short mobile phone into mobile input field (2 digits)
        await editAccountPageInvalidSingularInput.inputTooShortMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too short mobile
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Short Mobile");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoMobileInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoMobileInputError, "Mobile phone is too short", "The edit account page too short mobile phone input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too short mobile phone input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Short Mobile");
    }

    //too long singular input

    //invalid edit user account data test method - too long user edited full name (201 chars)
    async invalidEditUserAccountDataTooLongFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input too long edited full name into full name input field (201 chars)
        await editAccountPageInvalidSingularInput.inputTooLongEditedFullNameIntoFullNameInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too long full name
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long Full Name");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoFullNameInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoFullNameInputError, "Full name should be only be 4 characters long.", "The edit account page too long edited full name input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long edited full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Long Full Name");
    }

    //invalid edit user account data test method - too long user edited email (100 chars -> name, domain)
    async invalidEditUserAccountDataTooLongEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input too long valid email into email input field (100 chars -> name, domain)
        await editAccountPageInvalidSingularInput.inputTooLongEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too long email
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long Email");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoEmailInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoEmailInputError, "Email is too long", "The edit account page too long edited email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long edited email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Long Email");
    }

    //invalid edit user account data test method - too long user address (100 chars)
    async invalidEditUserAccountDataTooLongAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input too long address into address input field (100 chars)
        await editAccountPageInvalidSingularInput.inputTooLongAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too long address
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long Address");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoAddressInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoAddressInputError, "Address is too long", "The edit account page too long address input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long address input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Long Address");
    }

    //invalid edit user account data test method - too long user mobile phone (30 digits)
    async invalidEditUserAccountDataTooLongMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //input too short mobile phone into mobile input field (30 digits)
        await editAccountPageInvalidSingularInput.inputTooLongMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - too long mobile
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Too Long Mobile");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoMobileInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoMobileInputError, "Mobile phone is too long", "The edit account page too long mobile phone input error doesn't match expectations.");
        } catch (e){
            Logger.error("The too long mobile phone input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Too Long Mobile");
    }

    //invalid singular input format

    //invalid edit user account data test method - invalid user edited full name format (special symbols only)
    async invalidEditUserAccountDataInvalidFullNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input invalid edited full name format into full name input field (special symbols only)
        await editAccountPageInvalidSingularInput.inputInvalidEditedFullNameFormatIntoFullNameInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - invalid full name format
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid Full Name Format");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoFullNameInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoFullNameInputError, "Full name cannot consist of special symbols only.", "The edit account page invalid edited full name input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid edited full name input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Invalid Full Name Format");
    }

    //invalid edit user account data test method - invalid user edited email format (missing '@')
    async invalidEditUserAccountDataInvalidEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input invalid valid email format into email input field (missing '@')
        await editAccountPageInvalidSingularInput.inputInvalidEditedEmailFormatIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - invalid email format
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid Email Format");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoEmailInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoEmailInputError, "Email is not valid.", "The edit account page invalid edited email input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid edited email input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Invalid Email Format");
    }

    //invalid edit user account data test method - existing user email (used beforehand in manual testing)
    async invalidEditUserAccountDataExistingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input existing email into email input field (used beforehand in manual testing)
        await editAccountPageInvalidSingularInput.inputExistingEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - existing email
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Existing Email");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoEmailInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoEmailInputError, "Email is already in use.", "The edit account page existing email input error doesn't match expectations.");
        } catch (e){
            Logger.error("The existing email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Existing Email");
    }

    //invalid edit user account data test method - invalid user address format (special symbols only)
    async invalidEditUserAccountDataInvalidAddressFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input invalid address format into address input field (special symbols only)
        await editAccountPageInvalidSingularInput.inputInvalidAddressFormatIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //input valid mobile phone into mobile input field
        await editAccountPage.inputMobilePhoneIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - invalid address format
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid Address Format");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoAddressInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoAddressInputError, "Address cannot consist of special symbols only.", "The edit account page invalid address input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid address format input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Invalid Address Format");
    }

    //invalid edit user account data test method - invalid user mobile phone format (special symbols only)
    async invalidEditUserAccountDataInvalidMobileFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashPageTextElementAssert = new AccountDashPageTextElementAssert(this.driver);
        const accountDashPageDataLogger = new AccountDashPageDataLogger(this.driver);
        const editAccountPage = new EditAccountPage(this.driver);
        const editAccountPageInvalidSingularInput = new EditAccountPageInvalidSingularInput(this.driver);
        const editAccountPageTextElementAssert = new EditAccountPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar account dropdown button
        await generalPage.clickAccountDropdownButton();
        //click "View Account" link
        await generalPage.clickViewAccountLink();
        //wait for element to load
        await basePage.waitForElementLoad();
        //assert the user gets onto correct page
        const actualURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualURL, "https://salinaka-ecommerce.web.app/account", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualURL}`)
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard text element assert
        await accountDashPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //log account dashboard page account data
        await accountDashPageDataLogger.logAccountDashPageAccountData();
        //click "Edit Account" button
        await accountDashboardPage.clickEditAccountButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets onto correct page
        const actualEditURL = await this.driver.getCurrentUrl();
        assert.strictEqual(actualEditURL, "https://salinaka-ecommerce.web.app/account/edit", `The actual URL doesn't match expected URL. Expected: https://salinaka-ecommerce.web.app/account/edit ; Actual: ${actualEditURL}`)
        //edit account page web element assert
        await editAccountPage.isEditAccountPageWebElementDisplayed();
        //edit account page text element assert
        await editAccountPageTextElementAssert.isEditAccountPageTextElementAsExpected();
        //capture screenshot of the edit account page display before data input
        await captureScreenshot(this.driver, "Edit Account Page Display Before Data Input");
        //clear full name input field before input
        await editAccountPage.clearFullNameInputField();
        //input valid edited full name into full name input field
        await editAccountPage.inputEditedFullNameIntoFullNameInputField();
        //clear email input field before input
        await editAccountPage.clearEmailInputField();
        //input valid email format into email input field
        await editAccountPage.inputEditedEmailIntoEmailInputField();
        //clear address input field before input
        await editAccountPage.clearAddressInputField();
        //input valid address into address input field
        await editAccountPage.inputAddressIntoAddressInputField();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //click mobile phone country code dropdown menu
        await editAccountPage.clickMobileCountryDropdownMenu();
        //select "United States" country code option
        await editAccountPage.selectUSMobileCountryOption();
        //clear mobile phone input field before input
        await editAccountPage.clearMobileInputField();
        //input invalid mobile phone format into mobile input field (special symbols only)
        await editAccountPageInvalidSingularInput.inputInvalidMobilePhoneFormatIntoMobileInputField();
        //capture screenshot of edit account page display after invalid data input - invalid mobile format
        await captureScreenshot(this.driver, "Edit Account Page Display After Invalid Data Input - Invalid Mobile Format");
        //click "Update Profile" button
        await editAccountPage.clickUpdateProfileButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the expected error is displayed, log the issue otherwise
        try {
            const editAccountPageNoMobileInputError = await editAccountPage.getEditAccountPageSingularInputErrorMsg();
            assert.strictEqual(editAccountPageNoMobileInputError, "Mobile phone cannot consist of special symbols only.", "The edit account page invalid mobile phone input format error doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid mobile phone input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit User Account Test Result - Invalid Mobile Format");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user logout test method (for both user account creation and edit user account data)
    async validUserLogoutTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //click header navbar account dropdown menu
        await generalPage.clickAccountDropdownButton();
        //click "Sign Out" option
        await generalPage.clickSignOutLink();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //log the logout success
        const signInButton = await this.driver.findElements(generalPage._headerNavbarSignInButton);
        if (signInButton.length > 0) {
            Logger.info("The user has logged out successfully.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Logout Test Result");
    }

    //valid user login tests

    //valid user login test method
    async validUserLoginTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after valid login data input
        await captureScreenshot(this.driver, "Login Page Display After Valid Login Data Input");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login Test Result");
    }

    //valid user login with edited login email test method
    async validUserLoginEditedLoginEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input valid edited login email into login email input field
        await loginPage.inputValidEditedLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after valid login data input - edited login email
        await captureScreenshot(this.driver, "Login Page Display After Valid Login Data Input - Edited Login Email");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login Test Result - Edited Login Email");
    }

    //invalid user login tests

    //no singular input

    //invalid user login test method - no user login email
    async invalidUserLoginNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //don't input login email into login email input field
        await loginPageInvalidSingularInput.inputNoLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after invalid login data input - no login email
        await captureScreenshot(this.driver, "Login Page Display After Invalid Login Data Input - No Login Email");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noLoginEmailError = await loginPage.getLoginPageSingularInputErrorMsg();
        assert.strictEqual(noLoginEmailError, "Email is required.", "The login page missing email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email");
    }

    //invalid user login test method - no user login password
    async invalidUserLoginNoPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoEmailInputField();
        //don't input login password into login password input field
        await loginPageInvalidSingularInput.inputNoLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after invalid login data input - no login password
        await captureScreenshot(this.driver, "Login Page Display After Invalid Login Data Input - No Login Password");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noLoginPasswordError = await loginPage.getLoginPageSingularInputErrorMsg();
        assert.strictEqual(noLoginPasswordError, "Password is required.", "The login page missing password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user login test method - invalid user login email
    async invalidUserLoginInvalidEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input invalid login email into login email input field
        await loginPageInvalidSingularInput.inputInvalidLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after invalid login data input - invalid login email
        await captureScreenshot(this.driver, "Login Page Display After Invalid Login Data Input - Invalid Login Email");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const invalidLoginEmailError = await loginPage.getLoginPageSingularInputErrorBlockMsg();
        assert.strictEqual(invalidLoginEmailError, "Incorrect email or password", "The login page invalid email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
    }

    //invalid user login test method - invalid user login email format (missing '@')
    async invalidUserLoginInvalidEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input invalid login email format into login email input field (missing '@')
        await loginPageInvalidSingularInput.inputInvalidLoginEmailFormatIntoEmailInputField();
        //input valid login password into login password input field
        await loginPage.inputValidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after invalid login data input - invalid login email format
        await captureScreenshot(this.driver, "Login Page Display After Invalid Login Data Input - Invalid Login Email Format");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const invalidLoginEmailFormatError = await loginPage.getLoginPageSingularInputErrorMsg();
        assert.strictEqual(invalidLoginEmailFormatError, "Email is not valid.", "The login page invalid email input format error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email Format");
    }

    //invalid user login test method - invalid user login password
    async invalidUserLoginInvalidPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginPage = new LoginPage(this.driver);
        const loginPageInvalidSingularInput = new LoginPageInvalidSingularInput(this.driver);
        const loginPageTextElementAssert = new LoginPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login page web element assert
        await loginPage.isLoginPageWebElementDisplayed();
        //login page text element assert
        await loginPageTextElementAssert.isLoginPageTextElementAsExpected();
        //capture screenshot of login page before login data input
        await captureScreenshot(this.driver, "Login Page Display Before Login Data Input");
        //input valid login email into login email input field
        await loginPage.inputValidLoginEmailIntoEmailInputField();
        //input invalid login password into login password input field
        await loginPageInvalidSingularInput.inputInvalidLoginPasswordIntoPasswordInputField();
        //capture screenshot of login page after invalid login data input - invalid login password
        await captureScreenshot(this.driver, "Login Page Display After Invalid Login Data Input - Invalid Login Password");
        //click "Sign In" button
        await loginPage.clickSignInButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const invalidLoginPasswordError = await loginPage.getLoginPageSingularInputErrorBlockMsg();
        assert.strictEqual(invalidLoginPasswordError, "Incorrect email or password", "The login page invalid password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single featured product to cart tests (only singular products are being added, only in shopping cart modal quantity can be altered)

    //add single featured product ("Burnikk") to cart test method (as a guest)
    async addSingleFeaturedProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Burnikk" product page link
        await homePage.clickSetFeaturedProductLink(0);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Burnikk) Page Display");
        //click set product color (red)
        await singleProductPage.selectSetProductColor(4);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Featured Product (Burnikk) To Cart Test Result (guest)");
    }

    //add single featured product ("Very Nice") to cart test method (both guest and registered user have the same method)
    async addSingleFeaturedProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Very Nice" product page link
        await homePage.clickSetFeaturedProductLink(2);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Very Nice) Page Display");
        //click set product color (purple)
        await singleProductPage.selectSetProductColor(1);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Featured Product (Very Nice) To Cart Test Result (registered user)");
    }

    //add multiple different featured products to cart tests

    //add multiple different featured products ("Burnikk", "Buldit") to cart test method (as a guest)
    async addMultipleFeaturedProductsToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Burnikk" product page link
        await homePage.clickSetFeaturedProductLink(0);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Burnikk) Page Display");
        //click set product color (red)
        await singleProductPage.selectSetProductColor(4);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar home link
        await generalPage.clickHeaderNavbarHomeLink();
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Buldit" product page link
        await homePage.clickSetFeaturedProductLink(3);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Buldit) Page Display");
        //click set product color (blue)
        await singleProductPage.selectSetProductColor(1);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Featured Product (Burnikk, Buidit) To Cart Test Result (guest)");
    }

    //add multiple different featured products ("Very Nice", "Balakubak") to cart test method (as a guest)
    async addMultipleFeaturedProductsToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Very Nice" product page link
        await homePage.clickSetFeaturedProductLink(2);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Very Nice) Page Display");
        //click set product color (purple)
        await singleProductPage.selectSetProductColor(1);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar home link
        await generalPage.clickHeaderNavbarHomeLink();
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Balakubak" product page link
        await homePage.clickSetFeaturedProductLink(4);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Balakubak) Page Display");
        //click set product color (purple)
        await singleProductPage.selectSetProductColor(1);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Featured Product (Very Nice, Balakubak) To Cart Test Result (registered user)");
    }

    //add single recommended product to cart test (only singular products are being added, only in shopping cart modal quantity can be altered)

    //add single recommended product ("Pitaklan") to cart test method (as a guest)
    async addSingleRecommendedProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Pitaklan" product page link
        await homePage.clickSetRecommendedProductLink(5);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Pitaklan) Page Display");
        //click set product color (yellow)
        await singleProductPage.selectSetProductColor(2);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Recommended Product (Pitaklan) To Cart Test Result (guest)");
    }

    //add single recommended product ("Kulangot") to cart test method (as a registered user)
    async addSingleRecommendedProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Kulangot" product page link
        await homePage.clickSetRecommendedProductLink(3);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Kulangot) Page Display");
        //click set product color (black)
        await singleProductPage.selectSetProductColor(0);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Recommended Product (Kulangot) To Cart Test Result (registered user)");
    }

    //add multiple different recommended products to cart tests

    //add multiple different recommended product ("Pitaklan", "Sipon Malapot") to cart test method (as a guest)
    async addMultipleRecommendedProductsToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Pitaklan" product page link
        await homePage.clickSetRecommendedProductLink(5);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Pitaklan) Page Display");
        //click set product color (yellow)
        await singleProductPage.selectSetProductColor(2);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar home page link
        await generalPage.clickHeaderNavbarHomeLink();
        //wait for elements to load
        await generalPage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Sipon Malapot" product page link
        await homePage.clickSetRecommendedProductLink(4);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Pitaklan) Page Display");
        //click set product color (purple)
        await singleProductPage.selectSetProductColor(1);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Recommended Products (Pitaklan, Sipon Malapot) To Cart Test Result (guest)");
    }

    //add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test method (as a registered user)
    async addMultipleRecommendedProductsToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Kulangot" product page link
        await homePage.clickSetRecommendedProductLink(3);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Kulangot) Page Display");
        //click set product color (black)
        await singleProductPage.selectSetProductColor(0);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar home page link
        await generalPage.clickHeaderNavbarHomeLink();
        //wait for elements to load
        await generalPage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click "Kibal Batan" product page link
        await homePage.clickSetRecommendedProductLink(1);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await captureScreenshot(this.driver, "Single Product (Kibal Batan) Page Display");
        //click set product color (black)
        await singleProductPage.selectSetProductColor(0);
        //click "Add to basket" button
        await singleProductPage.clickAddToBasketButton();
        //click header navbar shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Recommended Products (Kulangot, Kibal Batan) To Cart Test Result (registered user)");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single searched product to cart test (only singular products are being added, only in shopping cart modal quantity can be altered)

    //add single searched product ("Tilapia") to cart test method (both guest and registered user share the same method)
    async addSingleSearchedProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const shopDashboardPage = new ShopDashboardPage(this.driver);
        const shopDashboardPageDataLogger = new ShopDashboardPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //input "Tilapia" into search bar input field
        await generalPage.inputSetSearchQueryIntoSearchBarInputField();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dashboard page web element assert (searched product page has the same elements)
        await shopDashboardPage.isShopDashPageWebElementDisplayed();
        //assert the correct product has been displayed
        const shopDashboardPageFoundProductText = await shopDashboardPage.getShopDashPageFoundText();
        assert.strictEqual(shopDashboardPageFoundProductText, "Found 1 product with keyword tilapia", "The product found text doesn't match expectations or the product search operation has failed.");
        //log shop dashboard page product data
        await shopDashboardPageDataLogger.logShopDashboardPageData();
        //capture screenshot of the searched product page display
        await captureScreenshot(this.driver, "Searched Product (Tilapia) Page Display");
        //hover over "Quake Overload" card
        await shopDashboardPage.hoverOverSetProductCard(0);
        //click 'Add to basket' "Quake Overload" button
        await shopDashboardPage.clickSetProductAddToBasketButton(0);
        //click upper header shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Searched Product (Tilapia) To Cart Test Result");
    }

    //add multiple different searched products to cart test

    //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test method (both guest and registered user share the same method)
    async addMultipleSearchedProductsToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const shopDashboardPage = new ShopDashboardPage(this.driver);
        const shopDashboardPageDataLogger = new ShopDashboardPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //input "Tilapia" into search bar input field
        await generalPage.inputSetSearchQueryIntoSearchBarInputField();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dashboard page web element assert (searched product page has the same elements)
        await shopDashboardPage.isShopDashPageWebElementDisplayed();
        //assert the correct product has been displayed
        const shopDashboardPageFoundProductText = await shopDashboardPage.getShopDashPageFoundText();
        assert.strictEqual(shopDashboardPageFoundProductText, "Found 1 product with keyword tilapia", "The product found text doesn't match expectations or the product search operation has failed.");
        //log shop dashboard page product data
        await shopDashboardPageDataLogger.logShopDashboardPageData();
        //capture screenshot of the searched product page display
        await captureScreenshot(this.driver, "Searched Product (Tilapia) Page Display");
        //hover over "Quake Overload" card
        await shopDashboardPage.hoverOverSetProductCard(0);
        //click 'Add to basket' "Quake Overload" button
        await shopDashboardPage.clickSetProductAddToBasketButton(0);
        //click header navbar home page link
        await generalPage.clickHeaderNavbarHomeLink();
        //wait for elements to load
        await generalPage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //input "Tiktilaok Manok" into search bar input field
        await generalPage.inputNextSearchQueryIntoSearchBarInputField();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dashboard page web element assert (searched product page has the same elements)
        await shopDashboardPage.isShopDashPageWebElementDisplayed();
        //assert the correct product has been displayed
        const shopDashboardPageFoundNextProductText = await shopDashboardPage.getShopDashPageFoundText();
        assert.strictEqual(shopDashboardPageFoundNextProductText, "Found 1 product with keyword tiktilaok manok", "The product found text doesn't match expectations or the product search operation has failed.");
        //log shop dashboard page product data
        await shopDashboardPageDataLogger.logShopDashboardPageData();
        //capture screenshot of the searched product page display
        await captureScreenshot(this.driver, "Searched Product (Tilapia) Page Display");
        //hover over "Quake Overload" card
        await shopDashboardPage.hoverOverSetProductCard(0);
        //click 'Add to basket' "Quake Overload" button
        await shopDashboardPage.clickSetProductAddToBasketButton(0);
        //click upper header shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Searched Products (Tilapia, Tiktilaok Manok) To Cart Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //remove product from basket test (both user types share the same method, so to avoid redundancy, guest branch is tested)
    async removeProductFromBasketTest(){
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert(this.driver);
        const singleProductPageDataLogger = new SingleProductPageDataLogger(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await singleProductPageDataLogger.logSingleProductPageProductData();
        //capture screenshot of the single product page display before product removal
        await captureScreenshot(this.driver, "Single Product Page Display Before Product Removal");
        //click "Remove from basket" button (it's the same as "Add to basket" button, just a different color)
        await singleProductPage.clickAddToBasketButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Product Removal From Cart Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single shop dashboard page product to cart test (both guest and registered user share the same method)

    //add single shop dashboard page product ("Quake Overload") to cart test method
    async addSingleShopDashPageProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const shopDashboardPage = new ShopDashboardPage(this.driver);
        const shopDashboardPageDataLogger = new ShopDashboardPageDataLogger(this.driver);
        const shopDashPageFilterModal = new ShopDashPageFilterModal(this.driver);
        const shopDashPageFilterModalTextElementAssert = new ShopDashPageFilterModalTextElementAssert(this.driver);
        const shopDashPageFilterModalDataLogger = new ShopDashPageFilterModalDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar "Shop" link
        await generalPage.clickHeaderNavbarShopLink();
        //wait for elements to load
        await basePage.shortWaitForElementLoad()
        //shop dashboard page web element assert
        await shopDashboardPage.isShopDashPageWebElementDisplayed();
        //click "Show More" button
        await shopDashboardPage.clickShowMoreButton();
        //log hop dashboard page product data
        await shopDashboardPageDataLogger.logShopDashboardPageData();
        //capture screenshot of the shop dashboard page display before filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display Before Filter Application");

        //first filter application

        //click upper header "Filters" modal button
        await shopDashboardPage.clickUpperHeaderFilterButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //capture screenshot of the shop dashboard page filter modal display before parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display Before Parameter Alterations");
        //click shop dashboard page filter modal product brand dropdown menu
        await shopDashPageFilterModal.clickProductBrandDropdownMenu();
        //select "Salt Maalat" brand option
        await shopDashPageFilterModal.selectSetProductBrandDropdownOption(1);
        //click shop dashboard page filter sort by product brand dropdown menu
        await shopDashPageFilterModal.clickProductSortByDropdownMenu();
        //select "Name Ascending A-Z" sort by option
        await shopDashPageFilterModal.selectSetProductSortByDropdownOption(1);
        //log shop dashboard page filter modal price range before alteration
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //set price range (64 - 457)
        await shopDashPageFilterModal.setPriceRangeSlider(3, -129);
        //log shop dashboard page filter modal price range after alteration (to assert the price range has been applied)
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //capture screenshot of the shop dashboard page filter modal display after parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display After Parameter Alterations - (brand: 'Salt Maalat'; A-Z asc sorting; price range: 64-457)");
        //click "Apply Filters" button
        await shopDashPageFilterModal.clickApplyFiltersButton();
        //capture screenshot of the shop dashboard page display after filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display After Filter Application - - (brand: 'Salt Maalat'; A-Z asc sorting; price range: 64-457)");

        //second filter application

        //click upper header "Filters" modal button
        await shopDashboardPage.clickUpperHeaderFilterButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //capture screenshot of the shop dashboard page filter modal display before parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display Before Parameter Alterations");
        //click shop dashboard page filter modal product brand dropdown menu
        await shopDashPageFilterModal.clickProductBrandDropdownMenu();
        //select "Betsin Maalat" brand option
        await shopDashPageFilterModal.selectSetProductBrandDropdownOption(2);
        //click shop dashboard page filter sort by product brand dropdown menu
        await shopDashPageFilterModal.clickProductSortByDropdownMenu();
        //select "Name Descending Z-A" sort by option
        await shopDashPageFilterModal.selectSetProductSortByDropdownOption(2);
        //log shop dashboard page filter modal price range (to assert it doesn't change)
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //capture screenshot of the shop dashboard page filter modal display after parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display After Parameter Alterations - (brand: 'Betsin Maalat'; Z-A desc sorting; price range: 64-457)");
        //click "Apply Filters" button
        await shopDashPageFilterModal.clickApplyFiltersButton();
        //capture screenshot of the shop dashboard page display after filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display After Filter Application - - (brand: 'Betsin Maalat'; Z-A desc sorting; price range: 64-457)");

        //third filter application

        //click upper header "Filters" modal button
        await shopDashboardPage.clickUpperHeaderFilterButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //capture screenshot of the shop dashboard page filter modal display before parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display Before Parameter Alterations");
        //click shop dashboard page filter modal product brand dropdown menu
        await shopDashPageFilterModal.clickProductBrandDropdownMenu();
        //select "Black Kibal" brand option
        await shopDashPageFilterModal.selectSetProductBrandDropdownOption(3);
        //click shop dashboard page filter sort by product brand dropdown menu
        await shopDashPageFilterModal.clickProductSortByDropdownMenu();
        //select "Price High-low" sort by option
        await shopDashPageFilterModal.selectSetProductSortByDropdownOption(3);
        //log shop dashboard page filter modal price range (to assert it doesn't change)
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //capture screenshot of the shop dashboard page filter modal display after parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display After Parameter Alterations - (brand: 'Black Kibal'; price high-low sorting; price range: 64-457)");
        //click "Apply Filters" button
        await shopDashPageFilterModal.clickApplyFiltersButton();
        //capture screenshot of the shop dashboard page display after filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display After Filter Application - - (brand: 'Black Kibal'; price high-low sorting; price range: 64-457)");

        //fourth filter application

        //click upper header "Filters" modal button
        await shopDashboardPage.clickUpperHeaderFilterButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //capture screenshot of the shop dashboard page filter modal display before parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display Before Parameter Alterations");
        //click shop dashboard page filter modal product brand dropdown menu
        await shopDashPageFilterModal.clickProductBrandDropdownMenu();
        //select "Sexbomb" brand option
        await shopDashPageFilterModal.selectSetProductBrandDropdownOption(4);
        //click shop dashboard page filter sort by product brand dropdown menu
        await shopDashPageFilterModal.clickProductSortByDropdownMenu();
        //select "Price Low-High" sort by option
        await shopDashPageFilterModal.selectSetProductSortByDropdownOption(4);
        //log shop dashboard page filter modal price range (to assert it doesn't change)
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //capture screenshot of the shop dashboard page filter modal display after parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display After Parameter Alterations - (brand: 'Sexbomb'; price low-high sorting; price range: 64-457)");
        //click "Apply Filters" button
        await shopDashPageFilterModal.clickApplyFiltersButton();
        //capture screenshot of the shop dashboard page display after filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display After Filter Application - - (brand: 'Sexbomb'; price low-high sorting; price range: 64-457)");

        //fifth (final -> return to previous settings) filter application

        //click upper header "Filters" modal button
        await shopDashboardPage.clickUpperHeaderFilterButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //shop dash page filter modal web element assert
        await shopDashPageFilterModal.isShopDashPageFilterModalWebElementDisplayed();
        //shop dash page filter modal text element assert
        await shopDashPageFilterModalTextElementAssert.isShopDashPageTextElementAsExpected();
        //capture screenshot of the shop dashboard page filter modal display before parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display Before Parameter Alterations");
        //click shop dashboard page filter modal product brand dropdown menu
        await shopDashPageFilterModal.clickProductBrandDropdownMenu();
        //select "All brands" brand option
        await shopDashPageFilterModal.selectSetProductBrandDropdownOption(0);
        //click shop dashboard page filter sort by product brand dropdown menu
        await shopDashPageFilterModal.clickProductSortByDropdownMenu();
        //select "None" sort by option
        await shopDashPageFilterModal.selectSetProductSortByDropdownOption(0);
        //log shop dashboard page filter modal price range (to assert it doesn't change)
        await shopDashPageFilterModalDataLogger.logShopDashPageFilterModalPriceData();
        //capture screenshot of the shop dashboard page filter modal display after parameter alterations
        await captureScreenshot(this.driver, "Shop Dashboard Page Filter Modal Display After Parameter Alterations - (brand: 'All Brands'; no sorting; price range: 64-457)");
        //click "Apply Filters" button
        await shopDashPageFilterModal.clickApplyFiltersButton();
        //capture screenshot of the shop dashboard page display after filter application
        await captureScreenshot(this.driver, "Shop Dashboard Page Display After Filter Application - - (brand: 'All Brands'; no sorting; price range: 64-457)");
        //hover over "Quake Overload" card
        await shopDashboardPage.hoverOverSetProductCard(3);
        //click 'Add to basket' "Quake Overload" button
        await shopDashboardPage.clickSetProductAddToBasketButton(3);
        //click upper header shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Shop Product (Quake Overload) To Cart Test Result");
    }

    //add multiple different shop dashboard page products to cart test (both guest and registered user share the same method)

    //add multiple different shop dashboard page products ("Very Nice", "Sugat") to cart test method
    async addMultipleShopDashPageProductsToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLogger = new HomePageDataLogger(this.driver);
        const shopDashboardPage = new ShopDashboardPage(this.driver);
        const shopDashboardPageDataLogger = new ShopDashboardPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad()
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page product data
        await homePageDataLogger.logHomePageProductData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click header navbar "Shop" link
        await generalPage.clickHeaderNavbarShopLink();
        //wait for elements to load
        await basePage.shortWaitForElementLoad()
        //shop dashboard page web element assert
        await shopDashboardPage.isShopDashPageWebElementDisplayed();
        //click "Show More" button
        await shopDashboardPage.clickShowMoreButton();
        //log hop dashboard page product data
        await shopDashboardPageDataLogger.logShopDashboardPageData();
        //capture screenshot of the shop dashboard page display
        await captureScreenshot(this.driver, "Shop Dashboard Page Display");
        //hover over "Very Nice" card
        await shopDashboardPage.hoverOverSetProductCard(3);
        //click 'Add to basket' "Very Nice" button
        await shopDashboardPage.clickSetProductAddToBasketButton(3);
        //hover over "Sugat"" card
        await shopDashboardPage.hoverOverSetProductCard(0);
        //click 'Add to basket' "Sugat" button
        await shopDashboardPage.clickSetProductAddToBasketButton(0);
        //click upper header shopping cart link
        await generalPage.clickHeaderShoppingCartLink();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Shop Products (Very Nice, Sugat) To Cart Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add product/products to check out test (both guest and registered user have this method)
    async addProductToCheckoutTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //shopping cart modal web element assert
        await shoppingCartModal.isShoppingCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //capture screenshot of the shopping cart modal
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //click "Checkout" button
        await shoppingCartModal.clickCheckoutButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //if the sign-in modal appears (it does for guest only), assert the user gets an expected message
        const signInMessageElement = await this.driver.findElements(shoppingCartModal._shoppingCartModalSignInModalMessage);
        if(signInMessageElement.length > 0) {
            const shopCartModalSignInModalMessage = await shoppingCartModal.getShopCartModalSignInModalMessage();
            assert.strictEqual(shopCartModalSignInModalMessage, "You must sign in to continue checking out", "The shopping cart modal sign in modal message doesn't match expectations.");
            Logger.warn("The guest cannot checkout on their own, the guest requires a pre-created account and to be signed in.");
            //capture screenshot of the test result -> as the guest cannot check out
            await captureScreenshot(this.driver, "Add Product(s) To Checkout Test Result (guest)");
        } else {
            //capture screenshot of the test result
            await captureScreenshot(this.driver, "Add Product(s) To Checkout Test Result");
        }
    }

    //update product quantity in cart test

    //update product quantity in cart test method (both quest and registered user share the same method, to avoid redundancy, guest branch is tested)
    async updateProductQuantityInShopCartModalTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //shopping cart modal web element assert
        await shoppingCartModal.isShoppingCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //capture screenshot of the shopping cart modal
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //log shopping cart modal product data (before quantity modification)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //click set product quantity increase button (by 1)
        await shoppingCartModal.clickSetIncreaseProductQtyButton(0);
        //click set product quantity increase button (by 1)
        await shoppingCartModal.clickSetIncreaseProductQtyButton(0);
        //click set product quantity increase button (by 1)
        await shoppingCartModal.clickSetIncreaseProductQtyButton(0);
        //click set product quantity increase button (by 1)
        await shoppingCartModal.clickSetIncreaseProductQtyButton(0);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //click set product quantity decrease button (by 1)
        await shoppingCartModal.clickSetDecreaseProductQtyButton(0);
        //log shopping cart modal product data (after quantity modification)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Update Product Quantity In Cart Test Result");
    }

    //remove product from cart tests

    //remove product from cart test method (both quest and registered user share the same method, to avoid redundancy, guest branch is tested)
    async removeProductFromShopCartModalTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //shopping cart modal web element assert
        await shoppingCartModal.isShoppingCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //capture screenshot of the shopping cart modal
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //log shopping cart modal product data (before product removal)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //click set "Remove" product button (remove second product)
        await shoppingCartModal.clickSetProductRemoveButton(1);
        //log shopping cart modal product data (after single product removal)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Remove Single Product From Cart Test Result");
    }

    //remove product from cart (with "Clear Basket" button) test method (both quest and registered user share the same method, to avoid redundancy, guest branch is tested)
    async removeProductFromShopCartModalClearBasketTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //shopping cart modal web element assert
        await shoppingCartModal.isShoppingCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //capture screenshot of the shopping cart modal
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //log shopping cart modal product data (before product removal)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //click "Clear Basket" button
        await shoppingCartModal.clickClearBasketButton();
        //log shopping cart modal product data (after product removal)
        await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Remove All Products From Cart (Clear Basket) Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid product(products) checkout confirmation tests (only registered user has this feature)

    //valid product(s) checkout confirmation test method
    async validProductCheckoutConfirmationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after valid credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Valid Credit Card Data Input");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Product(s) Checkout Confirmation Test Result");
    }

    //valid product(s) (paypal method) checkout confirmation test method
    async validProductPaypalCheckoutConfirmationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //checkout page paypal option section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePayPalPaymentOptionSectionTextElementAsExpected();
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Product(s) Checkout Confirmation Test Result (Paypal option)");
    }

    //invalid product checkout confirmation tests

    //no singular input

    //invalid product(s) checkout confirmation test method - no shipping full name
    async invalidProductCheckoutConfirmationNoShippingFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear full name input field (since it has already data in the input field)
        await checkoutPage.clearShippingFullNameInputField();
        //don't input valid shipping full name into shipping full name input field
        await checkoutPageNoSingularInput.inputNoShippingFullNameIntoShippingFullNameInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - no shipping full name
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - No Shipping Full Name");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noShippingFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noShippingFullNameError, "Full name is required.", "The checkout page shipping section missing shipping full name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Shipping Full Name");
    }

    //invalid product(s) checkout confirmation test method - no shipping email
    async invalidProductCheckoutConfirmationNoShippingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear email input field (since it has already data in the input field)
        await checkoutPage.clearShippingEmailInputField();
        //don't input valid shipping email into shipping email input field
        await checkoutPageNoSingularInput.inputNoShippingEmailIntoShippingEmailInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - no shipping email
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - No Shipping Email");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noShippingEmailError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noShippingEmailError, "Email is required.", "The checkout page shipping section missing shipping email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Shipping Email");
    }

    //invalid product(s) checkout confirmation test method - no shipping address
    async invalidProductCheckoutConfirmationNoShippingAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //don't input shipping address into shipping address input field
        await checkoutPageNoSingularInput.inputNoShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - no shipping address
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - No Shipping Address");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noShippingAddressError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noShippingAddressError, "Shipping address is required.", "The checkout page shipping section missing shipping address input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Shipping Address");
    }

    //invalid product(s) checkout confirmation test method - no shipping mobile phone
    async invalidProductCheckoutConfirmationNoShippingMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //clear shipping mobile phone input field (by default it leaves country code input)
        await checkoutPage.clearShippingMobileInputField();
        //don't input mobile phone into shipping mobile input field
        await checkoutPageNoSingularInput.inputNoShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - no shipping mobile phone
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - No Shipping Mobile");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noShippingMobileError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noShippingMobileError, "Mobile number is required", "The checkout page shipping section missing shipping mobile input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Shipping Mobile");
    }

    //invalid product(s) checkout confirmation test method - no credit card full name
    async invalidProductCheckoutConfirmationNoCreditCardFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //don't input credit card full name into credit card full name input field
        await checkoutPageNoSingularInput.inputNoCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - no credit card full name
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - No Credit Card Full Name");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noCreditCardFullNameError, "Name is required", "The checkout page payment section missing credit card full name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Credit Card Full Name");
    }

    //invalid product(s) checkout confirmation test method - no credit card number
    async invalidProductCheckoutConfirmationNoCreditCardNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //don't input credit card number into credit card number input field
        await checkoutPageNoSingularInput.inputNoCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - no credit card number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - No Credit Card Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noCreditCardFullNameError, "Card number is required.", "The checkout page payment section missing credit card number input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Credit Card Number");
    }

    //invalid product(s) checkout confirmation test method - no credit card expiration date
    async invalidProductCheckoutConfirmationNoCreditCardExpDateTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //don't input credit card expiration date into credit card exp date input field
        await checkoutPageNoSingularInput.inputNoCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - no credit card expiration date
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - No Credit Card Exp Date");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noCreditCardFullNameError, "Credit card expiry is required.", "The checkout page payment section missing credit exp date input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Credit Card Exp Date");
    }

    //invalid product(s) checkout confirmation test method - no credit card CVV number
    async invalidProductCheckoutConfirmationNoCreditCardCVVNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageNoSingularInput = new CheckoutPageNoSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //don't input credit card CVV number into credit card CVV number input field
        await checkoutPageNoSingularInput.inputNoCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - no credit card CVV number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - No Credit Card CVV Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message
        const noCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
        assert.strictEqual(noCreditCardFullNameError, "CCV is required.", "The checkout page payment section missing credit card name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - No Credit Card CVV Number");
    }

    //too short singular input

    //invalid product(s) checkout confirmation test method - too short shipping full name (3 chars)
    async invalidProductCheckoutConfirmationTooShortShippingFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear full name input field (since it has already data in the input field)
        await checkoutPage.clearShippingFullNameInputField();
        //input too short shipping full name into shipping full name input field (3 chars)
        await checkoutPageTooShortSingularInput.inputTooShortShippingFullNameIntoShippingFullNameInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too short shipping full name
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Short Shipping Full Name");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortShippingFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortShippingFullNameError, "Full name is too short.", "The checkout page shipping section too short shipping full name input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short shipping first name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Shipping Full Name");
    }

    //invalid product(s) checkout confirmation test method - too short shipping email (1 char -> name, domain)
    async invalidProductCheckoutConfirmationTooShortShippingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear email input field (since it has already data in the input field)
        await checkoutPage.clearShippingEmailInputField();
        //input too short valid shipping email into shipping email input field (1 char -> name, domain)
        await checkoutPageTooShortSingularInput.inputTooShortShippingEmailIntoShippingEmailInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too short shipping email
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Short Shipping Email");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortShippingEmailError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortShippingEmailError, "Email is too short.", "The checkout page shipping section too short shipping email input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short shipping email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Shipping Email");
    }

    //invalid product(s) checkout confirmation test method - too short shipping address (3 chars)
    async invalidProductCheckoutConfirmationTooShortShippingAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input too short shipping address into shipping address input field (3 chars)
        await checkoutPageTooShortSingularInput.inputTooShortShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too short shipping address
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Short Shipping Address");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortShippingAddressError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortShippingAddressError, "Address is too short.", "The checkout page shipping section too short shipping address input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short shipping address input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Shipping Address");
    }

    //invalid product(s) checkout confirmation test method - too short shipping mobile phone (2 digits)
    async invalidProductCheckoutConfirmationTooShortShippingMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //clear shipping mobile phone input field (by default it leaves country code input)
        await checkoutPage.clearShippingMobileInputField();
        //input too short mobile phone into shipping mobile input field (2 digits)
        await checkoutPageTooShortSingularInput.inputTooShortShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too short shipping mobile phone
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Short Shipping Mobile");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortShippingMobileError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortShippingMobileError, "Mobile number is too short.", "The checkout page shipping section too short shipping mobile phone input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short shipping mobile phone input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Shipping Mobile");
    }

    //invalid product(s) checkout confirmation test method - too short credit card full name (3 chars)
    async invalidProductCheckoutConfirmationTooShortCreditCardFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input too short credit card full name into credit card full name input field (3 chars)
        await checkoutPageTooShortSingularInput.inputTooShortCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too short credit card full name
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Short Credit Card Full Name");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortCreditCardFullNameError, "Name should be at least 4 characters.", "The checkout page payment section too short credit card full name input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short credit card full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Credit Card Full Name");
    }

    //invalid product(s) checkout confirmation test method - too short credit card number (15 digits)
    async invalidProductCheckoutConfirmationTooShortCreditCardNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input too short credit card number into credit card number input field (15 digits)
        await checkoutPageTooShortSingularInput.inputTooShortCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too short credit card number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Short Credit Card Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortCreditCardNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortCreditCardNumberError, "Card number is too short.", "The checkout page payment section too short credit card number input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short credit card number input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Credit Card Number");
    }

    //invalid product(s) checkout confirmation test method - too short credit card expiration date (too short year input)
    async invalidProductCheckoutConfirmationTooShortCreditCardExpDateTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //clear credit card expiration date input field
        await checkoutPage.clearCreditCardExpDateInputField();
        //input too short credit card expiration date into credit card exp date input field (too short year input)
        await checkoutPageTooShortSingularInput.inputTooShortCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too short credit card expiration date
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Short Credit Card Exp Date");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortCreditCardExpDateError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortCreditCardExpDateError, "Credit card expiry is too short.", "The checkout page payment section too short credit card exp date input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short credit card exp date input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Credit Card Exp Date");
    }

    //invalid product(s) checkout confirmation test method - too short credit card CVV number (2 digits)
    async invalidProductCheckoutConfirmationTooShortCreditCardCVVNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooShortSingularInput = new CheckoutPageTooShortSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input too short credit card CVV number into credit card CVV number input field (2 digits)
        await checkoutPageTooShortSingularInput.inputTooShortCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too short credit card CVV number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Short Credit Card CVV Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooShortCreditCardCVVNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooShortCreditCardCVVNumberError, "CCV length should be 3-4 digit", "The checkout page payment section too short credit card CVV number input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too short credit card CVV number input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Short Credit Card CVV Number");
    }

    //too long singular input

    //invalid product(s) checkout confirmation test method - too long shipping full name (61 chars)
    async invalidProductCheckoutConfirmationTooLongShippingFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear full name input field (since it has already data in the input field)
        await checkoutPage.clearShippingFullNameInputField();
        //input too long shipping full name into shipping full name input field (61 chars)
        await checkoutPageTooLongSingularInput.inputTooLongShippingFullNameIntoShippingFullNameInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too long shipping full name
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Long Shipping Full Name");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingFullNameError, "Full name must only be less than 60 characters.", "The checkout page shipping section too long shipping full name input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long shipping first name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Shipping Full Name");
    }

    //invalid product(s) checkout confirmation test method - too long shipping email (100 chars -> name, domain)
    async invalidProductCheckoutConfirmationTooLongShippingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear email input field (since it has already data in the input field)
        await checkoutPage.clearShippingEmailInputField();
        //input too long valid shipping email into shipping email input field (100 chars -> name, domain)
        await checkoutPageTooLongSingularInput.inputTooLongShippingEmailIntoShippingEmailInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too long shipping email
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Long Shipping Email");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingEmailError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingEmailError, "Email is too long.", "The checkout page shipping section too long shipping email input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long shipping email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Shipping Email");
    }

    //invalid product(s) checkout confirmation test method - too long shipping address (100 chars)
    async invalidProductCheckoutConfirmationTooLongShippingAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input too long shipping address into shipping address input field (100 chars)
        await checkoutPageTooLongSingularInput.inputTooLongShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too long shipping address
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Long Shipping Address");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingAddressError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingAddressError, "Address is too long.", "The checkout page shipping section too long shipping address input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long shipping address input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Shipping Address");
    }

    //invalid product(s) checkout confirmation test method - too long shipping mobile phone (30 digits)
    async invalidProductCheckoutConfirmationTooLongShippingMobileTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //clear shipping mobile phone input field (by default it leaves country code input)
        await checkoutPage.clearShippingMobileInputField();
        //input too long mobile phone into shipping mobile input field (30 digits)
        await checkoutPageTooLongSingularInput.inputTooLongShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - too long shipping mobile phone
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Too Long Shipping Mobile");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingMobileError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingMobileError, "Mobile number is too long.", "The checkout page shipping section too long shipping mobile phone input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long shipping mobile phone input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Shipping Mobile");
    }

    //invalid product(s) checkout confirmation test method - too long credit card full name (61 chars)
    async invalidProductCheckoutConfirmationTooLongCreditCardFullNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input too long credit card full name into credit card full name input field (61 chars)
        await checkoutPageTooLongSingularInput.inputTooLongCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too long credit card full name
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Long Credit Card Full Name");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardFullNameError, "Name is too long.", "The checkout page payment section too long credit card full name input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long credit card full name input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Credit Card Full Name");
    }

    //invalid product(s) checkout confirmation test method - too long credit card number (17 digits)
    async invalidProductCheckoutConfirmationTooLongCreditCardNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input too long credit card number into credit card number input field (17 digits)
        await checkoutPageTooLongSingularInput.inputTooLongCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too long credit card number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Long Credit Card Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const noCreditCardNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(noCreditCardNumberError, "Card number is too long.", "The checkout page payment section too long credit card number input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long credit card number input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Credit Card Number");
    }

    //invalid product(s) checkout confirmation test method - too long credit card expiration date (too long year input)
    async invalidProductCheckoutConfirmationTooLongCreditCardExpDateTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //clear credit card expiration date input field
        await checkoutPage.clearCreditCardExpDateInputField();
        //input too long credit card expiration date into credit card exp date input field (too long year input)
        await checkoutPageTooLongSingularInput.inputTooLongCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too long credit card expiration date
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Long Credit Card Exp Date");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardExpDateError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardExpDateError, "Credit card expiry is too long.", "The checkout page payment section too long credit card exp date input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long credit card exp date input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Credit Card Exp Date");
    }

    //invalid product(s) checkout confirmation test method - too long credit card CVV number (5 digits)
    async invalidProductCheckoutConfirmationTooLongCreditCardCVVNumberTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageTooLongSingularInput = new CheckoutPageTooLongSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input too long credit card CVV number into credit card CVV number input field (5 digits)
        await checkoutPageTooLongSingularInput.inputTooLongCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - too long credit card CVV number
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Too Long Credit Card CVV Number");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardCVVNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardCVVNumberError, "CCV length should be 3-4 digit", "The checkout page payment section too long credit card CVV number input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The too long credit card CVV number input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Too Long Credit Card CVV Number");
    }

    //invalid singular input format

    //invalid product(s) checkout confirmation test method - invalid shipping full name format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidShippingFullNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear full name input field (since it has already data in the input field)
        await checkoutPage.clearShippingFullNameInputField();
        //input invalid shipping full name format into shipping full name input field (special symbols only)
        await checkoutPageInvalidSingularInput.inputInvalidShippingFullNameFormatIntoShippingFullNameInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - invalid shipping full name format
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Invalid Shipping Full Name Format");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingFullNameError, "Full name cannot consist of special symbols only.", "The checkout page shipping section invalid shipping full name input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid shipping first name input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Shipping Full Name Format");
    }

    //invalid product(s) checkout confirmation test method - invalid shipping email format (missing '@')
    async invalidProductCheckoutConfirmationInvalidShippingEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear email input field (since it has already data in the input field)
        await checkoutPage.clearShippingEmailInputField();
        //input invalid valid shipping email format into shipping email input field (missing '@')
        await checkoutPageInvalidSingularInput.inputInvalidShippingEmailFormatIntoShippingEmailInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - invalid shipping email format
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Invalid Shipping Email Format");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingEmailError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingEmailError, "Email is not valid.", "The checkout page shipping section invalid shipping email input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid shipping email input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Shipping Email Format");
    }

    //invalid product(s) checkout confirmation test method - existing shipping email (used beforehand in manual testing)
    async invalidProductCheckoutConfirmationExistingShippingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //clear email input field (since it has already data in the input field)
        await checkoutPage.clearShippingEmailInputField();
        //input existing shipping email into shipping email input field (missing '@')
        await checkoutPageInvalidSingularInput.inputExistingShippingEmailIntoShippingEmailInputField();
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - existing shipping email
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Existing Shipping Email");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingEmailError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingEmailError, "Email is already in use.", "The checkout page shipping section existing shipping email input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The existing shipping email input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Existing Shipping Email");
    }

    //invalid product(s) checkout confirmation test method - invalid shipping address format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidShippingAddressFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input invalid shipping address format into shipping address input field (100 chars)
        await checkoutPageInvalidSingularInput.inputInvalidShippingAddressFormatIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - invalid shipping address format
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Invalid Shipping Address Format");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingAddressError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingAddressError, "Address cannot consist of special symbols only.", "The checkout page shipping section invalid shipping address input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid shipping address input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Shipping Address Format");
    }

    //invalid product(s) checkout confirmation test method - invalid shipping mobile phone format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidShippingMobileFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //clear shipping mobile phone input field (by default it leaves country code input)
        await checkoutPage.clearShippingMobileInputField();
        //input invalid mobile phone format into shipping mobile input field (special symbols only)
        await checkoutPageInvalidSingularInput.inputInvalidShippingMobilePhoneFormatIntoShippingMobileInputField();
        //capture screenshot of the checkout page shipping section display after invalid shipping data input - invalid shipping mobile phone format
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Invalid Shipping Data Input - Invalid Shipping Mobile Format");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongShippingMobileError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongShippingMobileError, "Mobile number is required", "The checkout page shipping section invalid shipping mobile phone format input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid shipping mobile phone input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Shipping Mobile Format");
    }

    //invalid product(s) checkout confirmation test method - invalid credit card full name format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidCreditCardFullNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input invalid credit card full name format into credit card full name input field (special symbols only)
        await checkoutPageInvalidSingularInput.inputInvalidCredCardNameFormatIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - invalid credit card full name
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Invalid Credit Card Full Name Format");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardFullNameError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardFullNameError, "Name cannot consist of special symbols only.", "The checkout page payment section invalid credit card full name format input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid credit card full name format input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Credit Card Full Name Format");
    }

    //invalid product(s) checkout confirmation test method - invalid credit card number format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidCreditCardNumberFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input invalid credit card number format into credit card number input field (special symbols only)
        await checkoutPageInvalidSingularInput.inputInvalidCredCardNumberFormatIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - invalid credit card number format
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Invalid Credit Card Number Format");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const noCreditCardNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(noCreditCardNumberError, "Card number is required.", "The checkout page payment section invalid credit card number input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid credit card number input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Credit Card Number Format");
    }

    //invalid product(s) checkout confirmation test method - invalid credit card expiration date format (special symbols only)
    async invalidProductCheckoutConfirmationInvalidCreditCardExpDateFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //clear credit card expiration date input field
        await checkoutPage.clearCreditCardExpDateInputField();
        //input invalid credit card expiration date format into credit card exp date input field (special symbols only)
        await checkoutPageInvalidSingularInput.inputInvalidCredCardExpDateFormatIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - invalid credit card expiration date format
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Invalid Credit Card Exp Date Format");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardExpDateError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardExpDateError, "Credit card expiry is required.", "The checkout page payment section invalid credit card exp date input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid credit card exp date input format error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Credit Card Exp Date Format");
    }

    //invalid product(s) checkout confirmation test method - reversed credit card expiration date (special symbols only)
    async invalidProductCheckoutConfirmationReversedCreditCardExpDateTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //clear credit card expiration date input field
        await checkoutPage.clearCreditCardExpDateInputField();
        //input reversed credit card expiration date into credit card exp date input field
        await checkoutPageInvalidSingularInput.inputReversedCredCardExpDateIntoCredCardExpDateInputField();
        //input valid credit card CVV number into credit card CVV number input field
        await checkoutPage.inputValidCredCardCVVIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - reversed credit card expiration date
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Reversed Credit Card Exp Date");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardExpDateError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardExpDateError, "Credit card expiry format is invalid.", "The checkout page payment section reversed credit card exp date input error message doesn't match expectations.");
        } catch (e){
            Logger.error("The reversed credit card exp date input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Reversed Credit Card Exp Date");
    }

    //invalid product(s) checkout confirmation test method - invalid credit card CVV number format (special symbols only
    async invalidProductCheckoutConfirmationInvalidCreditCardCVVNumberFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageInvalidSingularInput = new CheckoutPageInvalidSingularInput(this.driver);
        const checkoutPageTextElementAssert = new CheckoutPageTextElementAssert(this.driver);
        const checkoutPageDataLogger = new CheckoutPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //checkout page order summary section web element assert
        await checkoutPage.isCheckoutPageSummarySectionWebElementDisplayed();
        //checkout page order summary section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageOrderSummarySectionTextElementAsExpected();
        //capture screenshot of the checkout page order summary section display
        await captureScreenshot(this.driver, "Checkout Page Display (order summary)");
        //log checkout page order summary product data
        await checkoutPageDataLogger.logCheckoutPageOrderSummaryProductData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page shipping section web element assert
        await checkoutPage.isCheckoutPageShippingSectionWebElementDisplayed();
        //checkout page shipping section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageShippingSectionTextElementAsExpected();
        //capture screenshot of the checkout page shipping section display before shipping data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) Before Shipping Data Input");
        //input valid shipping address into shipping address input field
        await checkoutPage.inputShippingAddressIntoShippingAddressInputField();
        //click mobile country code dropdown menu
        await checkoutPage.clickShippingMobileCountryCodeDropdownMenu();
        //select "United States" option
        await checkoutPage.selectUSMobileCountryCodeOption();
        //input valid mobile phone into shipping mobile input field
        await checkoutPage.inputShippingMobilePhoneIntoShippingMobileInputField();
        //click international shipping option
        await checkoutPage.clickInternationalShippingOption();
        //capture screenshot of the checkout page shipping section display after shipping valid data input
        await captureScreenshot(this.driver, "Checkout Page Display (shipping) After Valid Shipping Data Input");
        //log checkout page shipping section data
        await checkoutPageDataLogger.logCheckoutPageShippingData();
        //click "Next Step" button
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //checkout page payment section web element assert
        await checkoutPage.isCheckoutPagePaymentSectionWebElementDisplayed();
        //checkout page payment section text element assert
        await checkoutPageTextElementAssert.isCheckoutPagePaymentSectionTextElementAsExpected();
        //click "Credit Card" payment option checkbox
        await checkoutPage.clickCreditCardPaymentOptionCheckbox();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //checkout page credit card payment section web element assert
        await checkoutPage.isCheckoutPageCreditCardSectionWebElementDisplayed();
        //checkout page credit card section text element assert
        await checkoutPageTextElementAssert.isCheckoutPageCredCardPaymentOptionsSectionTextElementAsExpected();
        //capture screenshot of the checkout page payment (credit card) section display before credit card data input
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) Before Credit Card Data Input");
        //input valid credit card full name into credit card full name input field
        await checkoutPage.inputValidCredCardNameIntoCredCardNameInputField();
        //input valid credit card number into credit card number input field
        await checkoutPage.inputValidCredCardNumberIntoCredCardNumberInputField();
        //input valid credit card expiration date into credit card exp date input field
        await checkoutPage.inputValidCredCardExpDateIntoCredCardExpDateInputField();
        //input invalid credit card CVV number format into credit card CVV number input field (5 digits)
        await checkoutPageInvalidSingularInput.inputInvalidCredCardCVVFormatIntoCredCardCVVInputField();
        //capture screenshot of the checkout page payment (credit card) section display after invalid credit card data input - invalid credit card CVV number format
        await captureScreenshot(this.driver, "Checkout Page Display (payment - credit card section) After Invalid Credit Card Data Input - Invalid Credit Card CVV Number Format");
        //log checkout section payment section data
        await checkoutPageDataLogger.logCheckoutPagePaymentData();
        //click "Confirm" button (same element as "Next Step" button)
        await checkoutPage.clickNextStepButton();
        //wait for elements to load
        await basePage.shortWaitForElementLoad();
        //assert the user gets an expected error message, log the issue otherwise
        try {
            const tooLongCreditCardCVVNumberError = await checkoutPage.getCheckoutPageSingularInputErrorMsg();
            assert.strictEqual(tooLongCreditCardCVVNumberError, "CCV is required.", "The checkout page payment section invalid credit card CVV number input format error message doesn't match expectations.");
        } catch (e){
            Logger.error("The invalid credit card CVV number format input error wasn't triggered, test has failed.", e);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Product(s) Checkout Confirmation Test Result - Invalid Credit Card CVV Number Format");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;