Cypress.Commands.add('registrarUsuario', (nome, email, senha) => {
  cy.contains('Registrar').click();

  cy.get('input[placeholder="Nome"]').should('be.visible').type(nome);
  cy.get('input[placeholder="E-mail"]').should('be.visible').type(email);
  cy.get('input[placeholder="Senha"]').eq(0).should('be.visible').type(senha);
  cy.get('input[placeholder="Confirmação senha"]').should('be.visible').type(senha);

  cy.get('input[type="checkbox"]').should('be.visible').check();
  cy.contains('Cadastrar').should('be.visible').click();

  cy.get('#modalText').should('contain', 'criada com sucesso');
  cy.get('#btnCloseModal').should('be.visible').click();
});

Cypress.Commands.add('login', (email, senha) => {
  cy.get('input[placeholder="E-mail"]').should('be.visible').type(email);
  cy.get('input[placeholder="Senha"]').should('be.visible').type(senha);
  cy.contains('Acessar').should('be.visible').click();
});
