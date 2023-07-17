import { format } from "./utils";


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
    cy.AdicionaraoCarrinho();
    cy.get(":nth-child(1) > .pricebar > .btn_secondary").click();
    cy.get(":nth-child(1) > .pricebar > .btn_primary").should(
      "contain",
      "ADD TO CART"
    );
  }
});

Cypress.Commands.add("VisualizarCarrinho", () => {
  {
    cy.AdicionaraoCarrinho();
    cy.get(".fa-layers-counter").click();
    cy.get("#contents_wrapper > div.subheader").should("contain", "Your Cart");
    cy.get("#item_4_title_link > div").should("contain", "Sauce Labs Backpack");
  }
});

Cypress.Commands.add("RemoverDentrodoCarrinho", () => {
  {
    cy.AcessarSiteLogin();
    cy.Login();
    cy.RemoverDoCarrinho();
    cy.VisualizarCarrinho();
    cy.get(".item_pricebar > .btn_secondary").click();
    cy.get(".cart_item").should("have.length", 0);
  }
});

Cypress.Commands.add("ContinueShopping", () => {
  {
    cy.VisualizarCarrinho();
    cy.get(".cart_footer > .btn_secondary").click();
    cy.get(".product_label").should("contain", "Products");
  }
});

Cypress.Commands.add("CompraCheckout", () => {
  {
    cy.VisualizarCarrinho();
    cy.get(".btn_action").click();
    cy.get(".subheader").should("contain", "Checkout: Your Information");
  }
});

Cypress.Commands.add(
  "PreencherDadosCheckout",
  (
    firstName = Cypress.env("FIRSTNAME"),
    lastName = Cypress.env("LASTNAME"),
    postalCode = Cypress.env("ZIPCODE")
  ) => {
    {
      cy.CompraCheckout();
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
      cy.get(".btn_primary").click();
    }
  }
);

//ValidarCheckout

Cypress.Commands.add("ValidarCheckout", () => {
  {
    cy.PreencherDadosCheckout();

    cy.get(".inventory_item_price")
      .invoke("text")
      .then(($value_1) => {
        cy.get('.summary_subtotal_label')
          .invoke("text")
          .then(($value_2) => {

            let formattedTotalDisplay = format($value_1)
            let expectedTotal = format ($value_2)

            expect(expectedTotal).to.eq(formattedTotalDisplay)

          });
      });
  }
});


Cypress.Commands.add("FinalizarCheckout",() => {
  {
    cy.PreencherDadosCheckout();
    cy.get('.btn_action').click()
    cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
  }
})