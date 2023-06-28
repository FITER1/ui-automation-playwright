import { Page } from "@playwright/test";
import { locators } from "../locators/locators";

export default class ClientActions {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async createNewClient() {
        await this.page.click(locators.CLIENTS_PAGE.createClientButton);
        await this.page.pause(2000);
    }

    public async editClient() {

    }
}
