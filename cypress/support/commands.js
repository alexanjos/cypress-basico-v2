Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alex')
    cy.get('#lastName').type('Anjos')
    cy.get('#email').type('alex@tat.com.br')
    cy.get('#open-text-area').type('Teste', {delay: 0})
    cy.contains('button', 'Enviar').click()
})