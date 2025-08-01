"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("../utilities/base.page.js");

const Logger = require("../utilities/logger.js");

class ShoppingCartModal extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart modal web page elements
        this._shoppingCartModalTitle = By.xpath("//div[@class='basket-header']/h3");
        this._shoppingCartModalCloseButton = By.xpath("//div[@class='basket-header']/span");
        this._shoppingCartModalClearBasketButton = By.xpath("//div[@class='basket-header']/button");
        //list elements (if more than one added)
        this._shoppingCartModalProductQtyIncreaseButtonElements = By.xpath("//div[@class='basket-item-control']/button[1]");
        this._shoppingCartModalProductQtyDecreaseButtonElements = By.xpath("//div[@class='basket-item-control']/button[2]");
        this._shoppingCartModalProductImgElements = By.xpath("//div[@class='basket-item']//img");
        this._shoppingCartModalProductNameLinkElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-details']/a");
        this._shoppingCartModalProductQtySubtextElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[1]/span");
        this._shoppingCartModalProductQtyElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[1]/h5");
        this._shoppingCartModalProductSizeSubtextElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[2]/span");
        this._shoppingCartModalProductSizeElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[2]/h5");
        this._shoppingCartModalProductColorSubtextElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[3]/span");
        this._shoppingCartModalProductColorElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-specs']/div[3]/div");
        this._shoppingCartModalProductUnitPriceElements = By.xpath("//div[@class='basket-item']//div[@class='basket-item-price']");
        this._shoppingCartModalProductRemoveButtonElements = By.xpath("//div[@class='basket-item']//button[@class='basket-item-remove button button-border button-border-gray button-small']");
        //singular elements
        this._shoppingCartModalSubtotalPriceSubtext = By.xpath("//div[@class='basket-total']/p");
        this._shoppingCartModalSubtotalPrice = By.xpath("//div[@class='basket-total']/h2");
        this._shoppingCartModalCheckoutButton = By.xpath("//button[@class='basket-checkout-button button']");
        //sign-in to check out modal web elements
        this._shoppingCartModalSignInModalMessage = By.xpath("//div[@aria-label='Product Modal']/p");
        this._shoppingCartModalSignInModalContinueShoppingButton = By.xpath("//div[@aria-label='Product Modal']//button[1]");
        this._shoppingCartModalSignInModalSignInButton = By.xpath("//div[@aria-label='Product Modal']//button[2]");
    }

    //click set increase product quantity button method
    async clickSetIncreaseProductQtyButton(index){
        const setIncreaseProductQtyButton = await this.driver.findElements(this._shoppingCartModalProductQtyIncreaseButtonElements);
        await setIncreaseProductQtyButton[index].click();
    }

    //click set decrease product quantity button method
    async clickSetDecreaseProductQtyButton(index){
        const setDecreaseProductQtyButton = await this.driver.findElements(this._shoppingCartModalProductQtyDecreaseButtonElements);
        await setDecreaseProductQtyButton[index].click();
    }

    //click set product remove button method
    async clickSetProductRemoveButton(index){
        const setProductRemoveButton = await this.driver.findElements(this._shoppingCartModalProductRemoveButtonElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: setProductRemoveButton[index] }).click().perform();
    }

    //click "Clear Basket" button method
    async clickClearBasketButton(){
        const clearBasketButton = await this.driver.findElement(this._shoppingCartModalClearBasketButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: clearBasketButton }).click().perform();
    }

    //click "Checkout" button method
    async clickCheckoutButton(){
        const checkoutButton = await this.driver.findElement(this._shoppingCartModalCheckoutButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: checkoutButton }).click().perform();
    }

    //shopping cart modal text getters
    async getShopCartModalTitle(){
        const shopCartModalTitle = await this.driver.findElement(this._shoppingCartModalTitle);
        const fullText = await shopCartModalTitle.getText();
        const trimmedText = fullText.split('(')[0].trim();
        return await trimmedText;
    }
    async getShopCartModalSubtotalPriceSubtext(){
        const shopCartModalSubtotalPriceSubtext = await this.driver.findElement(this._shoppingCartModalSubtotalPriceSubtext);
        return await shopCartModalSubtotalPriceSubtext.getText();
    }

    //list elements
    async getShopCartModalProductQtySubtexts() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductQtySubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product quantity subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopCartModalProductSizeSubtexts() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductSizeSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product size subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopCartModalProductColorSubtexts() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductColorSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product color subtext(s):', error.message);
                    return '';
                }
            })
        );
    }

    //shopping cart modal product data getters
    async getShopCartModalProductNameLinks() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopCartModalProductQuantities() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductQtyElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getShopCartModalProductSizes() {
        const elements = await this.driver.findElements(this._shoppingCartModalProductSizeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart modal product size(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getShopCartModalSubtotalPrice(){
        const shopCartModalSubtotalPrice = await this.driver.findElement(this._shoppingCartModalSubtotalPrice);
        return await shopCartModalSubtotalPrice.getText();
    }

    //shopping cart modal sign-in modal message getter (appears only for guest, as the guest cannot check out)
    async getShopCartModalSignInModalMessage(){
        const shopCartModalSignInMessage = await this.driver.findElement(this._shoppingCartModalSignInModalMessage);
        return await shopCartModalSignInMessage.getText();
    }

    //shopping cart modal web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingCartModalWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartModalTitle,
            this._shoppingCartModalCloseButton,
            this._shoppingCartModalClearBasketButton,
            this._shoppingCartModalProductQtyIncreaseButtonElements,
            this._shoppingCartModalProductQtyDecreaseButtonElements,
            this._shoppingCartModalProductImgElements,
            this._shoppingCartModalProductNameLinkElements,
            this._shoppingCartModalProductQtySubtextElements,
            this._shoppingCartModalProductQtyElements,
            this._shoppingCartModalProductSizeSubtextElements,
            this._shoppingCartModalProductSizeElements,
            this._shoppingCartModalProductColorSubtextElements,
            this._shoppingCartModalProductColorElements,
            this._shoppingCartModalProductUnitPriceElements,
            this._shoppingCartModalProductRemoveButtonElements,
            this._shoppingCartModalSubtotalPriceSubtext,
            this._shoppingCartModalSubtotalPrice,
            this._shoppingCartModalCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = ShoppingCartModal;