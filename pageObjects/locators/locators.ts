
export const locators = {
    URLS:{
        BASE_URL: 'https://demo.fiter.io/',
        CLIENTS_URL: 'https://demo.fiter.io/#/clients',
    },
    LOGIN_PAGE: { 
        usernameTextBox: "#uid",
        passwordTextBox: "#pwd",
        signInButton: "#login-button",
        userMenu: "#user-menu",
        userDropdown: "#user-dropdown",
        logout:"#logout",
          
    },
    HOME_PAGE: {
        homePageTitle: "Fiter Demo",
        homePageHeader: "Fiter Demo",
        homePageSubHeader: "Fiter Demo",
        clientsMenuItem: '#swatch-menu >> text=Clients',
    },
    DASHBOARD_PAGE: {
        dashboardPageTitle: "Fiter Demo",
        dashboardPageHeader: "Fiter Demo",
    },
    ADMIN_PAGE: {
    },
    CLIENT_PAGE: {
        createClientButton: 'a:has-text("Create Client")',
        legalFormSelector: '#legalFormId',
        clientFirstName: '#firstname',
        clientLastName: '#lastname',
        clientMobileNumber: '#mobileNo',
        clientDateOfBirth: '#dateofbirth',
        externalId: '#externalId',
        activeCheckbox: '#activeCheckbox',
        submitButton: '#save',
        clientInfo: 'text=Client Number: 000000011 | External ID: 1991101011 | Staff:',
        clientHeading: 'h1:has-text(" Robert Jackson Client Number: 000000011 | External ID: 1991101011 | Staff:")',
        clientName: 'text=Robert Jackson',
    },
    ACCOUNTS_PAGE: {

    }

}

