type ShoppingListItemProps = {
    item: string;
    markAsBought: () => void;
}

//returns the item with name and a button that takes a function, named Bought. Initially was a li object
export default function ShoppingListItem(props: ShoppingListItemProps){

return <div className="shoppingItem">
    {props.item} <button onClick={props.markAsBought}>Bought</button>
</div>
}