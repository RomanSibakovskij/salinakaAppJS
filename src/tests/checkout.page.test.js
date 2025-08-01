const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(190000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Featured Product(s) Checkout Tests", () => {

        //Test 017 -> single featured product ("Very Nice") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Single Featured Product Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single featured product ("Very Nice") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationTest();
        });

        //Test 017a -> multiple featured products ("Very Nice", "Balakubak") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Multiple Featured Products Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice", "Balakubak") to cart test (as a registered user)
            await testMethods.addMultipleFeaturedProductsToCartRegUserTest();
            //add multiple featured products ("Very Nice", "Balakubak") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //multiple featured products ("Very Nice", "Balakubak") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationTest();
        });

    });

    describe("Valid Recommended Product(s) Checkout Tests", () => {

        //Test 018 -> single recommended product ("Kulangot") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Single Recommended Product Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single recommended product ("Kulangot") to cart test (as a registered user)
            await testMethods.addSingleRecommendedProductToCartRegUserTest();
            //add single recommended product ("Kulangot") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single recommended product ("Kulangot") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationTest();
        });

        //Test 018a -> multiple different recommended products ("Kulangot", "Kibal Batal") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Multiple Different Recommended Products Checkout Confirmation Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test (as a registered user)
            await testMethods.addMultipleRecommendedProductsToCartRegUserTest();
            //add multiple different recommended products ("Kulangot", "Kibal Batal") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //multiple different recommended products ("Kulangot", "Kibal Batal") check out confirmation test (as a registered user)
            await testMethods.validProductCheckoutConfirmationTest();
        });

    });

    describe("Valid Searched Product(s) Checkout Tests", () => {

        //Test 019 -> single searched product ("Tilapia") check out (PayPal) confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Single Searched Product Checkout Confirmation (PayPal) Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single searched product ("Tilapia") to cart test (as a registered user)
            await testMethods.addSingleSearchedProductToCartTest();
            //add single searched product ("Tilapia") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single searched product ("Tilapia") check out (PayPal) confirmation test (as a registered user)
            await testMethods.validProductPaypalCheckoutConfirmationTest();
        });

        //Test 019a -> multiple different searched products ("Tilapia", "Tiktilaok Manok") check out (PayPal) confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Add Multiple Different Searched Products Checkout Confirmation (PayPal) Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a registered user)
            await testMethods.addMultipleSearchedProductsToCartTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //multiple different searched products ("Tilapia", "Tiktilaok Manok") check out (PayPal) confirmation test (as a registered user)
            await testMethods.validProductPaypalCheckoutConfirmationTest();
        });

    });

    describe("Valid Shop Dashboard Page Product Checkout Tests", () => {

        //Test 020 -> single shop dashboard product ("Quake Overload") check out confirmation (PayPal) test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Single Shop Dashboard Page Product Checkout Confirmation (PayPal) Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single shop dashboard product ("Quake Overload") to cart test (as a registered user)
            await testMethods.addSingleShopDashPageProductToCartTest();
            //add single shop dashboard product ("Quake Overload") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //single shop dashboard product ("Quake Overload") check out confirmation (PayPal) test (as a registered user)
            await testMethods.validProductPaypalCheckoutConfirmationTest();
        });

        //Test 020a -> multiple different shop dashboard products ("Very Nice", "Sugat") check out confirmation test (as a registered user) (the feature isn't yet finished, test has failed)
        test("Multiple Different Shop Dashboard Page Products Checkout Confirmation (PayPal) Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a registered user)
            await testMethods.addMultipleShopDashPageProductsToCartTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
            //multiple different shop dashboard products ("Very Nice", "Sugat") check out confirmation test (as a registered user)
            await testMethods.validProductPaypalCheckoutConfirmationTest();
        });

    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});