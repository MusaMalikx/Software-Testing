Feature: Item detail

Scenario Outline: Changing the colors of item
    Given I selected an item from dislayed list.
    When I click the "<color>" color.
    Then product of "<color>" color is selected.
    Examples: 
        |      color        |     
        |      red          |  
        |      green        |   
        |      grey         |     

# Rule: When colors are unavailable
# When I click the unavailable color
# Then the item color does not change