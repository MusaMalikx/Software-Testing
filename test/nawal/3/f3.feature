Feature:Item details
Background: 
Given I selected an item from displayed list.

Scenario Outline: When sizes are available
    When I click "<size>" size.
    And "<size>" size is selected.
    Examples: 
        |      size     |     
        |      sm       |  
        |      md       |   
        |      lg       |   
        |      xl       |    
        |      xxl      |

# Scenario: When sizes are unavailable
#     When I click unavailable size.
#     Then the size is not selected.