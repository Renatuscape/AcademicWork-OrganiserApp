## Exercise 1: Custom Search Filter

Show the list of cities in HTML.
Then create a search input field to filter the list.
The list should update in real-time as the user types.

```tsx
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];
```

## Exercise 2: Conditional Rendering Based on Search

Modify the search component from Exercise 1 to display a message like "No results found" when there are no matching search results.

## Exercise 3: Effect

Make a component that always counts upwards every second it's been on the screen, and shows the count in a h2.

Make sure it cleans up after itself.

## Exercise 4: Dynamic Data Fetching

1. Fetch planets from Swapi: https://swapi.dev/api/planets/
   and show them in a list with name and population.

2. Add a number input. The value of the number input should filter
   the planets with a population lower than the value out of the list before rendering.

## Exercise 5: Dynamic Data Fetching

1. Fetch planets from Swapi: https://swapi.dev/api/people/
   and show them in a list with name and hair color.

2. Add multiple hair color filter buttons that each activates a filter on the list for a specific hair color.
