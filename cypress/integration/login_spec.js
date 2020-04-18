/// <reference types="cypress" />
describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    const hasNotTopBarItems = () => {
        cy.viewport('iphone-6')
        cy.get('[data-testid="top-hamburguer"]').should('not.exist');
        cy.get('[data-testid="top-title"]').should('not.exist');
        cy.get('[data-testid="search-top-btn"]').should('not.exist');
        cy.viewport(1280, 720)
        cy.get('[data-testid="side-menu-item-orders"]').should('not.exist');
    }

    it('should have all elements in mobile', () => {
        hasNotTopBarItems()
        cy.viewport('iphone-6')
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="email-input"]').type('email@email.com')
        cy.get('[data-testid="password-input"]').type('senh')
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="password-input"]').type('a123')
        cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled')
        cy.get('[data-testid="no-account-btn"]').should('not.be.disabled')
    })

    it('should have all elements in desktop', () => {
        hasNotTopBarItems()
        cy.viewport(1280, 720)
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="email-input"]').type('email@email.com')
        cy.get('[data-testid="password-input"]').type('senh')
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="password-input"]').type('a123')
        cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled')
        cy.get('[data-testid="no-account-btn"]').should('not.be.disabled')
    })

})
