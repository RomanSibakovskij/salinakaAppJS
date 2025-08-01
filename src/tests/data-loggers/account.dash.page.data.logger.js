"use strict"

const BaseTest = require("../utilities/base.test.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");

const Logger = require("../../pages/utilities/logger.js");

class AccountDashPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //account dashboard page account data logger method
    async logAccountDashPageAccountData(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        console.log("Account dashboard page displayed data: " + "\n");
        //log account dashboard page account username
        const accountDashPageAccountUsername = await accountDashboardPage.getAccountDashPageAccountUsername();
        Logger.info("Account dashboard page account username: " + accountDashPageAccountUsername);
        //log account dashboard page account email
        const accountDashPageAccountEmail = await accountDashboardPage.getAccountDashPageAccountEmail();
        Logger.info("Account dashboard page account email: " + accountDashPageAccountEmail);
        //log account dashboard page account address
        const accountDashPageAccountAddress = await accountDashboardPage.getAccountDashPageAccountAddress();
        Logger.info("Account dashboard page account address: " + accountDashPageAccountAddress);
        //log account dashboard page account mobile
        const accountDashPageAccountMobile = await accountDashboardPage.getAccountDashPageAccountMobile();
        Logger.info("Account dashboard page account mobile: " + accountDashPageAccountMobile);
        //log account dashboard page account date joined
        const accountDashPageAccountDateJoined = await accountDashboardPage.getAccountDashPageAccountDateJoined();
        Logger.info("Account dashboard page account date joined: " + accountDashPageAccountDateJoined + "\n");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AccountDashPageDataLogger;