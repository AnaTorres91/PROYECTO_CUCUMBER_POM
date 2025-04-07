@main
Feature: Main test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 When I login with valid user and password
@smoke
 Scenario: Add a product to cart from products overview
   Given  I click on the button with data-test "add-to-cart-sauce-labs-backpack"
   When I check that the element with data-test "shopping-cart-badge" contain the text "1"
   And I click on the button with data-test "shopping-cart-link"
   And I check that the url include the endpoint "cart.html"


Scenario: Verify that I can go to product detail without add the product to the car
    Given I check that the element with data-test "inventory-item-name" contain the text "Sauce Labs Bolt T-Shirt"
    When I click on an element with the text "Sauce Labs Bolt T-Shirt"

# Scenario: Verify sorting by price
   
  