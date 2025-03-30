import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage } from "../pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();

Given("I check url contain inventary", () => {
    mainPage.checkUrlMainPage()
   });

   Given("I check that the price for the product {string} is {string}", (productName, productPrice) => {
    mainPage.checkPrice(productName, productPrice);
  });
  
  Given("I check that the active sorts option is {string}", (activeSortingOption) => {
    mainPage.checkActiveSortingOption(activeSortingOption);
  });
  
  Given("I check that the first product of the list contain {string}", (productContent) => {
    mainPage.checkFirstProductContent(productContent);
  });
  
  Given("I check that the last product of the list contain {string}", (productContent) => {
    mainPage.checkLastProductContent(productContent);
  });
  
  Given("I select the option {string} from the sorting dropdown", (productContent) => {
    mainPage.selectSortingOption(productContent);
  });

  Given("I select the first option I check the {string}", (productContent) => {
    mainPage.getFirstProductFromProductList
  });

  Given("I select the last option I check the {string}", (productContent) => {
    mainPage.getLastProductFromProductList
  });

