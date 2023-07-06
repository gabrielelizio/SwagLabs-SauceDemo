Cypress.Commands.add("AdicionaraoCarrinho", () => {
  {
    cy.AcessarSiteLogin();
    cy.Login();
    cy.get(":nth-child(1) > .pricebar > .btn_primary").click();

    cy.get(".fa-layers-counter").should("contain", "1");
  }
});

Cypress.Commands.add("RemoverDoCarrinho", () => {
  {
    cy.AcessarSiteLogin();
    cy.Login();
    cy.AdicionaraoCarrinho();
    cy.get(":nth-child(1) > .pricebar > .btn_secondary").click();
    cy.get(":nth-child(1) > .pricebar > .btn_primary").should("contain", "ADD TO CART");
  }
});
