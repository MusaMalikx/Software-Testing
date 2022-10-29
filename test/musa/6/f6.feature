Feature:Item details
Scenario: Seeing the image details of item
Given I selected an item from displayed list.
And I hover the item image. 
Then the item image zoomed.
And show item image more clearly
When the cursor moved either left or right
Then the item image also move