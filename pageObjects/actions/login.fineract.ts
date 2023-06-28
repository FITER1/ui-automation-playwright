import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export default class LoginActions {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async login(username: string, password: string) {
        await this.page.fill(locators.LOGIN_PAGE.usernameTextBox, username);
        await this.page.fill(locators.LOGIN_PAGE.passwordTextBox, password);
        await this.page.click(locators.LOGIN_PAGE.signInButton);
        await this.page.waitForTimeout(2000);
    }

    public async logout() {
        await this.page.waitForSelector(locators.LOGIN_PAGE.userMenu);
        await this.page.hover(locators.LOGIN_PAGE.userMenu);
        await this.page.waitForSelector(locators.LOGIN_PAGE.logout, { state: 'visible' });
        await this.page.click(locators.LOGIN_PAGE.logout);

    }

    public async verifyLogin() {
        await this.page.waitForSelector(locators.LOGIN_PAGE.userMenu);
        await this.page.locator(locators.LOGIN_PAGE.userMenu).isVisible();
    }

    public async verifyLogout() {
        await this.page.waitForSelector(locators.LOGIN_PAGE.signInButton);
    }

}
