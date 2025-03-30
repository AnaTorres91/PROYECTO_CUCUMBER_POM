Feature: Check out Process 

    Background: Login
        Given I login and keep the sesion for the standar_user


Scenario: Complete checkout process with two products in the cart
    Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
    And I click on the button with data-test "add-to-cart-sauce-labs-backpack"
    And I check that the element with data-test "shopping-cart-badge" should "be.visible"
    And I check that the element with data-test "shopping-cart-badge" contain the text "1"
    And I click on the button with data-test "add-to-cart-sauce-labs-onesie"
    And I check that the element with data-test "shopping-cart-badge" contain the text "2"
    And I click on the button with data-test "shopping-cart-link"
    And I check that the url doesn't include the endpoint "inventory"
    And I check that the url include the endpoint "cart"
    And I check that the element with data-test "cart-list" contain the text "Sauce Labs Backpack"
    And I check that the element with data-test "cart-list" contain the text "Sauce Labs Onesie"
    When I click on the button with data-test "checkout"
    And I check that the url doesn't include the endpoint "cart"
    And I check that the url include the endpoint "checkout-step-one"
    And I type in the text box with data test "firstName" the text "Ana"
    And I type in the text box with data test "lastName" the text "Torres"
    And I click on the button with data-test "continue"
    And I check that the error message "Error: Postal Code is required" appears
    And I type in the text box with data test "postalCode" the text "29014"
    And I click on the button with data-test "continue"
    And I check that the url doesn't include the endpoint "checkout-step-one"
    And I check that the url include the endpoint "checkout-step-two"
    And I select the first option I check the "Sauce Labs Backpack"
    And I select the first option I check the "29.99"
    And I select the last option I check the "Sauce Labs Onesie"
    And I select the last option I check the "7.99"
    And I click on the button with data-test "finish"
    And I check that the url doesn't include the endpoint "checkout-step-two"
    Then I check that the url include the endpoint "checkout-complete"
    And I check that the element with data-test "complete-header" contain the text "Thank you for your order!"
    And  I check that the element with data-test "back-to-products" should "be.visible"
    And I click on the button with data-test "back-to-products"
    And  I check that the element with data-test "shopping-cart-badge" should "not.exist"


# And I check shopping cart badge should  not.exist