import { CommonPage } from "./commonPage"

const inventoryItem = "inventory-item"
export class ShoppingCartPage extends CommonPage {

    checkElementBydataTest (elementDataTest, assertion) {
        this.getElementByDataTest(elementDataTest).should(assertion, text)
}
    selectElementByDataTest(elementByDataTest) {
        this.selectElementByDataTest(elementByDataTest)
}

checkNoInventoryItemExists() {
    this.getElementByClass("inventory-item").should('not.exist');
  }
  checkInventoryItemIsVisible() {
    //Usamos el valor declarado en la constante y en caso de que cambie el selector solo es necesario cambiarlo en un lugar
    this.getElementByClass(inventoryItem).should('be.visible');
  }

  checkInventoryItemStatus(assertion) {
    // Esta función tiene la versatilidad de poder hacer cualquier aserción como parámetro
    this.getElementByClass(inventoryItem).should(assertion);
  }

  checkInventoryItem(itemName, itemPrice) {
    cy.contains(`[data-test="${inventoryItem}"]`, itemName).should('contain', itemName). and('contain', itemPrice)
  }
}
