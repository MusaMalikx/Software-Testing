Feature: Cart
Scenario: Product checkout 
Given I have added a product to my cart
And I am now on cart page
When the checkout button is clicked
Then I should be redirected to the payment method page