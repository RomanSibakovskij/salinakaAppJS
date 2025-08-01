"use strict"

const BaseTest = require("../utilities/base.test.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");

const Logger = require("../../pages/utilities/logger.js");

class SingleProductPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product page product data logger method
    async logSingleProductPageProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        console.log("Single product page displayed product data: " + "\n");
        //log single product page product short description
        const singleProductPageProductShortDescription = await singleProductPage.getSingleProductPageProductShortDescription();
        Logger.info("Single product page product short description: " + singleProductPageProductShortDescription);
        //log single product page product name
        const singleProductPageProductName = await singleProductPage.getSingleProductPageProductName();
        Logger.info("Single product page product name: " + singleProductPageProductName);
        //log single product page product description
        const singleProductPageProductDescription = await singleProductPage.getSingleProductPageProductDescription();
        Logger.info("Single product page product description: " + singleProductPageProductDescription);
        //log single product page product unit price
        const singleProductPageProductUnitPrice = await singleProductPage.getSingleProductPageProductUnitPrice();
        Logger.info("Single product page product unit price: " + singleProductPageProductUnitPrice);
        //recommended product section
        //log single product page recommended product name(s)
        const singleProductPageRecommendedProductNames = await singleProductPage.getSingleProductPageRecommendedProductName();
        Logger.info("Single product page recommended product name(s): " + singleProductPageRecommendedProductNames);
        //log single product page recommended product description(s)
        const singleProductPageRecommendedProductDesc = await singleProductPage.getSingleProductPageRecommendedProductDesc();
        Logger.info("Single product page recommended product description(s): " + singleProductPageRecommendedProductDesc);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = SingleProductPageDataLogger;