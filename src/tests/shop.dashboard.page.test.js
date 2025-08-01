const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Shop Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(160000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single Shop Dashboard Page Product To Cart Tests", () => {

        //Test 010 -> add single shop dashboard product ("Quake Overload") to cart test (as a guest)
        test("Add Single Shop Dashboard Page Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleShopDashPageProductToCartTest();
        });

        //Test 010a -> add single shop dashboard product ("Quake Overload") to cart test (as a registered user)
        test("Add Single Shop Dashboard Page Product To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add single shop dashboard product ("Quake Overload") to cart test (as a registered user)
            await testMethods.addSingleShopDashPageProductToCartTest();
        });

    });

    describe("Add Multiple Different Shop Dashboard Page Products To Cart Tests", () => {

        //Test 010b -> add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a guest)
        test("Add Multiple Different Shop Dashboard Page Products To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleShopDashPageProductsToCartTest();
        });

        //Test 010c -> add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a registered user)
        test("Add Multiple Different Shop Dashboard Page Products To Cart Test (as a registered user)", async function () {
            //navigate user to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account creation test
            await testMethods.validUserAccountCreationTest();
            //add multiple different shop dashboard products ("Very Nice", "Sugat") to cart test (as a registered user)
            await testMethods.addMultipleShopDashPageProductsToCartTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});