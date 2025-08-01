"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { HomePage } = require("../../pages/home.page.js");

class HomePageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //main section
        //banner
        //assert the home page banner image title is as expected
        const homePageBannerTitle = await homePage.getHomePageBannerImgTitle();
        assert.strictEqual(homePageBannerTitle, "See everything with Clarity", "The home page banner image title doesn't match expectations.");
        //assert the home page banner image text is as expected
        const homePageBannerText = await homePage.getHomePageBannerImgText();
        assert.strictEqual(homePageBannerText, "Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.", "The home page banner image text doesn't match expectations.");
        //featured products
        //assert the home page featured products section title is as expected
        const homePageFeaturedProductsSectionTitle = await homePage.getHomePageFeaturedProductsSectionTitle();
        assert.strictEqual(homePageFeaturedProductsSectionTitle, "Featured Products", "The home page featured products section title doesn't match expectations.");
        //assert the home page featured products section 'See All' link text is as expected
        const homePageFeaturedProductsSeeAllLinkText = await homePage.getHomePageFeaturedProductsSeeAllLinkText();
        assert.strictEqual(homePageFeaturedProductsSeeAllLinkText, "See All", "The home page featured products section 'See All' link text doesn't match expectations.");
        //recommended products
        //assert the home page recommended products section title is as expected
        const homePageRecommendedProductsSectionTitle = await homePage.getHomePageRecommendedProductsSectionTitle();
        assert.strictEqual(homePageRecommendedProductsSectionTitle, "Recommended Products", "The home page recommended products section title doesn't match expectations.");
        //assert the home page recommended products section 'See All' link text is as expected
        const homePageRecommendedProductsSeeAllLinkText = await homePage.getHomePageRecommendedProductsSeeAllLinkText();
        assert.strictEqual(homePageRecommendedProductsSeeAllLinkText, "See All", "The home page recommended products section 'See All' link text doesn't match expectations.");
        //footer section
        //assert the home page footer developer subtext is as expected
        const homePageFooterDevSubtext = await homePage.getFooterDeveloperSubtext();
        assert.strictEqual(homePageFooterDevSubtext, "Developed by JULIUS GUEVARRA", "The home page footer developer subtext doesn't match expectations.");
        //assert the home page footer copyright text is as expected
        const homePageFooterCopyrightText = await homePage.getFooterCopyrightText();
        assert.strictEqual(homePageFooterCopyrightText, "© 2025", "The home page footer copyright text doesn't match expectations.");
        //assert the home page footer fork project subtext is as expected
        const homePageFooterForkProjectSubtext = await homePage.getFooterForkProjectSubtext();
        assert.strictEqual(homePageFooterForkProjectSubtext, "Fork this project  HERE", "The home page footer fork project subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageTextElementAssert;