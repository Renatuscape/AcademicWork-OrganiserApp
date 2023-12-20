import ShoppingListItem from "./ShoppingListItem";

type ShoppingListProps={
    items: string[];
    markAsBought: (index: number) => void;
}

//Returns the entire list of items. The items are defined in ShoppingListItem
//Each item has a markAsBought prop, which is assigned as a function that takes the item's index
export default function ShoppingList (props: ShoppingListProps){
    return <div>
        <h3>Items to Buy</h3>
        <ul>
            {props.items.map((item, index) =>(
                <ShoppingListItem key={index} item={item} markAsBought={() => props.markAsBought(index)}/>
            ))}
        </ul>
    </div>
}