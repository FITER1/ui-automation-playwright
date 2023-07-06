import { test } from '../../fixtures/basePage';
import { getCredentials } from '../../fixtures/credentials';

test.describe('client management interactions - @client', () => {
    test.beforeEach(async ({ loginPage,clientPage }) => {
        await loginPage.navigateToLoginPage();
        const { username, password } = getCredentials();
        await loginPage.login(username, password);
        await clientPage.navigateToClientPage();
    });

    test.only('create new client', async ({ clientPage }) => {
        await clientPage.createClient();
    });

    test('edit an existing client', async ({ clientPage }) => {
        await clientPage.editClient();
    });
});
