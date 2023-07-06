/// <reference types="Cypress"/>

context("Testes Funcionais Gui", () => {
  describe("Add to Cart", () => {
    it("Adicionar ao Carrinho", () => {
      cy.AdicionaraoCarrinho();
    });

    it("Remover do Carrinho", () => {
      cy.RemoverDoCarrinho();
    });

    it("Visualizar Carrinho", () => {
      cy.VisualizarCarrinho();
    });

    it("Remover dentro do Carrinho", () => {
      cy.RemoverDentrodoCarrinho();
    });

    it.only("Continue para o Shopping", () => {
      cy.ContinueShopping();
    });


  });
});
