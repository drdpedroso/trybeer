/// <reference types="cypress" />
describe('Details', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/receitas/comida/52779')
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
        cy.server()
        cy.route('api/json/v1/1/lookup.php?i=52779').as('details')
        cy.wait('@details')
        hasNotBottomNavigation()
        hasNotTopBarItems()
        cy.get('[data-testid="recipe-photo"]')
        cy.get('[data-testid="favorite-btn"]')
        cy.get('[data-testid="recipe-title"]').contains('Cream Cheese Tart')
        cy.get('[data-testid="0-ingredient-name"]').contains('Flour')
        cy.get('[data-testid="0-ingredient-measure"]').contains('250g')
        cy.get('[data-testid="11-ingredient-name"]').contains('Basil')
        cy.get('[data-testid="11-ingredient-measure"]').contains('Topping')
        cy.get('[data-testid="12-ingredient-name"]').should('not.exist')
        cy.get('[data-testid="12-ingredient-measure"]').should('not.exist')
        cy.get('[data-testid="video"]')
        cy.get('[data-testid="share-btn"]').click()
        cy.task('getClipboard').should('contain', 'http://localhost:3000/receitas/comida/52779')
        cy.get('[data-testid="start-recipe-btn"]')
    })

})
