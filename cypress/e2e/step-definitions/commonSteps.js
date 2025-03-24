import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
    commonPage.visitLink(url);
});

Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
    commonPage.checkUrlnotInclude(endpoint);
});
  
Given("I check that the url include the endpoint {string}", (endpoint) => {
    commonPage.checkUrlInclude(endpoint);
});
   
Given("I click on the button with data-test {string}", (buttonByDataTest) => {
    commonPage.clickButtonByDataTest(buttonByDataTest);
});
  
Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
    commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
});

Given("I can see in the error box with data test {string} the text {string}", (errorBox, text) => {
        commonPage.checkErrorBox(errorBox, text);
});

Given ("I have all users in the main page with the text {string}", (user, text) => {
   commonPage.allUsers(user, text)
})
Given ("I check body contain {string}", (text)=> {
    commonPage.bodyContainText(text)
})

Given ("I check body not contain {string}", (text) => {
    commonPage.bodyNotContainText(text)

})



