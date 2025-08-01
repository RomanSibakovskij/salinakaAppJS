const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Edit Account Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Account Data Test", () => {

        //Test 003 -> valid edit user account data test
        test("Valid Edit User Account Data Test", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user account data test
            await testMethods.validEditUserAccountDataTest();
        });

    });

    describe("Invalid Edit User Account Data Tests - No Singular Input", () => {

        //Test 003a -> invalid edit user account data test - no edited full name (the webpage backend seems to put former full name back, test has failed)
        test("Invalid Edit User Account Data Test - No Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - no edited full name
            await testMethods.invalidEditUserAccountDataNoFullNameTest();
        });

        //Test 003b -> invalid edit user account data test - no edited email
        test("Invalid Edit User Account Data Test - No Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - no edited email
            await testMethods.invalidEditUserAccountDataNoEmailTest();
        });

        //Test 003c -> invalid edit user account data test - no address (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - No Address", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - no address
            await testMethods.invalidEditUserAccountDataNoAddressTest();
        });

        //Test 003d -> invalid edit user account data test - no mobile (the webpage backend seems to put random valid mobile phone number back, test has failed)
        test("Invalid Edit User Account Data Test - No Mobile", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - no mobile
            await testMethods.invalidEditUserAccountDataNoMobileTest();
        });

        //Test 003e -> invalid edit user account data test - no user password (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - No User Password", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - no user password
            await testMethods.invalidEditUserAccountDataNoUserPasswordTest();
        });

    });

    describe("Invalid Edit User Account Data Tests - Too Short Singular Input", () => {

        //Test 003f -> invalid edit user account data test - too short edited full name (3 chars)
        test("Invalid Edit User Account Data Test - Too Short Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too short edited full name (3 chars)
            await testMethods.invalidEditUserAccountDataTooShortFullNameTest();
        });

        //Test 003g -> invalid edit user account data test - too short edited email (1 char -> name, domain) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Short Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too short edited email (1 char -> name, domain)
            await testMethods.invalidEditUserAccountDataTooShortEmailTest();
        });

        //Test 003h -> invalid edit user account data test - too short address (3 chars) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Short Address", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too short address (3 chars)
            await testMethods.invalidEditUserAccountDataTooShortAddressTest();
        });

        //Test 003i -> invalid edit user account data test - too short mobile (2 digits) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Short Mobile", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too short mobile (2 digits)
            await testMethods.invalidEditUserAccountDataTooShortMobileTest();
        });

    });

    describe("Invalid Edit User Account Data Tests - Too Long Singular Input", () => {

        //Test 003j -> invalid edit user account data test - too long edited full name (201 chars)
        test("Invalid Edit User Account Data Test - Too Long Full Name", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too long edited full name (201 chars)
            await testMethods.invalidEditUserAccountDataTooLongFullNameTest();
        });

        //Test 003k -> invalid edit user account data test - too long edited email (100 chars -> name, domain) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Long Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too long edited email (100 chars -> name, domain)
            await testMethods.invalidEditUserAccountDataTooLongEmailTest();
        });

        //Test 003l -> invalid edit user account data test - too long address (100 chars) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Long Address", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too long address (100 chars)
            await testMethods.invalidEditUserAccountDataTooLongAddressTest();
        });

        //Test 003m -> invalid edit user account data test - too long mobile (30 digits) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Too Long Mobile", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - too long mobile (30 digits)
            await testMethods.invalidEditUserAccountDataTooLongMobileTest();
        });

    });

    describe("Invalid Edit User Account Data Tests - Invalid Singular Input Format", () => {

        //Test 003n -> invalid edit user account data test - invalid edited full name format (special symbols only) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Invalid Full Name Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - invalid edited full name format (special symbols only)
            await testMethods.invalidEditUserAccountDataInvalidFullNameFormatTest();
        });

        //Test 003o -> invalid edit user account data test - invalid edited email format (missing '@')
        test("Invalid Edit User Account Data Test - Invalid Email Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - invalid edited email format (missing '@')
            await testMethods.invalidEditUserAccountDataInvalidEmailFormatTest();
        });

        //Test 003p -> invalid edit user account data test - existing email (used beforehand in manual testing) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Existing Email", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - existing email (used beforehand in manual testing)
            await testMethods.invalidEditUserAccountDataExistingEmailTest();
        });


        //Test 003q -> invalid edit user account data test - invalid address format (special symbols only) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Invalid Address Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - invalid address format (special symbols only)
            await testMethods.invalidEditUserAccountDataInvalidAddressFormatTest();
        });

        //Test 003r -> invalid edit user account data test - invalid mobile format (special symbols only) (no error was triggered (during manual testing too), test has failed)
        test("Invalid Edit User Account Data Test - Invalid Mobile Format", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account data test - invalid mobile format (special symbols only)
            await testMethods.invalidEditUserAccountDataInvalidMobileFormatTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});