"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

class ShopDashPageFilterModal extends BasePage{

    constructor(driver) {
        super(driver);

        //shop dashboard page filter modal web elements
        this._shopDashPageFilterModalBrandSubtext = By.xpath("//div[@class='filters-field'][1]/span");
        this._shopDashPageFilterModalBrandDropdownMenu = By.xpath("//div[@class='filters-field'][1]/select");
        //list elements
        this._shopDashPageFilterModalBrandDropdownMenuOptionElements = By.xpath("//div[@class='filters-field'][1]/select/option");
        //singular elements
        this._shopDashPageFilterModalSortBySubtext = By.xpath("//div[@class='filters-field'][2]/span");
        this._shopDashPageFilterModalSortByDropdownMenu = By.xpath("//div[@class='filters-field'][2]/select");
        //list elements
        this._shopDashPageFilterModalSortByDropdownMenuOptionElements = By.xpath("//div[@class='filters-field'][2]/select/option");
        //singular elements
        this._shopDashPageFilterModalPriceRangeSubtext = By.xpath("//div[@class='filters-field'][3]/span");
        this._shopDashPageFilterModalPriceRangeFrom = By.xpath("//div[@class='price-range-control']/input[1]");
        this._shopDashPageFilterModalPriceRangeTo = By.xpath("//div[@class='price-range-control']/input[2]");
        this._shopDashPageFilterModalPriceRangeSliderLeft = By.xpath("//div[@class='slider-handles']/div[@role='slider'][1]");
        this._shopDashPageFilterModalPriceRangeSliderRight = By.xpath("//div[@class='slider-handles']/div[@role='slider'][2]");
        this._shopDashPageFilterModalApplyFiltersButton = By.xpath("//div[@class='filters-action']/button[1]");
        this._shopDashPageFilterModalResetFiltersButton = By.xpath("//div[@class='filters-action']/button[2]");
    }

    //click product brand dropdown menu method
    async clickProductBrandDropdownMenu(){
        const productBrandDropdownMenu = await this.driver.findElement(this._shopDashPageFilterModalBrandDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: productBrandDropdownMenu }).click().perform();
    }

    //select set product brand dropdown option method
    async selectSetProductBrandDropdownOption(index){
        const setProductBrandDropdownOption = await this.driver.findElements(this._shopDashPageFilterModalBrandDropdownMenuOptionElements);
        setProductBrandDropdownOption[index].click();
    }

    //click product sort by dropdown menu method
    async clickProductSortByDropdownMenu(){
        const productSortByDropdownMenu = await this.driver.findElement(this._shopDashPageFilterModalSortByDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: productSortByDropdownMenu }).click().perform();
    }

    //select set product sort by dropdown option method
    async selectSetProductSortByDropdownOption(index){
        const setProductSortByDropdownOption = await this.driver.findElements(this._shopDashPageFilterModalSortByDropdownMenuOptionElements);
        setProductSortByDropdownOption[index].click();
    }

    async setPriceRangeSlider(minOffset, maxOffset) {
        const leftHandle = await this.driver.findElement(this._shopDashPageFilterModalPriceRangeSliderLeft);
        const rightHandle = await this.driver.findElement(this._shopDashPageFilterModalPriceRangeSliderRight);

        const actions = this.driver.actions({ bridge: true });

        //move left handle (to increase min price)
        await actions
            .move({ origin: leftHandle })
            .press()
            .move({ origin: leftHandle, x: minOffset, y: 0 })
            .release()
            .perform();

        //move right handle (to decrease max price)
        await actions
            .move({ origin: rightHandle })
            .press()
            .move({ origin: rightHandle, x: maxOffset, y: 0 })
            .release()
            .perform();
    }

    //click "Apply filters" button method
    async clickApplyFiltersButton(){
        const applyFiltersButton = await this.driver.findElement(this._shopDashPageFilterModalApplyFiltersButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: applyFiltersButton }).click().perform();
    }

    //shop dashboard page text element getters
    async getShopDashPageFilterModalBrandSubtext(){
        const shopDashPageFilterBrandSubtext = await this.driver.findElement(this._shopDashPageFilterModalBrandSubtext);
        return await shopDashPageFilterBrandSubtext.getText();
    }
    async getShopDashPageFilterModalSortBySubtext(){
        const shopDashPageFilterSortBySubtext = await this.driver.findElement(this._shopDashPageFilterModalSortBySubtext);
        return await shopDashPageFilterSortBySubtext.getText();
    }
    async getShopDashPageFilterModalPriceRangeSubtext(){
        const shopDashPageFilterPriceRangeSubtext = await this.driver.findElement(this._shopDashPageFilterModalPriceRangeSubtext);
        return await shopDashPageFilterPriceRangeSubtext.getText();
    }

    //product data (price range)
    async getShopDashPageFilterModalPriceRangeFrom(){
        const shopDashPageFilterPriceRangeFrom = await this.driver.findElement(this._shopDashPageFilterModalPriceRangeFrom);
        return await shopDashPageFilterPriceRangeFrom.getAttribute("value");
    }
    async getShopDashPageFilterModalPriceRangeTo(){
        const shopDashPageFilterPriceRangeTo = await this.driver.findElement(this._shopDashPageFilterModalPriceRangeTo);
        return await shopDashPageFilterPriceRangeTo.getAttribute("value");
    }

    //shop dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShopDashPageFilterModalWebElementDisplayed(){
        const elementsToCheck = [
            this._shopDashPageFilterModalBrandSubtext,
            this._shopDashPageFilterModalBrandDropdownMenu,
            this._shopDashPageFilterModalSortBySubtext,
            this._shopDashPageFilterModalSortByDropdownMenu,
            this._shopDashPageFilterModalPriceRangeSubtext,
            this._shopDashPageFilterModalPriceRangeSliderLeft,
            this._shopDashPageFilterModalPriceRangeSliderRight,
            this._shopDashPageFilterModalPriceRangeFrom,
            this._shopDashPageFilterModalPriceRangeTo,
            this._shopDashPageFilterModalApplyFiltersButton,
            this._shopDashPageFilterModalResetFiltersButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = ShopDashPageFilterModal;