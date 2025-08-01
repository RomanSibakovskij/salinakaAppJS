"use strict"

const assert = require("node:assert");
const BaseTest = require("../../utilities/base.test.js");
const ShopDashPageFilterModal = require("../../../pages/modals/shop.dash.page.filter.modal.js");

class ShopDashFilterModalTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shop dashboard page filter modal text element assert test method
    async isShopDashPageTextElementAsExpected(){
        const shopDashPageFilterModal = new ShopDashPageFilterModal(this.driver);
        //assert the shop dashboard page filter modal brand subtext is as expected
        const shopDashPageFilterModalBrandSubtext = await shopDashPageFilterModal.getShopDashPageFilterModalBrandSubtext();
        assert.strictEqual(shopDashPageFilterModalBrandSubtext, "Brand", "The shop dashboard page filter modal brand subtext doesn't match expectations.");
        //assert the shop dashboard page filter modal sort by subtext is as expected
        const shopDashPageFilterModalSortBySubtext = await shopDashPageFilterModal.getShopDashPageFilterModalSortBySubtext();
        assert.strictEqual(shopDashPageFilterModalSortBySubtext, "Sort By", "The shop dashboard page filter modal sort by subtext doesn't match expectations.");
        //assert the shop dashboard page filter modal price range subtext is as expected
        const shopDashPageFilterModalPriceRangeSubtext = await shopDashPageFilterModal.getShopDashPageFilterModalPriceRangeSubtext();
        assert.strictEqual(shopDashPageFilterModalPriceRangeSubtext, "Price Range", "The shop dashboard page filter modal price range subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShopDashFilterModalTextElementAssert;