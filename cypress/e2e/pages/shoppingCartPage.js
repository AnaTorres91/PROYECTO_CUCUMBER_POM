import { CommonPage } from "./commonPage"

const inventoryItem = "inventory-item"
export class ShoppingCartPage extends CommonPage {

    checkElementBydataTest (elementDataTest, assertion) {
        this.getElementByDataTest(elementDataTest).should(assertion, text)
}
    selectElementByDataTest(elementByDataTest) {
        this.selectElementByDataTest(elementByDataTest)
}
}