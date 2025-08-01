"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");

class ShopDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single category dashboard page web elements
        //header
        this._shopDashPageHeaderFilterModalButton = By.xpath("//div[@class='filters-toggle']/button");
        //main
        this._shopDashPageFoundText = By.xpath("//div[@class='product-list-header-title']/h5"); //used for assertions
        //product list elements
        this._shopDashPageProductImgLinkElements = By.xpath("//section//img");
        this._shopDashPageProductNameElements = By.xpath("//section//div[@class='product-details']/h5");
        this._shopDashPageProductDescElements = By.xpath("//section//div[@class='product-details']/p");
        this._shopDashPageProductUnitPriceElements = By.xpath("//section//div[@class='product-details']/h4");
        this._shopDashPageAddToBasketButtonElements = By.xpath("//section//button[@class='product-card-button button-small button button-block ']");
        //singular elements
        this._shopDashPageShowMoreButton = By.xpath("//button[@class='button button-small']");
    }

    //click upper header "Filter" modal button method
    async clickUpperHeaderFilterButton(){
        const upperHeaderFilterButton = await this.driver.findElement(this._shopDashPageHeaderFilterModalButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: upperHeaderFilterButton }).click().perform();
    }

    //hover over set product card method
    async hoverOverSetProductCard(index){
        const setProductCard = await this.driver.findElements(this._shopDashPageProductImgLinkElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setProductCard[index] }).perform();
    }

    //click set product card "Add to basket" button method
    async clickSetProductAddToBasketButton(index){
        const setProductAddToBasketButton = await this.driver.findElements(this._shopDashPageAddToBasketButtonElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setProductAddToBasketButton[index] }).click().perform();
    }

    //click "Show More" button method
    async clickShowMoreButton(){
        const showMoreButton = await this.driver.findElement(this._shopDashPageShowMoreButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: showMoreButton }).click().perform();
    }

    //shop dashboard page product data getters
    async getShopDashPageProductName(){
        const elements = await this.driver.findElements(this._shopDashPageProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shop dashboard product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopDashPageProductDescription(){
        const elements = await this.driver.findElements(this._shopDashPageProductDescElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shop dashboard product description(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopDashPageProductUnitPrice(){
        const elements = await this.driver.findElements(this._shopDashPageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shop dashboard product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //shop dashboard page text (found product) getter
    async getShopDashPageFoundText(){
        const shopDashPageFoundText = await this.driver.findElement(this._shopDashPageFoundText);
        return await shopDashPageFoundText.getText();
    }

    //shop dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShopDashPageWebElementDisplayed(){
        const elementsToCheck = [
            //this._shopDashPageHeaderFilterModalButton, //searched product page doesn't have this element
            this._shopDashPageProductImgLinkElements,
            this._shopDashPageProductNameElements,
            this._shopDashPageProductDescElements,
            this._shopDashPageProductUnitPriceElements,
            //this._shopDashPageShowMoreButton //searched product page doesn't have this element
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { ShopDashboardPage };