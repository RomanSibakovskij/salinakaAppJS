const TestMethods = require('../utilities/test.methods.js');
const BaseTest = require('../utilities/base.test.js');

describe('Shopping Cart Modal Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(190000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single Featured Product To Checkout Tests", () => {

        //Test 011 -> add single featured product ("Burnikk") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Single Featured Product To Checkout Test (as a guest)", async function () {
            //add single featured product ("Burnikk") to cart test (as a guest)
            await testMethods.addSingleFeaturedProductToCartTest();
            //add single featured product ("Burnikk") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 011a -> add single featured product ("Very Nice") to check out test (as a registered user)
        test("Add Single Featured Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
            //add single featured product ("Very Nice") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Multiple Different Featured Products To Checkout Tests", () => {

        //Test 011b -> add multiple featured products ("Burnikk", "Buldit") to cart test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Multiple Different Products To Checkout Test (as a guest)", async function () {
            //add multiple featured products to cart test (as a guest)
            await testMethods.addMultipleFeaturedProductsToCartTest();
            //add multiple featured products ("Burnikk", "Buldit") to cart test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 011c -> add multiple featured products ("Very Nice", "Balakubak") to check out test (as a registered user)
        test("Add Multiple Featured Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single featured product ("Very Nice", "Balakubak") to cart test (as a registered user)
            await testMethods.addMultipleFeaturedProductsToCartRegUserTest();
            //add multiple featured products ("Very Nice", "Balakubak") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Single Recommended Product To Checkout Tests", () => {

        //Test 012 -> add single recommended product ("Pitaklan") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Single Recommended Product To Checkout Test (as a guest)", async function () {
            //add single recommended product ("Pitaklan") to cart test (as a guest)
            await testMethods.addSingleRecommendedProductToCartTest();
            //add single recommended product ("Pitaklan") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 012a -> add single recommended product ("Kulangot") to check out test (as a registered user)
        test("Add Single Recommended Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single recommended product ("Kulangot") to cart test (as a registered user)
            await testMethods.addSingleRecommendedProductToCartRegUserTest();
            //add single recommended product ("Kulangot") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Multiple Different Recommended Products To Checkout Tests", () => {

        //Test 012b -> add multiple different recommended products ("Pitaklan", "Sipon Malapot") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Multiple Different Recommended Products  To Checkout Test (as a guest)", async function () {
            //add multiple different recommended products ("Pitaklan", "Sipon Malapot") to cart test (as a guest)
            await testMethods.addMultipleRecommendedProductsToCartTest();
            //add multiple different recommended products ("Pitaklan", "Sipon Malapot") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 012c -> add multiple different recommended products ("Kulangot", "Kibal Batal") to check out test (as a registered user)
        test("Add Multiple Different Recommended Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different recommended products ("Kulangot", "Kibal Batal") to cart test (as a registered user)
            await testMethods.addMultipleRecommendedProductsToCartRegUserTest();
            //add multiple different recommended products ("Kulangot", "Kibal Batal") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Single Searched Product To Checkout Tests", () => {

        //Test 013 -> add single searched product ("Tilapia") to cart test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Single Searched Product To Checkout Test (as a guest)", async function () {
            //add single searched product ("Tilapia") to cart test (as a guest)
            await testMethods.addSingleSearchedProductToCartTest();
            //add single searched product ("Tilapia") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 013a -> add single searched product ("Tilapia") to check out test (as a registered user)
        test("Add Single Searched Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single searched product ("Tilapia") to cart test (as a registered user)
            await testMethods.addSingleSearchedProductToCartTest();
            //add single searched product ("Tilapia") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Multiple Different Searched Products To Checkout Tests", () => {

        //Test 013b -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Multiple Different Searched Products To Checkout Test (as a guest)", async function () {
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a guest)
            await testMethods.addMultipleSearchedProductsToCartTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 013c -> add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a registered user)
        test("Add Multiple Different Searched Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to cart test (as a registered user)
            await testMethods.addMultipleSearchedProductsToCartTest();
            //add multiple different searched products ("Tilapia", "Tiktilaok Manok") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Single Shop Dashboard Page Product To Checkout Tests", () => {

        //Test 014 -> add single shop dashboard product ("Quake Overload") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Single Shop Dashboard Page Product To Checkout Test (as a guest)", async function () {
            //add single shop dashboard product ("Quake Overload") to cart test (as a guest)
            await testMethods.addSingleShopDashPageProductToCartTest();
            //add single shop dashboard product ("Quake Overload") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 014a -> add single shop dashboard product ("Quake Overload") to check out test (as a registered user)
        test("Add Single Shop Dashboard Page Product To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single shop dashboard product ("Quake Overload") to cart test (as a registered user)
            await testMethods.addSingleShopDashPageProductToCartTest();
            //add single shop dashboard product ("Quake Overload") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Add Multiple Different Shop Dashboard Page Products To Checkout Tests", () => {

        //Test 014b -> add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a guest) (the guest cannot perform the checkout, only registered user can do so)
        test("Add Multiple Different Shop Dashboard Page Products To Checkout Test (as a guest)", async function () {
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a guest)
            await testMethods.addMultipleShopDashPageProductsToCartTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a guest)
            await testMethods.addProductToCheckoutTest();
        });

        //Test 014c -> add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a registered user)
        test("Add Multiple Different Shop Dashboard Page Products To Checkout Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a registered user)
            await testMethods.addMultipleShopDashPageProductsToCartTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to check out test (as a registered user)
            await testMethods.addProductToCheckoutTest();
        });

    });

    describe("Update Product Quantity In Cart Test", () => {

        //Test 015 -> update single featured product ("Burnikk") quantity in cart test
        test("Update Single Featured Product Quantity In Cart Test", async function () {
            //add single featured product ("Burnikk") to cart test
            await testMethods.addSingleFeaturedProductToCartTest();
            //update single featured product ("Burnikk") quantity in shopping cart modal test
            await testMethods.updateProductQuantityInShopCartModalTest();
        });

    });

    describe("Remove Product(s) From Cart Tests", () => {

        //Test 016 -> remove set single product ("Buldit") from cart test
        test("Remove Set Single Product From Cart Test (as a guest)", async function () {
            //add multiple featured products to cart test (as a guest)
            await testMethods.addMultipleFeaturedProductsToCartTest();
            //remove set single product ("Buldit") from cart test (as a guest)
            await testMethods.removeProductFromShopCartModalTest();
        });

        //Test 016a -> remove all products from cart (with "Clear Basket" button) test
        test("Remove All Products From Cart (Clear Basket) Test (as a guest)", async function () {
            //add multiple featured products to cart test (as a guest)
            await testMethods.addMultipleFeaturedProductsToCartTest();
            //remove all products from cart (with "Clear Basket" button) test (as a guest)
            await testMethods.removeProductFromShopCartModalClearBasketTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


