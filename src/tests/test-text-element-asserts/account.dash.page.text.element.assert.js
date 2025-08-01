"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");

class AccountDashPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //account dashboard page text element assert test method
    async isAccountDashboardPageTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //assert the account dashboard page each navbar link text(s) match expectations (as a list)
        const accountDashPageNavLinkTextElem = await accountDashboardPage.getAccountDashPageNavbarLinkText();
        const expectedAccountDashNavLinkTextElem = ["Account", "My Wish List", "My Orders"];
        assert.deepStrictEqual(accountDashPageNavLinkTextElem, expectedAccountDashNavLinkTextElem, "The account dashboard page navbar link text(s) don't match expectations.");
        //assert the account dashboard page email subtext is as expected
        const accountDashPageEmailSubtext = await accountDashboardPage.getAccountDashPageEmailSubtext();
        assert.strictEqual(accountDashPageEmailSubtext, "Email", "The account dashboard page email subtext doesn't match expectations.");
        //assert the account dashboard page address subtext is as expected
        const accountDashPageAddressSubtext = await accountDashboardPage.getAccountDashPageAddressSubtext();
        assert.strictEqual(accountDashPageAddressSubtext, "Address", "The account dashboard page address subtext doesn't match expectations.");
        //assert the account dashboard page mobile subtext is as expected
        const accountDashPageMobileSubtext = await accountDashboardPage.getAccountDashPageMobileSubtext();
        assert.strictEqual(accountDashPageMobileSubtext, "Mobile", "The account dashboard page mobile subtext doesn't match expectations.");
        //assert the account dashboard page date joined subtext is as expected
        const accountDashPageDateJoinedSubtext = await accountDashboardPage.getAccountDashPageDateJoinedSubtext();
        assert.strictEqual(accountDashPageDateJoinedSubtext, "Date Joined", "The account dashboard page date joined subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AccountDashPageTextElementAssert;