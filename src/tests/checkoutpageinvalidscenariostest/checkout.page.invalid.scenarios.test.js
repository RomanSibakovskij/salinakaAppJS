const TestMethods = require('../utilities/test.methods.js');
const BaseTest = require('../utilities/base.test.js');

describe('Invalid Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(190000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Invalid Featured Product Checkout Tests - No Singular Input", () => {

        //Test 021 -> invalid single featured product ("Very Nice") check out confirmation test - no shipping full name (as a registered user) (the backend seems to input full name back after clicking "Next Step" button, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Shipping Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no shipping full name (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoShippingFullNameTest();
        });

        //Test 021a -> invalid single featured product ("Very Nice") check out confirmation test - no shipping email (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Shipping Email (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no shipping email (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoShippingEmailTest();
        });

        //Test 021b -> invalid single featured product ("Very Nice") check out confirmation test - no shipping address (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Shipping Address (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no shipping address (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoShippingAddressTest();
        });

        //Test 021c -> invalid single featured product ("Very Nice") check out confirmation test - no shipping mobile phone (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Shipping Mobile (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no shipping mobile phone (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoShippingMobileTest();
        });

        //Test 021d -> invalid single featured product ("Very Nice") check out confirmation test - no credit card full name (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Credit Card Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no credit card full name (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoCreditCardFullNameTest();
        });

        //Test 021e -> invalid single featured product ("Very Nice") check out confirmation test - no credit card number (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Credit Card Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no credit card number (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoCreditCardNumberTest();
        });

        //Test 021f -> invalid single featured product ("Very Nice") check out confirmation test - no credit card expiration date (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Credit Card Exp Date (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no credit card expiration date (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoCreditCardExpDateTest();
        });

        //Test 021g -> invalid single featured product ("Very Nice") check out confirmation test - no credit card CVV number (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - No Credit Card CVV Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - no credit card CVV number (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationNoCreditCardCVVNumberTest();
        });

    });

    describe("Invalid Featured Product Checkout Tests - Too Short Singular Input", () => {

        //Test 021h -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping full name (3 chars) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Shipping Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short shipping full name (3 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortShippingFullNameTest();
        });

        //Test 021i -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping email (1 char -> name, domain) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Shipping Email (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short shipping email (1 char -> name, domain) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortShippingEmailTest();
        });

        //Test 021j -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping address (3 chars) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Shipping Address (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short shipping address (3 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortShippingAddressTest();
        });

        //Test 021k -> invalid single featured product ("Very Nice") check out confirmation test - too short shipping mobile phone (2 digits) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Shipping Mobile (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short shipping mobile phone (2 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortShippingMobileTest();
        });

        //Test 021l -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card full name (3 chars) (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Credit Card Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short credit card full name (3 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortCreditCardFullNameTest();
        });

        //Test 021m -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card number (15 digits) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Credit Card Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short credit card number (15 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortCreditCardNumberTest();
        });

        //Test 021n -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card expiration date (too short year input) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Credit Card Exp Date (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short credit card expiration date (too short year input) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortCreditCardExpDateTest();
        });

        //Test 021o -> invalid single featured product ("Very Nice") check out confirmation test - too short credit card CVV number (2 digits) (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Short Credit Card CVV Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too short credit card CVV number (2 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooShortCreditCardCVVNumberTest();
        });

    });

    describe("Invalid Featured Product Checkout Tests - Too Long Singular Input", () => {

        //Test 021p -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping full name (61 chars) (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Shipping Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long shipping full name (61 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongShippingFullNameTest();
        });

        //Test 021q -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping email (100 chars -> name, domain) (as a registered user) (no error was triggered, but the checkout was aborted, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Shipping Email (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long shipping email (100 chars -> name, domain) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongShippingEmailTest();
        });

        //Test 021r -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping address (100 chars) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Shipping Address (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long shipping address (100 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongShippingAddressTest();
        });

        //Test 021s -> invalid single featured product ("Very Nice") check out confirmation test - too long shipping mobile phone (30 digits) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Shipping Mobile (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long shipping mobile phone (30 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongShippingMobileTest();
        });

        //Test 021t -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card full name (61 chars) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Credit Card Full Name (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long credit card full name (61 chars) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardFullNameTest();
        });

        //Test 021y -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card number (17 digits) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Credit Card Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long credit card number (17 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardNumberTest();
        });

        //Test 021v -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card expiration date (too long year input) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Credit Card Exp Date (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long credit card expiration date (too long year input) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardExpDateTest();
        });

        //Test 021w -> invalid single featured product ("Very Nice") check out confirmation test - too long credit card CVV number (5 digits) (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - Too Long Credit Card CVV Number (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - too long credit card CVV number (5 digits) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardCVVNumberTest();
        });

    });

    describe("Invalid Featured Product Checkout Tests - Invalid Singular Input Format", () => {

        //Test 021x -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping full name format (special symbols only) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Shipping Full Name Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid shipping full name format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidShippingFullNameFormatTest();
        });

        //Test 021y -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping email format (missing '@') (as a registered user)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Shipping Email Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid shipping email format (missing '@') (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidShippingEmailFormatTest();
        });

        //Test 021z -> invalid single featured product ("Very Nice") check out confirmation test - existing shipping email (used beforehand in manual testing) (as a registered user) (no error was triggered, but the checkout was aborted, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Existing Shipping Email (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - existing shipping email (used beforehand in manual testing) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationExistingShippingEmailTest();
        });

        //Test 021aa -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping address format (special symbols only) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Shipping Address Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid shipping address format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidShippingAddressFormatTest();
        });

        //Test 021ab -> invalid single featured product ("Very Nice") check out confirmation test - invalid shipping mobile phone format (special symbols only) (as a registered user) (input field doesn't allow string input, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Shipping Mobile Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid shipping mobile phone format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidShippingMobileFormatTest();
        });

        //Test 021ac -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card full name format (special symbols only) (as a registered user) (no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Credit Card Full Name Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid credit card full name format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidCreditCardFullNameFormatTest();
        });

        //Test 021ad -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card number format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Credit Card Number Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid credit card number format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidCreditCardNumberFormatTest();
        });

        //Test 021ae -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card expiration date format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Credit Card Exp Date Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid credit card expiration date format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidCreditCardExpDateFormatTest();
        });

        //Test 021af -> invalid single featured product ("Very Nice") check out confirmation test - reversed credit card expiration date (as a registered user) (other than test string was input, no error was triggered, test has failed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Reversed Credit Card Exp Date Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - reversed credit card expiration date (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationReversedCreditCardExpDateTest();
        });

        //Test 021ag -> invalid single featured product ("Very Nice") check out confirmation test - invalid credit card CVV number format (special symbols only) (as a registered user) (the input field doesn't allow invalid string input, test has passed)
        test("Invalid Single Featured Product Checkout Confirmation Test - Invalid Credit Card CVV Number Format (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //invalid single featured product ("Very Nice") check out confirmation test - invalid credit card CVV number format (special symbols only) (as a registered user)
            await testMethods.invalidProductCheckoutConfirmationInvalidCreditCardCVVNumberFormatTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});