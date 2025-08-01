"use strict";

class BasePage{
    constructor(driver){this.driver = driver;}

    //short wait method (for elements to load)
    async shortWaitForElementLoad() {
        const elementLoadTime = 2100;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

    //wait method (for elements to load)
    async waitForElementLoad() {
        const elementLoadTime = 4300;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

}

module.exports = BasePage;