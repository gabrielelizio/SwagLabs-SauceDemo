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

Cypress.Commands.add("VisualizarCarrinho", () => {
  {
    cy.AcessarSiteLogin();
    cy.Login();
    cy.AdicionaraoCarrinho();
    cy.get(".fa-layers-counter").click()
    cy.get("#contents_wrapper > div.subheader").should("contain", "Your Cart");
    cy.get('#item_4_title_link > div').should("contain","Sauce Labs Backpack")
    
  }
})


  Cypress.Commands.add("RemoverDentrodoCarrinho", () => {
    {
      cy.AcessarSiteLogin();
      cy.Login();
      cy.RemoverDoCarrinho();
      cy.VisualizarCarrinho()
      cy.get('.item_pricebar > .btn_secondary').click()
      cy.get('.cart_item').should("have.length",0)
      
    }
});



ContinueShopping

Cypress.Commands.add("ContinueShopping", () => {
  {
    cy.VisualizarCarrinho()
    cy.get('.item_pricebar > .btn_secondary').click()
    cy.get('.cart_item').should("have.length",0)
    
  }
});


