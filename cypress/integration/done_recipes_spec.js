/// <reference types="cypress" />
describe('Main Recipes', () => {
    before(() => {
        cy.setRecipes()
    })
    beforeEach(() => {
        cy.visit('http://localhost:3000/receitas-feitas')

    })

    const hasBottomNavigation = () => {
        cy.get('[data-testid="food-bottom-btn"]')
        cy.get('[data-testid="explore-bottom-btn"]')
        cy.get('[data-testid="drinks-bottom-btn"]')
    }

    const hasTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]')
        cy.get('[data-testid="page-title"]').contains('Receitas Feitas')
        cy.get('[data-testid="search-top-btn"]')
    }

    it('should have all elements', () => {
        hasTopBarItems()
        hasBottomNavigation()
        cy.get('[data-testid="0-horizontal-image"]')
        cy.get('[data-testid="0-horizontal-top-text"]').contains('Ordinary Drink')
        cy.get('[data-testid="0-horizontal-done-date"]')
        cy.get('[data-testid="0-horizontal-name"]').contains('Margarita')
        cy.get('[data-testid="0-horizontal-share-btn"]').click()
        cy.task('getClipboard').should('contain', 'http://localhost:3000/receitas/bebida/11007')

        cy.get('[data-testid="1-horizontal-image"]')
        cy.get('[data-testid="1-horizontal-top-text"]').contains('Pasta')
        cy.get('[data-testid="1-horizontal-done-date"]')
        cy.get('[data-testid="1-horizontal-name"]').contains('Chilli prawn linguine')
        cy.get('[data-testid="1-horizontal-share-btn"]').click()
        cy.task('getClipboard').should('contain', 'http://localhost:3000/receitas/comida/52839')

    })

})
