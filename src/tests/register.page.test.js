const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Register Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Creation Test", () => {

        //Test 002 -> valid user account creation test
        test("Valid User Account Creation Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
        });

    });

    describe("Invalid User Account Creation Tests - No Singular Input", () => {

        //Test 002a -> invalid user account creation test - no user full name
        test("Invalid User Account Creation Test - No User Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no user full name
            await testMethods.invalidUserAccountCreationNoFullNameTest();
        });

        //Test 002b -> invalid user account creation test - no user email
        test("Invalid User Account Creation Test - No User Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no user email
            await testMethods.invalidUserAccountCreationNoEmailTest();
        });

        //Test 002c -> invalid user account creation test - no user password
        test("Invalid User Account Creation Test - No User Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - no user password
            await testMethods.invalidUserAccountCreationNoPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Short Singular Input", () => {

        //Test 002d -> invalid user account creation test - too short user full name (3 chars)
        test("Invalid User Account Creation Test - Too Short User Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short user full name (3 chars)
            await testMethods.invalidUserAccountCreationTooShortFullNameTest();
        });

        //Test 002e -> invalid user account creation test - too short user email (1 char -> name, domain) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Short User Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short user email (1 char -> name, domain)
            await testMethods.invalidUserAccountCreationTooShortEmailTest();
        });

        //Test 002f -> invalid user account creation test - too short user password (7 chars)
        test("Invalid User Account Creation Test - Too Short User Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too short user password (7 chars)
            await testMethods.invalidUserAccountCreationTooShortPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Long Singular Input", () => {

        //Test 002g -> invalid user account creation test - too long user full name (201 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Long User Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long user full name (201 chars)
            await testMethods.invalidUserAccountCreationTooLongFullNameTest();
        });

        //Test 002h -> invalid user account creation test - too long user email (100 chars -> name, domain) (the error wasn't triggered, but the user account creation was aborted, test has passed)
        test("Invalid User Account Creation Test - Too Long User Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long user email (100 chars -> name, domain)
            await testMethods.invalidUserAccountCreationTooLongEmailTest();
        });

        //Test 002i -> invalid user account creation test - too long user password (75 chars) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Too Long User Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - too long user password (75 chars)
            await testMethods.invalidUserAccountCreationTooLongPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Invalid Singular Input Format", () => {

        //Test 002j -> invalid user account creation test - invalid full name input format (special symbols only) (the error wasn't triggered, test has failed)
        test("Invalid User Account Creation Test - Invalid Full Name Input Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - invalid full name input format (special symbols only)
            await testMethods.invalidUserAccountCreationInvalidFullNameFormatTest();
        });

        //Test 002k -> invalid user account creation test - invalid email input format (missing '@')
        test("Invalid User Account Creation Test - Invalid Email Input Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - invalid email input format (missing '@')
            await testMethods.invalidUserAccountCreationInvalidEmailFormatTest();
        });

        //Test 002l -> invalid user account creation test - existing email (used beforehand in manual testing)
        test("Invalid User Account Creation Test - Existing Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account creation test - existing email (used beforehand in manual testing)
            await testMethods.invalidUserAccountCreationExistingEmailTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


