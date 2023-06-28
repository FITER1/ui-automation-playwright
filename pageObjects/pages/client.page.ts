import {Page } from "@playwright/test";
import ClientActions from "../actions/client.fineract";
import { locators } from "../locators/locators";

export default class ClientPage {
    page: Page;
    clientActions: ClientActions;
    constructor(page: Page) {
        this.page = page;
        this.clientActions = new ClientActions(page);
    }

    public async navigateToClientPage() {
        await this.page.goto(locators.URLS.CLIENTS_URL);
    }

    public async createClient() {
        await this.clientActions.createNewClient();
    }
    
    public async editClient() {
        await this.clientActions.editClient();
    }
    
}