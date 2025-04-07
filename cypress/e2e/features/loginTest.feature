#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"

# #Los Scenarios son los tests (lo que antes era "it")
#  Scenario: login happy path 
#     Given I type standar user in login page
#     And I type the correct password in login page
#     And I check the url doesn't contain inventory
#     When I click on the login button
#     Then I check url contain inventary
@smoke
   Scenario: main page should contain all users 
      Given I have all users in the main page with the text "standard_user"
      Given I have all users in the main page with the text "locked_out_user"
      Given I have all users in the main page with the text "problem_user"
      Given I have all users in the main page with the text "performance_glitch_user"
      Given I have all users in the main page with the text "error_user"
      Given I have all users in the main page with the text "visual_user"

    Scenario: Usernames
       Given I check all usernames
  @smoke 
   Scenario: Check error messages in login "Username is required"
      Given I type in the text box with data test "password" the text "secret_sauce"
      And I check that the body should "not.contain" the text "Epic sadface: Username is required"
      And I check the url doesn't contain inventory
      When I click on the login button
      Then I can see in the error box with data test "error" the text "Epic sadface: Username is required"

   Scenario: Check error messages in login "Password is required"
      Given I type in the text box with data test "username" the text "standard_user"
      And I check the url doesn't contain inventory
      When I click on the login button
      Then I can see in the error box with data test "error" the text "Epic sadface: Password is required"
@smoke
  Scenario: Check error messages in login "Username and password do not match any user in this service"
      Given I type in the text box with data test "username" the text "standard_user"
      And I type in the text box with data test "password" the text "secret"
      And I check the url doesn't contain inventory
      When I click on the login button
      Then I can see in the error box with data test "error" the text "Epic sadface: Username and password do not match any user in this service"

   Scenario: Check error messages in login "login Sorry, this user has been locked out"
      Given I type in the text box with data test "username" the text "stanlocked_out_user"
      And I type in the text box with data test "password" the text "secret_sauce"
      And I check the url doesn't contain inventory
      When I click on the login button
      Then I can see in the error box with data test "error" the text "Epic sadface: Username and password do not match any user in this service"

   Scenario: body contain Swag Labs
      Given I check body contain "Swag Labs"

   Scenario: body contain Swag Labs Better
      And I check that the body should "contain" the text "Swag Labs"

   Scenario: body not contain
      Given I check body not contain "ccsdcs"
   
   Scenario: body not contain Better
      And I check that the body should "not.contain" the text "gdfdfg"
   











