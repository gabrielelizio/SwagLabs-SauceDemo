/// <reference types="Cypress"/>

context("Testes Funcionais de GUI", () => {
  describe.only("Logins", () => {
    it("Login Sucesso", () => {
      cy.Login();
    });

    it("Login Incorreto Informando Usuario Válido", () => {
      cy.LoginincorretoComUsuarioCorreto();
    });
    it("Login Incorreto Informando Usuario Válido e Senha Invalida", () => {
      cy.LoginincorretoComSenhaInvalida();
    });
    it("Informando Apenas Usuario", () => {
      cy.ApenasUsuario();
    });

    it("Informando Apenas Senha", () => {
      cy.ApenasSenha();
    });

    it("Informando Usuario já logado", () => {
      cy.UsuarioLockado();
    });
  });
});
