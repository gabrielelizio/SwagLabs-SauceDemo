/// <reference types="Cypress"/>


context('Testes Funcionais Gui', () => {
    
    describe("Add to Cart", () => {
        it("Adicionar ao Carrinho", () => {
          cy.AdicionaraoCarrinho();
        })

        it.only("Remover do Carrinho", () => {
            cy.RemoverDoCarrinho();
          })
});




})