# State

## Exercise 1: Theme Toggler
Objective: Build a ThemeToggler component.

Tasks:

Use useState to toggle between two themes (e.g., 'light' and 'dark').
Display a button to toggle the theme.
Show the current theme on the screen.
Enhance the component by allowing custom theme names through props.


## Exercise 2: Feedback Form
Objective: Create a FeedbackForm component.

Tasks:

Include text input for user feedback.
Implement a select dropdown to rate the service (e.g., Good, Average, Bad).
Use useState to manage the state of each input field.
Display the submitted feedback in a formatted manner below the form.


## Exercise 3: Timer with pause and reset
Objective: Build a Timer component.

Tasks:

Implement a simple timer that counts up every second.
Use `useState` to manage the timer count.
Include buttons to start/pause and reset the timer.
Display the current time.


## Exercise 4: Personal Budget Tracker

This exercise is centered around using an object in state to manage a personal budget. It's an ideal scenario for an object in state due to the various categories and values that need to be tracked and updated independently.

State Structure: Create a state object to track the budget. This object should include different categories like groceries, rent, utilities, and entertainment, each with an initial budget value.

```tsx
type Budget = {
  groceries: number;
  rent: number;
  utilities: number;
  entertainment: number;
}
```

Form for budget update: Build a form in your component that allows the user to add or subtract amounts from different budget categories.

Show the current budget allocation in each category. This could be in the form of a simple list or a more complex graphical representation like a bar chart.

Tips:
Using 
```
<input type="number">
```
is appropriate. Beware that this actually gives a string on change, so remember to use `parseInt` to get the number value.



## Exercise 5: Shopping list

Create a ShoppingListManager Component:

The component should maintain two arrays in its state: shoppingList for items to be bought and boughtItems for items that have been purchased.
Include an input field to add new items to the shoppingList.
Implement a button to add the entered item to the shoppingList.

Display Shopping List:

- Map through the shoppingList array and display each item.
- Next to each item, add a "Bought" button.
- When the "Bought" button is clicked, the item should be moved to the boughtItems array.

Managing Bought Items:

- Display the boughtItems in a separate list.
- Next to each bought item, add a "Remove" button.
- Clicking the "Remove" button should remove the item from the boughtItems array.

