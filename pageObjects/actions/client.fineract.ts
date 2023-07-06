import { Page } from 'playwright';
import { locators } from '../locators/locators';

export default class ClientActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.locator(locators.LOGIN_PAGE.usernameTextBox).fill(username);
        await this.page.locator(locators.LOGIN_PAGE.passwordTextBox).fill(password);
        await this.page.locator(locators.LOGIN_PAGE.signInButton).click();
    }

    async goToClients() {
        await this.page.locator(locators.URLS.BASE_URL).click();
    }

    async createClient() {
        await this.page.locator(locators.HOME_PAGE.clientsMenuItem).click();
        await this.page.locator(locators.CLIENT_PAGE.legalFormSelector).selectOption('number:1');
        await this.page.locator(locators.CLIENT_PAGE.clientFirstName).fill('Robert');
        await this.page.locator(locators.CLIENT_PAGE.clientLastName).fill('Jackson');
        await this.page.locator(locators.CLIENT_PAGE.clientMobileNumber).fill('0451267383');
        await this.page.locator(locators.CLIENT_PAGE.clientDateOfBirth).fill('19/02/1985');
        await this.page.locator(locators.CLIENT_PAGE.dateButton).click();
        await this.page.locator(locators.CLIENT_PAGE.prevMonthButton).click({clickCount: 5});
        await this.page.locator(locators.CLIENT_PAGE.monthButton).click();
        await this.page.locator(locators.CLIENT_PAGE.dayButton).click();
        await this.page.locator(locators.CLIENT_PAGE.externalId).fill('1991101011');
        await this.page.locator(locators.CLIENT_PAGE.activeCheckbox).check();
        await this.page.locator(locators.CLIENT_PAGE.staffSelector).click();
        await this.page.locator(locators.CLIENT_PAGE.submitButton).click();
    }

    async editClient() {
        await this.page.locator(locators.CLIENT_PAGE.editLink).click();
        await this.page.locator(locators.CLIENT_PAGE.legalFormSelector).selectOption('number:1');
        await this.page.locator(locators.CLIENT_PAGE.cancelButton).click();
    }

    async viewClientDetails() {
        await this.page.locator(locators.CLIENT_PAGE.clientInfo).click();
        await this.page.locator(locators.CLIENT_PAGE.clientName).click();
        await this.page.locator(locators.HOME_PAGE.clientsMenuItem).click();
    }
}
