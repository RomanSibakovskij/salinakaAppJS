"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { RegisterPage } = require("../../pages/register.page.js");

class RegisterPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //register page text element assert test method
    async isRegisterPageTextElementAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //register input form
        //assert the register page title is as expected
        const registerPageTitle = await registerPage.getRegisterPageTitle();
        assert.strictEqual(registerPageTitle, "Sign up to Salinaka", "The register page title doesn't match expectations.");
        //assert the register page full name subtext is as expected
        const registerPageFullNameSubtext = await registerPage.getRegisterPageFullNameSubtext();
        assert.strictEqual(registerPageFullNameSubtext, "* Full Name", "The register page full name subtext doesn't match expectations.");
        //assert the register page email subtext is as expected
        const registerPageEmailSubtext = await registerPage.getRegisterPageEmailSubtext();
        assert.strictEqual(registerPageEmailSubtext, "* Email", "The register page email subtext doesn't match expectations.");
        //assert the register page password subtext is as expected
        const registerPagePasswordSubtext = await registerPage.getRegisterPagePasswordSubtext();
        assert.strictEqual(registerPagePasswordSubtext, "* Password", "The register page password subtext doesn't match expectations.");
        //separator
        //assert the register page separator text is as expected
        const registerPageSeparatorText = await registerPage.getRegisterPageSeparatorText();
        assert.strictEqual(registerPageSeparatorText, "OR", "The register page separator text doesn't match expectations.");
        //lower section
        //assert the register page sign in offer subtext is as expected
        const registerPageSignInSubtext = await registerPage.getRegisterPageSignInOfferSubtext();
        assert.strictEqual(registerPageSignInSubtext, "Already have an account?", "The register page sign in offer subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = RegisterPageTextElementAssert;