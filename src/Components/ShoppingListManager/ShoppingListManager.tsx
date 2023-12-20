import { useState } from "react";
import ShoppingList from "./ShoppingList";
import BoughtItemList from "./BoughtItemList";

export default function ShoppingListManager() {
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
      <ShoppingList items={shoppingList} markAsBought={markAsBought} />
      <BoughtItemList items={boughtItems} removeBoughtItem={removeBoughtItem} />
    </div>
  );
}