/// <reference types="Cypress" />

context('I am on the debezium-ui homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Check if able to connect backend and get connectors', () => {
    cy.intercept('/api/connectors/1').as('getConnector')
    cy.wait('@getConnector', { timeout: 50000 }).its('response.statusCode').should('eq', 200)
  })
})