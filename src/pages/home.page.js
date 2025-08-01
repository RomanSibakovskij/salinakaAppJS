"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");

class HomePage extends BasePage{

    constructor(driver) {
        super(driver);

        //home page web elements
        //main section
        //banner
        this._homePageBannerImage = By.xpath("//div[@class='banner-img']/img");
        this._homePageBannerImageTitle = By.xpath("//div[@class='banner-desc']/h1");
        this._homePageBannerText = By.xpath("//div[@class='banner-desc']/p");
        this._homePageBannerShopNowButton = By.xpath("//div[@class='banner-desc']/a");
        //featured products
        this._homePageFeaturedProductsSectionTitle = By.xpath("//div[@class='display'][1]//h1");
        this._homePageFeaturedProductsSeeAllLink = By.xpath("//div[@class='display'][1]/div[1]/a");
        //list elements
        this._homePageFeaturedProductsImgLinkElements = By.xpath("//div[@class='display'][1]//img");
        this._homePageFeaturedProductsNameElements = By.xpath("//div[@class='display'][1]/div[2]//h2");
        this._homePageFeaturedProductsDescriptionElements = By.xpath("//div[@class='display'][1]/div[2]//p");
        //recommended products
        this._homePageRecommendedProductsSectionTitle = By.xpath("//div[@class='display'][2]//h1");
        this._homePageRecommendedProductsSeeAllLink = By.xpath("//div[@class='display'][2]/div[1]/a");
        //list elements
        this._homePageRecommendedProductsImgLinkElements = By.xpath("//div[@class='display'][2]//img");
        this._homePageRecommendedProductsNameElements = By.xpath("//div[@class='display'][2]/div[2]//h2");
        this._homePageRecommendedProductsDescriptionElements = By.xpath("//div[@class='display'][2]/div[2]//p");
        //footer
        this._footerDeveloperSubtext = By.xpath("//footer/div[1]//span");
        this._footerDeveloperGitHubLink = By.xpath("//footer/div[1]//a");
        this._footerSalinakaLogo = By.xpath("//footer/div[2]//img");
        this._footerCopyrightText = By.xpath("//footer/div[2]/h5");
        this._footerForkProjectSubtext = By.xpath("//footer/div[3]//span");
        this._footerForkProjectLink = By.xpath("//footer/div[3]//a");
    }

    //click set featured product link method
    async clickSetFeaturedProductLink(index){
        const setFeaturedProductLink = await this.driver.findElements(this._homePageFeaturedProductsImgLinkElements);
        await setFeaturedProductLink[index].click();
    }

    //click set recommended product link method
    async clickSetRecommendedProductLink(index){
        const setRecommendedProductLink = await this.driver.findElements(this._homePageRecommendedProductsImgLinkElements);
        await setRecommendedProductLink[index].click();
    }

    //home page product data getters
    //featured products
    async getHomePageFeaturedProductName() {
        const elements = await this.driver.findElements(this._homePageFeaturedProductsNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHomePageFeaturedProductDesc() {
        const elements = await this.driver.findElements(this._homePageFeaturedProductsDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    //recommended products
    async getHomePageRecommendedProductName() {
        const elements = await this.driver.findElements(this._homePageRecommendedProductsNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page recommended product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHomePageRecommendedProductDesc() {
        const elements = await this.driver.findElements(this._homePageRecommendedProductsDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page recommended product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    //home page text element getters
    //banner
    async getHomePageBannerImgTitle(){
        const homePageBannerImgTitle = await this.driver.findElement(this._homePageBannerImageTitle);
        return await homePageBannerImgTitle.getText();
    }
    async getHomePageBannerImgText(){
        const homePageBannerImgText = await this.driver.findElement(this._homePageBannerText);
        return await homePageBannerImgText.getText();
    }

    //featured products
    async getHomePageFeaturedProductsSectionTitle(){
        const homePageFeaturedProductsSectionTitle = await this.driver.findElement(this._homePageFeaturedProductsSectionTitle);
        return await homePageFeaturedProductsSectionTitle.getText();
    }
    async getHomePageFeaturedProductsSeeAllLinkText(){
        const homePageFeaturedProductsSeeAllLinkText = await this.driver.findElement(this._homePageFeaturedProductsSeeAllLink);
        return await homePageFeaturedProductsSeeAllLinkText.getText();
    }

    //recommended products
    async getHomePageRecommendedProductsSectionTitle(){
        const homePageRecommendedProductsSectionTitle = await this.driver.findElement(this._homePageRecommendedProductsSectionTitle);
        return await homePageRecommendedProductsSectionTitle.getText();
    }
    async getHomePageRecommendedProductsSeeAllLinkText(){
        const homePageRecommendedProductsSeeAllLinkText = await this.driver.findElement(this._homePageRecommendedProductsSeeAllLink);
        return await homePageRecommendedProductsSeeAllLinkText.getText();
    }

    //footer section
    async getFooterDeveloperSubtext(){
        const footerDeveloperSubtext = await this.driver.findElement(this._footerDeveloperSubtext);
        return await footerDeveloperSubtext.getText();
    }
    async getFooterCopyrightText(){
        const footerCopyrightText = await this.driver.findElement(this._footerCopyrightText);
        return await footerCopyrightText.getText();
    }
    async getFooterForkProjectSubtext(){
        const footerForkProjectSubtext = await this.driver.findElement(this._footerForkProjectSubtext);
        return await footerForkProjectSubtext.getText();
    }

    //home page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageBannerImage,
            this._homePageBannerImageTitle,
            this._homePageBannerText,
            this._homePageBannerShopNowButton,
            this._homePageFeaturedProductsSectionTitle,
            this._homePageFeaturedProductsSeeAllLink,
            this._homePageFeaturedProductsImgLinkElements,
            this._homePageFeaturedProductsNameElements,
            this._homePageFeaturedProductsDescriptionElements,
            this._homePageRecommendedProductsSectionTitle,
            this._homePageRecommendedProductsSeeAllLink,
            this._homePageRecommendedProductsImgLinkElements,
            this._homePageRecommendedProductsNameElements,
            this._homePageRecommendedProductsDescriptionElements,
            this._footerDeveloperSubtext,
            this._footerDeveloperGitHubLink,
            this._footerSalinakaLogo,
            this._footerCopyrightText,
            this._footerForkProjectSubtext,
            this._footerForkProjectLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { HomePage };