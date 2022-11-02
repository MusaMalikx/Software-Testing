Feature: Items in a Category
Background: Multiple categories are display
Given I have selected a category of items


Scenario Outline: Filter Items by selecting a single color
  When I select one "<Color>" option
  Then all available "<Color>" colored items are displayed
  Examples:
      |      Color              |
      |      Red                |
      |      Green              |
      |      Blue               |
      |      Grey               |
      |      Teal               |
      |      Orange             |
      |      Purple             |
      |      Black              |

Scenario: Filter Items by multiple colours
When I select multiple colors 
Then all available items amongst the selected colored are displayed


Scenario: Removing filters from items in a category
Given I have applied filters to items
When I select clear all option
Then all filters applied to items are removed