import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

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



