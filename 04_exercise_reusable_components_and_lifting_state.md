# Re-usable components and shared state

## Exercise 1:

Make a generic re-usable big red button that can be used like this:

```tsx
<BigRedButton onClick={() => alert('hello')}>Click me</BigRedButton/
```


## Exercise 2:

Make a generic "Card" component.

A card is a div, with:

- A border
- A title displayed at the top
- Content section

It should be usable like this:

```tsx
<Card title="Important information">
  <p>
    Please always remember to do something somewhere when such and such occurs for so and so people.
  </p>
</Card>
```


## Exercise 3: Breaking up into smaller components

By using props and techniques of "lifting state", break this huge `ShoppingListManager` component into following component tree:

- `ShoppingListManager`
  - `ShoppingList`
    - `ShoppingListItem`
  - `BoughtItemList`
    - `BoughtItem`


```tsx
function ShoppingListManager() {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [boughtItems, setBoughtItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setShoppingList(prevList => [...prevList, newItem]);
      setNewItem(''); // Clear input field after adding item
    }
  };

  const markAsBought = (index: number) => {
    const boughtItem = shoppingList[index];
    setBoughtItems(prevBought => [...prevBought, boughtItem]);
    setShoppingList(prevList => prevList.filter((_, i) => i !== index));
  };

  const removeBoughtItem = (index: number) => {
    setBoughtItems(prevBought => prevBought.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Shopping List Manager</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <h3>Items to Buy</h3>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => markAsBought(index)}>Bought</button>
          </li>
        ))}
      </ul>
      <h3>Bought Items</h3>
      <ul>
        {boughtItems.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeBoughtItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
