import {test as base} from '@playwright/test';
import  LoginPage  from '../pageObjects/pages/login.page';
import ClientPage from '../pageObjects/pages/client.page';

export const test = base.extend<{ 
    loginPage: LoginPage
    clientPage: ClientPage 
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    clientPage: async ({ page }, use) => {
        await use(new ClientPage(page));
    }
});
