/// <reference types="cypress" />
describe('Header/Search', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/comidas')
    })


    const hasTopBarItems = () => {
        cy.get('[data-testid="profile-top-btn"]')
        cy.get('[data-testid="page-title"]').contains('Comidas')
    }

    it('should search by name, first letter and ingredient', () => {
        cy.server()
        cy.route('api/json/v1/1/search.php?s=katsu chicken').as('search')
        cy.route('api/json/v1/1/search.php?f=p').as('searchl')
        cy.route('api/json/v1/1/filter.php?i=cheese').as('searchI')
        hasTopBarItems()
        cy.get('[data-testid="search-top-btn"]').click()
        cy.get('[data-testid="name-search-radio"]').click()
        cy.get('[data-testid="search-input"]').type('katsu chicken')
        cy.wait('@search')
        cy.get(`[data-testid="${0}-card-name"]`).contains('Katsu Chicken')
        cy.get('[data-testid="search-input"]').clear()

        cy.get('[data-testid="first-letter-search-radio"]').click()
        cy.get('[data-testid="search-input"]').type('p')
        cy.wait('@searchl')
        cy.get(`[data-testid="${0}-card-name"]`).should(($div) => {
            const text = $div.text()
            expect(text[0]).to.include('P')
        })
        cy.get('[data-testid="search-input"]').clear()

        cy.get('[data-testid="ingredient-search-radio"]').click()
        cy.get('[data-testid="search-input"]').type('cheese')
        cy.wait(600)
        cy.wait('@searchI')
        cy.get(`[data-testid="${0}-card-name"]`).should(($div) => {
            const text = $div.text()
            expect(text).to.include('Cheese')
        })
    })

    // xit('should search by first letter', () => {
    //     cy.server()
    //     cy.route('api/json/v1/1/search.php?f=p').as('search')
    //     hasTopBarItems()
    //     cy.get('[data-testid="search-top-btn"]').click()
    //     cy.get('[data-testid="first-letter-search-radio"]').click()
    //     cy.get('[data-testid="search-input"]').type('p')
    //     cy.wait(600)
    //     cy.wait('@search')
    //     cy.get(`[data-testid="${0}-card-name"]`).should(($div) => {
    //         const text = $div.text()
    //         expect(text[0]).to.include('P')
    //     })
    // })

    // xit('should search ingridient', () => {
    //     cy.server()
    //     cy.route('api/json/v1/1/filter.php?i=cheese').as('search')
    //     hasTopBarItems()
    //     cy.get('[data-testid="search-top-btn"]').click()
    //     cy.get('[data-testid="ingredient-search-radio"]').click()
    //     cy.get('[data-testid="search-input"]').type('cheese')
    //     cy.wait(600)
    //     cy.wait('@search')
    //     cy.get(`[data-testid="${0}-card-name"]`).should(($div) => {
    //         const text = $div.text()
    //         expect(text).to.include('cheese')
    //     })
    // })

})
