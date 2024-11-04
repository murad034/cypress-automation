// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from "../pages/login";

// -- This is a login command --
Cypress.Commands.add('guideLogin', (mobileNo, password) => {
    //cy.visit('http://localhost:8000')
    cy.visit('https://uat-ehaj.oss.net.bd')
    Login.clickHeaderLogin();
    Login.clickHeaderSocialGuideLogin();
    Login.setMobileNo(mobileNo)
    Login.setPassword(password)
    Login.clickSignIn()
    //cy.wait(5000)
    cy.url().should('include', '/my-desk')
})
