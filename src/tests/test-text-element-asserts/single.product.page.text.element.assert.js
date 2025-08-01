"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { SingleProductPage } = require("../../pages/single.product.page.js");

class SingleProductPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product page text element assert test method
    async isSingleProductPageTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert the single product page back to shop is as expected
        const singleProductPageBackToShopLinkText = await singleProductPage.getSingleProductPageBackToShopLinkText();
        assert.strictEqual(singleProductPageBackToShopLinkText, "  Back to shop", "The single product page title doesn't match expectations.");
        //assert the single product page product size subtext is as expected
        const singleProductPageProductSizeSubtext = await singleProductPage.getSingleProductPageProductSizeSubtext();
        assert.strictEqual(singleProductPageProductSizeSubtext, "Lens Width and Frame Size", "The single product page product size subtext doesn't match expectations.");
        //assert the single product page product choose color subtext is as expected
        const singleProductPageProductColorSubtext = await singleProductPage.getSingleProductPageProductChooseColorSubtext();
        assert.strictEqual(singleProductPageProductColorSubtext, "Choose Color", "The single product page product choose color subtext doesn't match expectations.");
        //recommended products section
        //assert the single product page recommended products section title is as expected
        const singleProductPageRecommendedProductsSectionTitle = await singleProductPage.getSingleProductPageRecommendedProductsSectionTitle();
        assert.strictEqual(singleProductPageRecommendedProductsSectionTitle, "Recommended", "The single product page recommended products section title doesn't match expectations.");
        //assert the single product page recommended products see all link text is as expected
        const singleProductPageRecommendedProductsSeeAllLinkText = await singleProductPage.getSingleProductPageRecommendedProductsSeeAllLinkText();
        assert.strictEqual(singleProductPageRecommendedProductsSeeAllLinkText, "See All", "The single product page recommended products see all link text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = SingleProductPageTextElementAssert;