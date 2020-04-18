/// <reference types="cypress" />
describe('Menu', () => {
    beforeEach(() => {
        cy.logout()
    })

    it('should have all elements for client and logout user', () => {
        cy.addUserToLocalStorage('Anderson Silva', 'mail@mail.com', 'CLIENT')
        cy.visit('http://localhost:3000/produtos')
        cy.viewport('iphone-6')
        cy.get('[data-testid="top-title"]')
        cy.get('[data-testid="top-hamburguer"]').click()
        cy.get('[data-testid="side-menu-item-products"]')
        cy.get('[data-testid="side-menu-item-my-orders"]')
        cy.get('[data-testid="side-menu-item-my-profile"]')
        cy.get('[data-testid="side-menu-item-logout"]').click()
        const hasUser = cy.hasUser().firstCall
        expect(hasUser).to.be.false
    })
    it('should have all elements for admin and logout user', () => {
        cy.addUserToLocalStorage('Anderson Silva', 'mail@mail.com', 'ADMIN')
        cy.visit('http://localhost:3000/admin/pedidos')
        cy.viewport(1280, 720)
        cy.get('[data-testid="top-hamburguer"]').should('not.exist')
        cy.get('[data-testid="side-menu-item-orders"]')
        cy.get('[data-testid="side-menu-item-profile"]')
        cy.get('[data-testid="side-menu-item-logout"]').click()
        const hasUser = cy.hasUser().firstCall
        expect(hasUser).to.be.false
    })
})
