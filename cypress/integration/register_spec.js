/// <reference types="cypress" />
describe('Register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/registro')
    })

    const hasNotTopBarItems = () => {
        cy.viewport('iphone-6')
        cy.get('[data-testid="top-hamburguer"]').should('not.exist');
        cy.get('[data-testid="top-title"]').should('not.exist');
        cy.get('[data-testid="search-top-btn"]').should('not.exist');
        cy.viewport(1280, 720)
        cy.get('[data-testid="side-menu-item-orders"]').should('not.exist');
    }

    it('should have all elements and form validations', () => {
        cy.server()
        cy.route('register').as('api')
        hasNotTopBarItems()
        cy.viewport('iphone-6')
        cy.get('[data-testid="signup-btn"]').should('be.disabled')
        cy.get('[data-testid="signup-name"]').type('And')
        cy.get('[data-testid="signup-btn"]').should('be.disabled')
        cy.get('[data-testid="signup-name"]').type('erson Silva')
        cy.get('[data-testid="signup-email"]').type('maimail.com')
        cy.get('[data-testid="signup-btn"]').should('be.disabled')
        cy.get('[data-testid="signup-email"]').clear()
        cy.get('[data-testid="signup-email"]').type('mai@mail.com')
        cy.get('[data-testid="signup-btn"]').should('be.disabled')
        cy.get('[data-testid="signup-password"]').type('1234')
        cy.get('[data-testid="signup-password"]').clear()
        cy.get('[data-testid="signup-password"]').type('123456')
        cy.get('[data-testid="signup-btn"]').should('be.disabled')
        cy.check('[data-testid="signup-seller"]').check()
        cy.get('[data-testid="signup-btn"]').should('not.be.disabled')
        cy.get('[data-testid="signup-btn"]').click()
        cy.wait('@api')
        const hasUser = cy.hasUser().firstCall
        expect(hasUser).to.be.true
    })

})
