/// <reference types="cypress" />
describe('Main Recipes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    const hasNotBottomNavigation = () => {
        cy.get('[data-testid="food-bottom-btn"]').should('not.exist')
        cy.get('[data-testid="explore-bottom-btn"]').should('not.exist')
        cy.get('[data-testid="drinks-bottom-btn"]').should('not.exist')
    }

    const hasNotTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]').should('not.exist');
        cy.get('[data-testid="page-title"]').should('not.exist');
        cy.get('[data-testid="search-top-btn"]').should('not.exist');
    }

    it('should have all elements', () => {
        hasNotBottomNavigation()
        hasNotTopBarItems()
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="email-input"]').type('email@email.com')
        cy.get('[data-testid="password-input"]').type('senh')
        cy.get('[data-testid="login-submit-btn"]').should('be.disabled')
        cy.get('[data-testid="password-input"]').type('a123')
        cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled')
        cy.get('[data-testid="login-submit-btn"]').click()
    })

})
