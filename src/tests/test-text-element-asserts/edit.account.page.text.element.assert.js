"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const { EditAccountPage } = require("../../pages/edit.account.page.js");
const EditAccountPageModal = require("../../pages/modals/edit.account.page.modal.js");

class EditAccountPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //edit account page text element assert test method
    async isEditAccountPageTextElementAsExpected(){
        const editAccountPage = new EditAccountPage(this.driver);
        //assert the edit account page title is as expected
        const editAccountPageTitle = await editAccountPage.getEditAccountPageTitle();
        assert.strictEqual(editAccountPageTitle, "Edit Account Details", "The edit account page title doesn't match expectations.");
        //input form
        //assert the edit account page full name subtext is as expected
        const editAccountPageFullNameSubtext = await editAccountPage.getEditAccountPageFullNameSubtext();
        assert.strictEqual(editAccountPageFullNameSubtext, "* Full Name", "The edit account page full name subtext doesn't match expectations.");
        //assert the edit account page email subtext is as expected
        const editAccountPageEmailSubtext = await editAccountPage.getEditAccountPageEmailSubtext();
        assert.strictEqual(editAccountPageEmailSubtext, "* Email Address", "The edit account page email subtext doesn't match expectations.");
        //assert the edit account page address subtext is as expected
        const editAccountPageAddressSubtext = await editAccountPage.getEditAccountPageAddressSubtext();
        assert.strictEqual(editAccountPageAddressSubtext, "Address (Will be used for checkout)", "The edit account page address subtext doesn't match expectations.");
        //assert the edit account page mobile subtext is as expected
        const editAccountPageMobileSubtext = await editAccountPage.getEditAccountPageMobileSubtext();
        assert.strictEqual(editAccountPageMobileSubtext, "Mobile Number (Will be used for checkout)", "The edit account page mobile subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //edit account page modal text element assert test method
    async isEditAccountPageModalTextElementAsExpected(){
        const editAccountPageModal = new EditAccountPageModal(this.driver);
        //assert the edit account page modal title is as expected
        const editAccountPageModalTitle = await editAccountPageModal.getEditAccountPageModalTitle();
        assert.strictEqual(editAccountPageModalTitle, "Confirm Update", "The edit account page modal title doesn't match expectations.");
        //assert the edit account page modal text is as expected
        const editAccountPageModalText = await editAccountPageModal.getEditAccountPageModalText();
        assert.strictEqual(editAccountPageModalText, "To continue updating profile including your  email,\n" + "please confirm by entering your password", "The edit account page modal text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = EditAccountPageTextElementAssert;