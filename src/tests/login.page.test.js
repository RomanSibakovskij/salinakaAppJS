const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

const BasePage = require("../pages/utilities/base.page.js");

describe('Login Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Logout Test", () => {

        //Test 004 -> valid user logout test
        test("Valid User Logout Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
        });

    });

    describe("Valid User Login Tests", () => {

        //Test 005 -> valid user login test
        test("Valid User Login Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //valid user login test
            await testMethods.validUserLoginTest();
        });

        //Test 005a -> valid user login with edited login email test
        test("Valid User Login With Edited Login Email Test", async function () {
            const basePage = new BasePage(this.driver);
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account data test
            await testMethods.validEditUserAccountDataTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //wait for elements to load (without this with the sign-out click doesn't happen)
            await basePage.shortWaitForElementLoad();
            //valid user login with edited login email test
            await testMethods.validUserLoginEditedLoginEmailTest();
        });

    });

    describe("Invalid User Login Tests - No Singular Input", () => {

        //Test 005b -> invalid user login test - no login email
        test("Invalid User Login Test - No Login Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - no login email
            await testMethods.invalidUserLoginNoEmailTest();
        });

        //Test 005c -> invalid user login test - no login password
        test("Invalid User Login Test - No Login Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - no login password
            await testMethods.invalidUserLoginNoPasswordTest();
        });

    });

    describe("Invalid User Login Tests - Invalid Singular Input", () => {

        //Test 005d -> invalid user login test - invalid login email
        test("Invalid User Login Test - Invalid Login Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - invalid login email
            await testMethods.invalidUserLoginInvalidEmailTest();
        });

        //Test 005e -> invalid user login test - invalid login email format (missing '@')
        test("Invalid User Login Test - Invalid Login Email Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - invalid login email format (missing '@')
            await testMethods.invalidUserLoginInvalidEmailFormatTest();
        });

        //Test 005f -> invalid user login test - invalid login password
        test("Invalid User Login Test - Invalid Login Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid user logout test
            await testMethods.validUserLogoutTest();
            //invalid user login test - invalid login password
            await testMethods.invalidUserLoginInvalidPasswordTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});