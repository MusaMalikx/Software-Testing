Feature: Cart
Scenario: Add products to the Cart
Given I have selected a product
When I click on add to cart
And I go to cart page
Then I should have that product in my cart