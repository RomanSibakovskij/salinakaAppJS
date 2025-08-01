"use strict"

const {By} = require("selenium-webdriver");

const BasePage = require("./utilities/base.page.js");
const {warn} = require("./utilities/logger");

class AccountDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //account dashboard page web elements
        //account dashboard navbar
        this._accountDashboardNavLinkElements = By.xpath("//ul[@class='user-tab-menu']/li");
        //account card
        this._accountDashboardProfileCoverImg = By.xpath("//div[@class='user-profile-banner-wrapper']/img");
        this._accountDashboardProfileImg = By.xpath("//div[@class='user-profile-avatar-wrapper']/img");
        this._accountDashboardEditAccountButton = By.xpath("//button[@class='button button-small user-profile-edit']");
        //account data elements
        this._accountDashboardAccountUsername = By.xpath("//div[@class='user-profile-details']/h2");
        this._accountDashboardEmailSubtext = By.xpath("//div[@class='user-profile-details']/span[1]");
        this._accountDashboardEmail = By.xpath("//div[@class='user-profile-details']/h5[1]");
        this._accountDashboardAddressSubtext = By.xpath("//div[@class='user-profile-details']/span[2]");
        this._accountDashboardAddress = By.xpath("//div[@class='user-profile-details']/h5[2]");
        this._accountDashboardMobileSubtext = By.xpath("//div[@class='user-profile-details']/span[3]");
        this._accountDashboardMobile = By.xpath("//div[@class='user-profile-details']/h5[3]");
        this._accountDashboardDateJoinedSubtext = By.xpath("//div[@class='user-profile-details']/span[4]");
        this._accountDashboardDateJoined = By.xpath("//div[@class='user-profile-details']/h5[4]");
    }

    //click "Edit Account" button method
    async clickEditAccountButton(){
        const editAccountButton = await this.driver.findElement(this._accountDashboardEditAccountButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: editAccountButton }).click().perform();
    }

    //account dashboard page account data getters
    async getAccountDashPageAccountUsername(){
        const accountDashPageAccountUsername = await this.driver.findElement(this._accountDashboardAccountUsername);
        return await accountDashPageAccountUsername.getText();
    }
    async getAccountDashPageAccountEmail(){
        const accountDashPageAccountEmail = await this.driver.findElement(this._accountDashboardEmail);
        return await accountDashPageAccountEmail.getText();
    }
    async getAccountDashPageAccountAddress(){
        const accountDashPageAccountAddress = await this.driver.findElement(this._accountDashboardAddress);
        return await accountDashPageAccountAddress.getText();
    }
    async getAccountDashPageAccountMobile(){
        const accountDashPageAccountMobile = await this.driver.findElement(this._accountDashboardMobile);
        return await accountDashPageAccountMobile.getText();
    }
    async getAccountDashPageAccountDateJoined(){
        const accountDashPageAccountDateJoined = await this.driver.findElement(this._accountDashboardDateJoined);
        return await accountDashPageAccountDateJoined.getText();
    }

    //account dashboard page text element getters
    //account dashboard page navbar link
    async getAccountDashPageNavbarLinkText() {
        const elements = await this.driver.findElements(this._accountDashboardNavLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    warn('Failed to get account dashboard page navbar link text(s):', error.message);
                    return '';
                }
            })
        );
    }

    //account data section
    async getAccountDashPageEmailSubtext(){
        const accountDashPageEmailSubtext = await this.driver.findElement(this._accountDashboardEmailSubtext);
        return await accountDashPageEmailSubtext.getText();
    }
    async getAccountDashPageAddressSubtext(){
        const accountDashPageAddressSubtext = await this.driver.findElement(this._accountDashboardAddressSubtext);
        return await accountDashPageAddressSubtext.getText();
    }
    async getAccountDashPageMobileSubtext(){
        const accountDashPageMobileSubtext = await this.driver.findElement(this._accountDashboardMobileSubtext);
        return await accountDashPageMobileSubtext.getText();
    }
    async getAccountDashPageDateJoinedSubtext(){
        const accountDashPageDateJoinedSubtext = await this.driver.findElement(this._accountDashboardDateJoinedSubtext);
        return await accountDashPageDateJoinedSubtext.getText();
    }

    //account dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAccountDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._accountDashboardNavLinkElements,
            this._accountDashboardProfileCoverImg,
            this._accountDashboardProfileImg,
            this._accountDashboardEditAccountButton,
            this._accountDashboardEmailSubtext,
            this._accountDashboardEmail,
            this._accountDashboardAddressSubtext,
            this._accountDashboardAddress,
            this._accountDashboardMobileSubtext,
            this._accountDashboardDateJoinedSubtext,
            this._accountDashboardDateJoined
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { AccountDashboardPage };