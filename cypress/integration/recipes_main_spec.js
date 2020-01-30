/// <reference types="cypress" />
describe('Main Recipes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/comidas')
    })

    const hasBottomNavigation = () => {
        cy.get('[data-testid="food-bottom-btn"]')
        cy.get('[data-testid="explore-bottom-btn"]')
        cy.get('[data-testid="drinks-bottom-btn"]')
    }

    const hasTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]')
        cy.get('[data-testid="page-title"]').contains('Comidas')
        cy.get('[data-testid="search-top-btn"]')
    }

    it('should have all elements', () => {
        cy.server()
        cy.route('api/json/v1/1/random.php').as('random')
        cy.route('api/json/v1/1/filter.php?c=Beef').as('category')
        cy.wait('@random')
        cy.wait(2000)
        hasTopBarItems()
        hasBottomNavigation()
        Array.from({length: 12}, (v, i) => i).forEach(e => {
            cy.get(`[data-testid="${e}-card-img"]`)
            cy.get(`[data-testid="${e}-card-category"]`)
            cy.get(`[data-testid="${e}-card-name"]`)
        })
        cy.get('[data-testid="All-category-filter"]').contains('All')
        cy.get('[data-testid="Beef-category-filter"]').contains('Beef')
        cy.get('[data-testid="Chicken-category-filter"]').contains('Chicken')
        cy.get('[data-testid="Dessert-category-filter"]').contains('Dessert')
        cy.get('[data-testid="Lamb-category-filter"]').contains('Lamb')
        cy.get('[data-testid="Miscellaneous-category-filter"]').contains('Miscellaneous')
        cy.get('[data-testid="Beef-category-filter"]').click()
        cy.wait('@category')
        cy.get(`[data-testid="${0}-card-name"]`).contains('Beef')
    })

})
