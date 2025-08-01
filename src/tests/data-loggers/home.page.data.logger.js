"use strict"

const BaseTest = require("../utilities/base.test.js");
const { HomePage } = require("../../pages/home.page.js");

const Logger = require("../../pages/utilities/logger.js");

class HomePageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product data logger method
    async logHomePageProductData(){
        const homePage = new HomePage(this.driver);
        console.log("Home page displayed product data: " + "\n");
        //featured products
        //log home page featured product name(s)
        const homePageFeaturedProductNames = await homePage.getHomePageFeaturedProductName();
        Logger.info("Home page featured product name(s): " + homePageFeaturedProductNames);
        //log home page featured product description(s)
        const homePageFeaturedProductDescriptions = await homePage.getHomePageFeaturedProductDesc();
        Logger.info("Home page featured product description(s): " + homePageFeaturedProductDescriptions);
        //recommended products
        //log home page recommended product name(s)
        const homePageRecommendedProductNames = await homePage.getHomePageRecommendedProductName();
        Logger.info("Home page recommended product name(s): " + homePageRecommendedProductNames);
        //log home page recommended product description(s)
        const homePageRecommendedProductDescriptions = await homePage.getHomePageRecommendedProductDesc();
        Logger.info("Home page recommended product description(s): " + homePageRecommendedProductDescriptions + "\n");
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageDataLogger;