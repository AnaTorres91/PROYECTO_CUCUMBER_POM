import { CommonPage } from "./commonPage"

const usernameLocator = '[data-test="username"]'
const acceptedtUserNames = ['standard_user','locked_out_user','problem_user','performance_glitch_user','error_user','visual_user'];
export class LoginPage extends CommonPage{
   //const acceptedUserNames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']
    
    typeStandarUser() {
        cy.get('[data-test="username"]').type('standard_user')
    }
 
    typeCorrectPassword() {
        cy.get('[data-test="password"]').type('secret_sauce')
    }

    checkUrlIsNotMainPage() {
        cy.url().should('not.include','inventory.html')
    }

    clickLoginButton() {
        cy.get('[data-test="login-button"]').click()

    }

    correctLogin() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="primary-header"]').should('not.exist')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','inventory.html')
        cy.get('[data-test="primary-header"]').should('be.visible').and('contain','Swag Labs') 
    }

    chekAcceptedUsernames(){
        cy.get('[data-test="login-credentials"]').should('contain','standard_user')
        .and('contain','locked_out_user')
        .and('contain', 'problem_user')
        .and('contain', 'performance_glitch_user')
        .and('contain', 'error_user')
        .and('contain', 'visual_user')
    }

    typeUser (user) {
        cy.get('[data-test="username"]').type(user);
    }
    
    typePassword (password) {
        cy.get('[data-test="password"]').type(password);
    }

    checkAcceptedUsernamesBetter () {
        acceptedtUserNames.forEach(username => {
          cy.get('[data-test="login-credentials"]').should('contain', username);
        }); 
    }

    checkErrorMessages (errorMessage) {
        this.checkElementContains('error', errorMessage)
    }
      
    loginKeepSession() {
        cy.session("loginSession", () => {
          cy.visit("https://www.saucedemo.com/"); // Visita la URL de inicio de sesión
          this.correctLogin()
          cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); // Verifica que se redirige a la página correcta
        });
        cy.visit("https://www.saucedemo.com/inventory.html", {
          failOnStatusCode: false,
        });
        cy.url().should("include", "/inventory.html");
    }
    // chekAcceptedUsernamesBetter() {
    //     this.chekAcceptedUsernames.forEach(username => {
    //         cy.get('[data-test="login-credentials"]').should('contain', username)


    //     })

}
