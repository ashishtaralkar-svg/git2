const { test, expect } = require('@playwright/test');
const { login } = require('../page object/login');
const logindata = JSON.parse(JSON.stringify(require('../dataset/logindata')));

test('login test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const loginPage = new login(page);
    await loginPage.loginToApplication(logindata.username, logindata.password);
    await loginPage.verifyLoginSuccess();
    });
