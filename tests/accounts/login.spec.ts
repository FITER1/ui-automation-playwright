import { test } from '../../fixtures/basePage';
import { getCredentials } from '../../fixtures/credentials';

test.describe('Login and Logout from UI - @login', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        const { username, password } = getCredentials();
        await loginPage.login(username, password);
    });

    test('Login with valid credentials and verify login', async ({ loginPage }) => {
        await loginPage.verifyLogin();
    });

    test('login and verify logout works', async ({ loginPage }) => {
        await loginPage.logout();
        await loginPage.verifyLogout();
    });
});
