/// <reference types="cypress" />
describe('Done Recipes', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/explorar/comidas/ingredientes')
    })

    const hasBottomNavigation = () => {
        cy.get('[data-testid="food-bottom-btn"]')
        cy.get('[data-testid="explore-bottom-btn"]')
        cy.get('[data-testid="drinks-bottom-btn"]')
    }

    const hasTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]')
        cy.get('[data-testid="page-title"]').contains('Explorar Ingredientes')
        cy.get('[data-testid="search-top-btn"]')
    }

    it('should have all elements', () => {
        hasTopBarItems()
        hasBottomNavigation()
        cy.server()
        cy.route('api/json/v1/1/list.php?i=list').as('api')
        cy.route('api/json/v1/1/filter.php?i=Salmon').as('list')
        cy.wait('@api')
        cy.get('[data-testid="Salmon-card-img"]')
        cy.get('[data-testid="Salmon-card-name"]').contains('Salmon')
        cy.get('[data-testid="Salmon-card-img"]').click()
        cy.wait('@list')

    })
})
