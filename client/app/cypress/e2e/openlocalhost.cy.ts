describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 800)
    cy.visit('/dashboard/orders');
    cy.get('.sc-jTQCzO > .sc-beySPh > .sc-gLLuof').should('exist')
      .should('have.text', 'Add new order')

  })
})