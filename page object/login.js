
const { test, expect } = require('@playwright/test');
class login {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("//input[@id='username']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.submitButton = page.locator("//button[@id='submit']");
        this.msg=page.locator("text=Logged In Successfully");

    }


    async loginToApplication(username, password) 
    {
       await this.page.goto("https://practicetestautomation.com/practice-test-login/");
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
    async verifyLoginSuccess() {
        await expect(this.msg).toBeVisible();
    }

    
}

module.exports = { login };