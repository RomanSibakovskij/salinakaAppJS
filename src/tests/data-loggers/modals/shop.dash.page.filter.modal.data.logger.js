"use strict"

const BaseTest = require("../../utilities/base.test.js");
const ShopDashPageFilterModal = require("../../../pages/modals/shop.dash.page.filter.modal.js");

const Logger = require("../../../pages/utilities/logger.js");

class ShopDashPageFilterModalDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shop dashboard page filter modal data logger method
    async logShopDashPageFilterModalPriceData(){
        const shopDashPageFilterModal = new ShopDashPageFilterModal(this.driver);
        console.log("Shop dashboard page filter modal displayed price range data: " + "\n");
        //log shop dashboard page filter modal price from
        const shopDashPageFilterModalPriceFrom = await shopDashPageFilterModal.getShopDashPageFilterModalPriceRangeFrom();
        Logger.info("Shop dashboard page filter modal price (range) from: " + shopDashPageFilterModalPriceFrom);
        //log shop dashboard page filter modal price to
        const shopDashPageFilterModalPriceTo = await shopDashPageFilterModal.getShopDashPageFilterModalPriceRangeTo();
        Logger.info("Shop dashboard page filter modal price (range) to: " + shopDashPageFilterModalPriceTo);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShopDashPageFilterModalDataLogger;