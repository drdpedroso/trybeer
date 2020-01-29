/// <reference types="cypress" />
describe('Explore Area', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/explorar/comidas/area')
    })

    const hasBottomNavigation = () => {
        cy.get('[data-testid="food-bottom-btn"]')
        cy.get('[data-testid="explore-bottom-btn"]')
        cy.get('[data-testid="drinks-bottom-btn"]')
    }

    const hasTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]')
        cy.get('[data-testid="page-title"]').contains('Explorar Origem')
        cy.get('[data-testid="search-top-btn"]')
    }

    it('should have all elements', () => {
        hasTopBarItems()
        hasBottomNavigation()
        cy.server()
        cy.route('api/json/v1/1/filter.php?a=Canadian').as('api')
        cy.route('api/json/v1/1/list.php?a=list').as('apiList')
        cy.wait('@apiList')
        cy.get('[data-testid="explore-by-area-dropdown"]').select('Canadian')
        cy.wait('@api')
    })
})
