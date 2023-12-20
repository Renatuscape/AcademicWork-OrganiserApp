import BoughtItem from "./BoughtItem";

type BoughtItemListProps = {
    items: string[];
    removeBoughtItem: (index: number) => void;
}

//Prints the list of item strings, creating a BoughtItem component for each list element
//Assigns the removeBoughtItem function to the BoughtItem button
export default function BoughtItemList({items, removeBoughtItem}: BoughtItemListProps) {
    return <div>
        <h3>Bought Items</h3>
        <ul>
            {items.map((item, index) => (
                <BoughtItem key={index} item={item} removeBoughtItem={() => removeBoughtItem(index)} />
            ))}
        </ul>
    </div>
}