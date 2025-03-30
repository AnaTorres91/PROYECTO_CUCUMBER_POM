export class CommonPage{
    
    visitLink(url) {
        cy.visit(url);
    }
    checkUrlnotInclude(endpoint) {
        cy.url().should('not.include', endpoint);
    }
    
    checkUrlInclude(endpoint) {
        cy.url().should('include', endpoint);
    }
    
    clickButtonByDataTest(buttonByDataTest) {
        cy.get(`[data-test="${buttonByDataTest}"]`).click();
    }
    
    typeInTextBoxByDataTest (texBoxByDataText, text) {
        cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
    }
    
    getElementByDataTest (elementByDataTest) {
        return cy.get(`[data-test="${elementByDataTest}"]`)
    }


    clickElementByDataTest(elementByDataTest) {
        this.getElementByDataTest(elementByDataTest).click()
    }
    
    typeElementByDataTest(elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).type(text)
    }

    clickElementByContent (elementByText) {
        cy.contains(elementByText).click()
    }

    checkElementContains (elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).should('contain', text)
    }
    
    checkElementNotContains (elementByDataTest, text) {
        this.getElementByDataTest(elementByDataTest).should('not.contain', text)
    }
    
    clickElementByContent (elementByText) {
        cy.contains(elementByText).click()
    }
    
    clickButtonByText (text) {
        cy.get('inputbutton').contain(text).click()
    }

    checkErrorBox (errorBox, text) {
       cy.get(`[data-test="${errorBox}"]`).should('contain',text)
    }

    checkElementBydataTest (elementDataTest, assertion) {
        this.getElementByDataTest(elementDataTest).should(assertion)
    }

    allUsers (text) {
        cy.get('[data-test="login-credentials"]').should('contain', text)
    }

    bodyContainText(text) {
        cy.get('body').should('contain', text)
    }

    bodyNotContainText(text) {
        cy.get('body').should('not.contain', text)
    }

    checkBodyText(assertion, text) {
        cy.get('body').should(assertion, text)

    }

    getElementByClass(className) {
        return cy.get(`[class = "${className}"]`)
    }
    
    getElementByClass(className) {
        return cy.get(`[class = "${className}"]`)
    }
    
    getElementByAttribute(attribute, className) {
        return cy.get(`[${attribute} = "${className}"]`)
    }



/// Función para testear accesibilidad
    testAccesibilityInScreen () {
        cy.injectAxe();
        cy.checkA11y();
    }

    testAccesibilityOnElement (elementLocator) {
        cy.injectAxe();
        cy.checkA11y(elementLocator)
    }
}