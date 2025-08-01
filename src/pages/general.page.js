"use strict"

const {By, Key} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");


class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);

        //general page web elements (elements that all pages share)
        //header navbar
        this._headerNavbarHomePageLogoLink = By.xpath("//div[@class='logo']/a");
        this._headerNavbarHomePageLink = By.xpath("//ul[@class='navigation-menu-main']/li[1]/a");
        this._headerNavbarShopLink = By.xpath("//ul[@class='navigation-menu-main']/li[2]/a");
        this._headerNavbarFeaturedLink = By.xpath("//ul[@class='navigation-menu-main']/li[3]/a");
        this._headerNavbarRecommendedLink = By.xpath("//ul[@class='navigation-menu-main']/li[4]/a");
        this._headerNavbarSearchBarInputField = By.xpath("//input[@class='search-input searchbar-input']");
        this._headerNavbarShoppingCartIconLink = By.xpath("//button[@class='button-link navigation-menu-link basket-toggle']");
        this._headerNavbarSignUpButton = By.xpath("//li[@class='navigation-action']/a[1]");
        this._headerNavbarSignInButton = By.xpath("//li[@class='navigation-action']/a[2]");
        this._headerNavbarUserAccountName = By.xpath("//h5[@class='text-overflow-ellipsis']");
        this._headerNavbarAccountDropdownButton = By.xpath("//div[@class='user-nav']");//appears after user logged in
        //account dropdown menu elements
        this._headerNavbarAccountDropdownAccountOption = By.xpath("//div[@class='user-nav-sub']/a");
        this._headerNavbarAccountDropdownSignOutOption = By.xpath("//div[@class='user-nav-sub']/h6");
    }

    //click header navbar "Sign Up" button method
    async clickHeaderNavbarSignUpButton(){
        const headerNavSignUpButton = await this.driver.findElement(this._headerNavbarSignUpButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: headerNavSignUpButton }).click().perform();
    }

    //click header navbar "Account" button method
    async clickAccountDropdownButton(){
        const accountDropdownButton = await this.driver.findElement(this._headerNavbarAccountDropdownButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: accountDropdownButton }).click().perform();
    }

    //click "View Account" link method
    async clickViewAccountLink(){
        const viewAccountLink = await this.driver.findElement(this._headerNavbarAccountDropdownAccountOption);
        viewAccountLink.click();
    }

    //click "Sign Out" link method
    async clickSignOutLink(){
        const signOutLink = await this.driver.findElement(this._headerNavbarAccountDropdownSignOutOption);
        signOutLink.click();
    }

    //click header "Shopping cart" link method
    async clickHeaderShoppingCartLink(){
        const headerShoppingCartLink = await this.driver.findElement(this._headerNavbarShoppingCartIconLink);
        headerShoppingCartLink.click();
    }

    //click header navbar home link method
    async clickHeaderNavbarHomeLink(){
        const headerNavbarHomeLink = await this.driver.findElement(this._headerNavbarHomePageLink);
        headerNavbarHomeLink.click();
    }

    //click header navbar shop link method
    async clickHeaderNavbarShopLink(){
        const headerNavbarShopLink = await this.driver.findElement(this._headerNavbarShopLink);
        headerNavbarShopLink.click();
    }

    //input search query into search bar input field methods
    async inputSetSearchQueryIntoSearchBarInputField(){
        const headerSearchBarInputField = await this.driver.findElement(this._headerNavbarSearchBarInputField);
        await headerSearchBarInputField.clear();
        await headerSearchBarInputField.sendKeys("Tilapia");
        await headerSearchBarInputField.sendKeys(Key.ENTER);
    }
    async inputNextSearchQueryIntoSearchBarInputField(){
        const headerSearchBarInputField = await this.driver.findElement(this._headerNavbarSearchBarInputField);
        await headerSearchBarInputField.clear();
        await headerSearchBarInputField.sendKeys("Tiktilaok Manok");
        await headerSearchBarInputField.sendKeys(Key.ENTER);
    }

    //general page text element getters
    //header navbar section
    async getHeaderNavbarHomePageLinkText(){
        const headerNavbarHomeLink = await this.driver.findElement(this._headerNavbarHomePageLink);
        return await headerNavbarHomeLink.getText();
    }
    async getHeaderNavbarShopLinkText(){
        const headerNavbarShopLink = await this.driver.findElement(this._headerNavbarShopLink);
        return await headerNavbarShopLink.getText();
    }
    async getHeaderNavbarFeaturedLinkText(){
        const headerNavbarFeaturedLink = await this.driver.findElement(this._headerNavbarFeaturedLink);
        return await headerNavbarFeaturedLink.getText();
    }
    async getHeaderNavbarRecommendedLinkText(){
        const headerNavbarRecommendedLink = await this.driver.findElement(this._headerNavbarRecommendedLink);
        return await headerNavbarRecommendedLink.getText();
    }

    //user name getter
    async getHeaderNavbarUsername(){
        const headerNavbarUsername = await this.driver.findElement(this._headerNavbarUserAccountName);
        return await headerNavbarUsername.getText();
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._headerNavbarHomePageLogoLink,
            this._headerNavbarHomePageLink,
            this._headerNavbarShopLink,
            this._headerNavbarFeaturedLink,
            this._headerNavbarRecommendedLink,
            this._headerNavbarSearchBarInputField,
            this._headerNavbarShoppingCartIconLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { GeneralPage };