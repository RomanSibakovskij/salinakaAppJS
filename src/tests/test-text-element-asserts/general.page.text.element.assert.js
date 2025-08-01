"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { GeneralPage } = require("../../pages/general.page.js");

class GeneralPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //header navbar section
        //assert the general page header navbar home link text is as expected
        const generalPageHeaderNavHomeLinkText = await generalPage.getHeaderNavbarHomePageLinkText();
        assert.strictEqual(generalPageHeaderNavHomeLinkText, "Home", "The general page header navbar home link text doesn't match expectations.");
        //assert the general page header navbar shop page link text is as expected
        const generalPageHeaderNavShopLinkText = await generalPage.getHeaderNavbarShopLinkText();
        assert.strictEqual(generalPageHeaderNavShopLinkText, "Shop", "The general page header navbar shop link text doesn't match expectations.");
        //assert the general page header navbar featured page link text is as expected
        const generalPageHeaderNavFeaturedLinkText = await generalPage.getHeaderNavbarFeaturedLinkText();
        assert.strictEqual(generalPageHeaderNavFeaturedLinkText, "Featured", "The general page header navbar featured link text doesn't match expectations.");
        //assert the general page header navbar recommended page link text is as expected
        const generalPageHeaderNavRecommendedLinkText = await generalPage.getHeaderNavbarRecommendedLinkText();
        assert.strictEqual(generalPageHeaderNavRecommendedLinkText, "Recommended", "The general page header navbar recommended link text doesn't match expectations.");

    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = GeneralPageTextElementAssert;