"use strict"

const BaseTest = require("../utilities/base.test.js");
const { ShopDashboardPage } = require("../../pages/shop.dashboard.page.js");

const Logger = require("../../pages/utilities/logger.js");

class ShopDashboardPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shop dashboard page data logger method
    async logShopDashboardPageData(){
        const shopDashboardPage = new ShopDashboardPage(this.driver);
        console.log("Shop dashboard page displayed product data: " + "\n");
        //log shop dashboard page product names
        const shopDashPageProductNames = await shopDashboardPage.getShopDashPageProductName();
        Logger.info("Shop dashboard page product names: " + shopDashPageProductNames);
        //log shop dashboard page product descriptions
        const shopDashPageProductDescriptions = await shopDashboardPage.getShopDashPageProductDescription();
        Logger.info("Shop dashboard page product descriptions: " + shopDashPageProductDescriptions);
        //log shop dashboard page product unit price
        const shopDashPageProductUnitPrices = await shopDashboardPage.getShopDashPageProductUnitPrice();
        Logger.info("Shop dashboard page product unit prices: " + shopDashPageProductUnitPrices);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShopDashboardPageDataLogger;