Feature:Item details
Scenario: Decrease the quantity of an item
Given I selected an item from displayed list.
And I clicked the minus button. 
Then the item quantity decreases.