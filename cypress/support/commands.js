Cypress.Commands.add(
  "AcessarSiteLogin",
  (base_URL = Cypress.env("BASE_URL")) => {
    cy.visit(base_URL);
  }
);
