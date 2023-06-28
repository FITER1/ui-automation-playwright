import {Page } from "@playwright/test";
import LoginActions from "../actions/login.fineract";
import { locators } from "../locators/locators";

export default class LoginPage {
    page: Page;
    loginActions: LoginActions;
    constructor(page: Page) {
        this.page = page;
        this.loginActions = new LoginActions(page);
    }
    
    public async navigateToLoginPage() {
        await this.page.goto(locators.URLS.BASE_URL);
    }

    public async login(username: string, password: string) {
        await this.loginActions.login(username, password);
    }

    public async logout() {
        await this.loginActions.logout();
    }

    public async verifyLogin() {
        await this.loginActions.verifyLogin();
    }

    public async verifyLogout() {
        await this.loginActions.verifyLogout();
    }
}