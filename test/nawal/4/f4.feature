Feature: Remove product from cart
Scenario Outline: Remove product from cart
Given that "<Product>" added in the cart
When I click remove button from any "<Product>" in the cart list
Then the "<Product>" remove from the Cart List
Examples:
    | <Product> |
    | Product 1  |