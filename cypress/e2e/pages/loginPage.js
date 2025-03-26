import { CommonPage } from "./commonPage"

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
    // chekAcceptedUsernamesBetter() {
    //     this.chekAcceptedUsernames.forEach(username => {
    //         cy.get('[data-test="login-credentials"]').should('contain', username)


    //     })


    }
