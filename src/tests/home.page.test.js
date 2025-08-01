const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to Register Page Test", () => {

        //Test 001 -> navigate user to register page test
        test("User Navigation to Register Page Test", async function () {
            await testMethods.navigateToRegisterPageTest();
        });

    });

    describe("Add Single Featured Product To Cart Tests", () => {

        //Test 006 -> add single featured ("Burnikk") product to cart test (as a guest)
        test("Add Single Featured Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleFeaturedProductToCartTest();
        });

        //Test 006a -> add single featured product ("Very Nice") to cart test (as a registered user)
        test("Add Single Featured Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
        });

    });

    describe("Add Multiple Different Featured Products To Cart Tests", () => {

        //Test 006b -> add multiple featured products ("Burnikk", "Buldit") to cart test (as a guest)
        test("Add Multiple Different Products To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleFeaturedProductsToCartTest();
        });

        //Test 006c -> add multiple featured products ("Very Nice", "Balakubak") to cart test (as a registered user)
        test("Add Multiple Featured Products To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice", "Balakubak") to cart test (as a registered user)
            await testMethods.addMultipleFeaturedProductsToCartRegUserTest();
        });

    });

    describe("Add Single Recommended Product To Cart Tests", () => {

        //Test 007 -> add single recommended product ("Pitaklan") to cart test (as a guest)
        test("Add Single Recommended Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleRecommendedProductToCartTest();
        });

        //Test 007a -> add single recommended product ("Kulangot") to cart test (as a registered user)
        test("Add Single Recommended Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single recommended product ("Kulangot") to cart test (as a registered user)
            await testMethods.addSingleRecommendedProductToCartRegUserTest();
        });

    });

    describe("Add Multiple Different Recommended Products To Cart Tests", () => {

        //Test 007b -> add multiple different recommended products ("Pitaklan", "Sipon Malapot") to cart test (as a guest)
        test("Add Multiple Different Recommended Products  To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleRecommendedProductsToCartTest();
        });

        //Test 007c -> add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test (as a registered user)
        test("Add Multiple Different Recommended Products To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test (as a registered user)
            await testMethods.addMultipleRecommendedProductsToCartRegUserTest();
        });

    });

    describe("Add Single Searched Product To Cart Tests", () => {

        //Test 008 -> add single searched product ("Tilapia") to cart test (as a guest)
        test("Add Single Searched Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleSearchedProductToCartTest();
        });

        //Test 008a -> add single searched product ("Tilapia") to cart test (as a registered user)
        test("Add Single Searched Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single searched product ("Tilapia") to cart test (as a registered user)
            await testMethods.addSingleSearchedProductToCartTest();
        });

    });

    describe("Add Multiple Different Searched Products To Cart Tests", () => {

        //Test 008b -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a guest)
        test("Add Multiple Different Searched Products To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleSearchedProductsToCartTest();
        });

        //Test 008c -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a registered user)
        test("Add Multiple Different Searched Products To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a registered user)
            await testMethods.addMultipleSearchedProductsToCartTest();
        });

    });

    describe("Remove Product From Basket Test", () => {

        //Test 009 -> remove single recommended product ("Pitaklan") to cart test
        test("Remove Single Recommended Product From Cart Test", async function () {
            //add single recommended product ("Pitaklan") to cart test (as a guest)
            await testMethods.addSingleRecommendedProductToCartTest();
            //remove single recommended product ("Pitaklan") to cart test
            await testMethods.removeProductFromBasketTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


