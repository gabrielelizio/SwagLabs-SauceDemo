Cypress.Commands.add(
  "Login",
  (user = Cypress.env("USUARIO"), password = Cypress.env("SENHA")) => {
    {
      cy.AcessarSiteLogin();

      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get("#login-button").click();
      cy.get(".product_label").should("contain", "Products");
    }
  }
);

Cypress.Commands.add(
  "LoginincorretoComUsuarioCorreto",
  (
    user = Cypress.env("USUARIOINCORRETO"),
    password = Cypress.env("SENHA")
  ) => {
    {
      cy.AcessarSiteLogin();
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
    }
  }
);
Cypress.Commands.add(
  "LoginincorretoComSenhaInvalida",
  (
    user = Cypress.env("USUARIO"),
    password = Cypress.env("SENHAINCORRETA")
  ) => {
    {
      cy.AcessarSiteLogin();
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
    }
  }
);


Cypress.Commands.add(
  "ApenasUsuario",
  (user = Cypress.env("USUARIOINCORRETO")) => {
    {
      cy.AcessarSiteLogin();
      cy.get('[data-test="username"]').type(user);
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain",
        "Epic sadface: Password is required"
      );
    }
  }
);

Cypress.Commands.add(
  "ApenasSenha",
    (password = Cypress.env("SENHAINCORRETA")) => {
    {
      cy.AcessarSiteLogin();
      cy.get('[data-test="password"]').type(password);
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain",
        "Epic sadface: Username is required"
      );
    }
  }
);

Cypress.Commands.add(
  "UsuarioLockado",
  (  
    user = Cypress.env("USUARIOLOCKED"),
    password = Cypress.env("SENHA")) => {
    {
      cy.AcessarSiteLogin();
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(password);
      cy.get("#login-button").click();
      cy.get('[data-test="error"]').should(
        "contain",
        "Epic sadface: Sorry, this user has been locked out."
        
      );
    }
  }
);
