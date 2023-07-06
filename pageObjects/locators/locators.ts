
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
        legalFormSelector: '#legalFormId',
        clientFirstName: '[aria-label="First name*"]',
        clientLastName: '[aria-label="Last name*"]',
        clientMobileNumber: '[aria-label="Mobile number"]',
        clientDateOfBirth: '#dateofbirth',
        dateButton: 'button:has-text("27")',
        yearMonthButton: 'button:has-text("January 2001")',
        prevMonthButton: 'button:has-text("")',
        monthButton: 'button:has-text("May")',
        dayButton: 'button:has-text("01")',
        externalId: '[aria-label="External ID"]',
        activeCheckbox: '#activeCheckbox',
        staffSelector: 'a:has-text("--Select Staff--")',
        staffListitem: 'li:has-text("--Select Staff--")',
        submitButton: 'button:has-text("Submit")',
        editLink: 'a:has-text(" Edit")',
        cancelButton: 'button:has-text("Cancel")',
        clientInfo: 'text=Client Number: 000000011 | External ID: 1991101011 | Staff:',
        clientHeading: 'h1:has-text(" Robert Jackson Client Number: 000000011 | External ID: 1991101011 | Staff:")',
        clientName: 'text=Robert Jackson',
    },
    ACCOUNTS_PAGE: {

    }

}

