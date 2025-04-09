import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';
// Clases importadas
import { LoginPage } from "../pages/loginPage"
const acceptedUserNames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']

//Instancias de clase
let loginPage = new LoginPage();

Given("I type standar user in login page", () => {
    loginPage.typeStandarUser()
});
  
Given("I type the correct password in login page", () => {
    loginPage.typeCorrectPassword()
});

Given("I check the url doesn't contain inventory", () => {
    loginPage.checkUrlIsNotMainPage()
});

Given("I click on the login button", () => {
    loginPage.clickLoginButton()
});

Given("I login with valid user and password", () => {
    loginPage.correctLogin()
});

Given('I check all usernames', () => {
    loginPage.chekAcceptedUsernames()
})

Given("I type the user name {string}", (user) => {
    loginPage.typeUser(user);
   });
  
   Given("I type the password {string}", (password) => {
    loginPage.typePassword(password);
   });
  
  
  Given("I check that the error message {string} appears", (errorMessage) => {
    loginPage.checkErrorMessages(errorMessage);
   });
  

  Given("I check that the element login credentials contain the all the accepted users", () => {
    loginPage.checkElementContains("login-credentials", "standard_user");
    loginPage.checkElementContains("login-credentials", "locked_out_user");
    loginPage.checkElementContains("login-credentials", "problem_user");
    loginPage.checkElementContains("login-credentials", "performance_glitch_user");
    loginPage.checkElementContains("login-credentials", "error_user");
    loginPage.checkElementContains("login-credentials", "visual_user");
  });
 
  Given("I login and keep the sesion for the standar_user", () => {
    loginPage.loginKeepSession();
  });

