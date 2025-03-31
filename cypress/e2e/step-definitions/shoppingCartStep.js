import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import { ShoppingCartPage} from "../pages/shoppingCartPage"

let shoppingCartPage = new ShoppingCartPage()

Given ("I get a element by class {string} and should {string}", () => {
    shoppingCartPage.checkInventoryItemStatus()
})

Given("I select the button with data-test {string} and select and option {string}", (elementByDataTest,text) => {
    shoppingCartPage.selectElementByDataTest(elementByDataTest).select(text)
})

Given("I select the button with data-test {string} and select and option {string}", (elementByDataTest,text) => {
shoppingCartPage.checkInventoryItemIsVisible(itenName, itemPrice)
})


Given("I check that the item with name {string} and price {string} appears", (itemName, itemPrice)  => {
    shoppingCartPage.checkInventoryItem(itemName, itemPrice)
 
})


