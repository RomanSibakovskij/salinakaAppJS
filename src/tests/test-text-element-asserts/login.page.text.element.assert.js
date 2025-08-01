"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { LoginPage } = require("../../pages/login.page.js");

class LoginPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //login page text element assert test method
    async isLoginPageTextElementAsExpected(){
        const loginPage = new LoginPage(this.driver);
        //register input form
        //assert the login page title is as expected
        const loginPageTitle = await loginPage.getLoginPageTitle();
        assert.strictEqual(loginPageTitle, "Sign in to Salinaka", "The login page title doesn't match expectations.");
        //assert the login page email subtext is as expected
        const loginPageEmailSubtext = await loginPage.getLoginPageEmailSubtext();
        assert.strictEqual(loginPageEmailSubtext, "Email", "The login page email subtext doesn't match expectations.");
        //assert the login page password subtext is as expected
        const loginPagePasswordSubtext = await loginPage.getLoginPagePasswordSubtext();
        assert.strictEqual(loginPagePasswordSubtext, "Password", "The login page password subtext doesn't match expectations.");
        //assert the login page forgot password link ext is as expected
        const loginPageForgotPasswordLinkText = await loginPage.getLoginPageForgotPasswordLinkText();
        assert.strictEqual(loginPageForgotPasswordLinkText, "Forgot password?", "The login page forgot password link text doesn't match expectations.");
        //separator
        //assert the login page separator text is as expected
        const loginPageSeparatorText = await loginPage.getLoginPageSeparatorText();
        assert.strictEqual(loginPageSeparatorText, "OR", "The login page separator text doesn't match expectations.");
        //lower section
        //assert the login page sign in offer subtext is as expected
        const loginPageSignInSubtext = await loginPage.getLoginPageSignUpOfferSubtext();
        assert.strictEqual(loginPageSignInSubtext, "Don't have an account?", "The login page sign up offer subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = LoginPageTextElementAssert;