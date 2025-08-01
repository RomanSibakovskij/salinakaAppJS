"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");

const Logger = require("./utilities/logger.js");

class SingleProductPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single product page web elements
        this._singleProductPageBackToShopLink = By.xpath("//div[@class='product-view']/a");
        //main section
        //list elements
        this._singleProductPageProductImgElements = By.xpath("//div[@class='product-modal-image-collection']//img");
        //singular elements
        this._singleProductPageProductShortDescription = By.xpath("//div[@class='product-modal-details']/span[1]");
        this._singleProductPageProductMainImage = By.xpath("//div[@class='product-modal-image-wrapper']/img");
        this._singleProductPageProductName = By.xpath("//div[@class='product-modal-details']/h1[1]");
        this._singleProductPageProductDescription = By.xpath("//div[@class='product-modal-details']/span[2]");
        this._singleProductPageProductSizeSubtext = By.xpath("//div[@class='product-modal-details']/div[2]/span");
        this._singleProductPageProductSizeDropdownMenu = By.xpath("//div[@class=' css-2b097c-container']");
        //list elements
        this._singleProductPageProductSizeDropdownOptionElements = By.xpath("");
        //singular elements
        this._singleProductPageProductChooseColorSubtext = By.xpath("//div[@class='product-modal-details']/div[3]/span");
        //list elements
        this._singleProductPageProductColorRadioButtonElements = By.xpath("//div[@class='color-chooser']/div");
        //singular elements
        this._singleProductPageProductUnitPrice = By.xpath("//div[@class='product-modal-details']/h1[2]");
        this._singleProductPageAddToBasketButton = By.xpath("//div[@class='product-modal-action']/button");
        //recommended products section
        //recommended products
        this._singleProductPageRecommendedProductsSectionTitle = By.xpath("//div[@class='display-header']/h1");
        this._singleProductPageRecommendedProductsSeeAllLink = By.xpath("//div[@class='display-header']/a");
        //list elements
        this._singleProductPageRecommendedProductsImgLinkElements = By.xpath("//div[@class='product-display-grid']//img");
        this._singleProductPageRecommendedProductsNameElements = By.xpath("//div[@class='product-display-grid']//h2");
        this._singleProductPageRecommendedProductsDescriptionElements = By.xpath("//div[@class='product-display-grid']//p");
    }

    //click product size dropdown menu method
    async clickProductSizeDropdownMenu(){
        const productSizeDropdownMenu = await this.driver.findElement(this._singleProductPageProductSizeDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: productSizeDropdownMenu }).click().perform();
    }

    //select set size product option method
    async selectSetProductSize(index){
        const sizeOptions = await this.driver.findElements(By.css('.css-govwq4-menu > div'));

        if (sizeOptions.length === 0) {
            throw new Error("No product size options were found on the product page.");
        }

        if (index < 0 || index >= sizeOptions.length) {
            throw new Error(`Invalid product size index: ${index}. Only ${sizeOptions.length} options available.`);
        }

        await sizeOptions[index].click();
    }

    //select set product color method
    async selectSetProductColor(index){
        const setProductColorButton = await this.driver.findElements(this._singleProductPageProductColorRadioButtonElements);
        await setProductColorButton[index].click();
    }

    //click "Add to basket" button method
    async clickAddToBasketButton(){
        const addToBasketButton = await this.driver.findElement(this._singleProductPageAddToBasketButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToBasketButton }).click().perform();
    }

    //single product page product data getters
    async getSingleProductPageProductShortDescription(){
        const singleProductPageProductShortDescription = await this.driver.findElement(this._singleProductPageProductShortDescription);
        return await singleProductPageProductShortDescription.getText();
    }
    async getSingleProductPageProductName(){
        const singleProductPageProductName = await this.driver.findElement(this._singleProductPageProductName);
        return await singleProductPageProductName.getText();
    }
    async getSingleProductPageProductDescription(){
        const singleProductPageProductDescription = await this.driver.findElement(this._singleProductPageProductDescription);
        return await singleProductPageProductDescription.getText();
    }
    async getSingleProductPageProductUnitPrice(){
        const singleProductPageProductUnitPrice = await this.driver.findElement(this._singleProductPageProductUnitPrice);
        return await singleProductPageProductUnitPrice.getText();
    }

    //recommended product section
    async getSingleProductPageRecommendedProductName() {
        const elements = await this.driver.findElements(this._singleProductPageRecommendedProductsNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single product page recommended product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getSingleProductPageRecommendedProductDesc() {
        const elements = await this.driver.findElements(this._singleProductPageRecommendedProductsDescriptionElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get single product page recommended product description(s):', error.message);
                    return '';
                }
            })
        );
    }

    //single product page text element getters
    async getSingleProductPageBackToShopLinkText(){
        const singleProductPageBackToShopLink = await this.driver.findElement(this._singleProductPageBackToShopLink);
        return await singleProductPageBackToShopLink.getText();
    }
    async getSingleProductPageProductSizeSubtext(){
        const singleProductPageProductSizeSubtext = await this.driver.findElement(this._singleProductPageProductSizeSubtext);
        return await singleProductPageProductSizeSubtext.getText();
    }
    async getSingleProductPageProductChooseColorSubtext(){
        const singleProductPageProductColorSubtext = await this.driver.findElement(this._singleProductPageProductChooseColorSubtext);
        return await singleProductPageProductColorSubtext.getText();
    }
    //recommended products section
    async getSingleProductPageRecommendedProductsSectionTitle(){
        const singleProductPageRecommendedProductsSectionTitle = await this.driver.findElement(this._singleProductPageRecommendedProductsSectionTitle);
        return await singleProductPageRecommendedProductsSectionTitle.getText();
    }
    async getSingleProductPageRecommendedProductsSeeAllLinkText(){
        const singleProductPageRecommendedProductsSeeAllLinkText = await this.driver.findElement(this._singleProductPageRecommendedProductsSeeAllLink);
        return await singleProductPageRecommendedProductsSeeAllLinkText.getText();
    }

    //single product page page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageBackToShopLink,
            this._singleProductPageProductImgElements,
            this._singleProductPageProductShortDescription,
            this._singleProductPageProductMainImage,
            this._singleProductPageProductName,
            this._singleProductPageProductDescription,
            this._singleProductPageProductSizeSubtext,
            this._singleProductPageProductSizeDropdownMenu,
            this._singleProductPageProductChooseColorSubtext,
            this._singleProductPageProductColorRadioButtonElements,
            this._singleProductPageProductUnitPrice,
            this._singleProductPageAddToBasketButton,
            this._singleProductPageRecommendedProductsSectionTitle,
            this._singleProductPageRecommendedProductsSeeAllLink,
            this._singleProductPageRecommendedProductsImgLinkElements
            //this._singleProductPageRecommendedProductsNameElements, //during product removal these elements aren't displayed
            //this._singleProductPageRecommendedProductsDescriptionElements //during product removal these elements aren't displayed
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage };