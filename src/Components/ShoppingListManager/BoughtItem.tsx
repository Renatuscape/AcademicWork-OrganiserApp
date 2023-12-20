type BoughtItemProps = {
    item: string;
    removeBoughtItem: ()=> void;
}

//returns the item name and a button named Remove that takes a function
export default function BoughtItem(props: BoughtItemProps){
    return <div className="shoppingItem">
        {props.item} <button onClick={props.removeBoughtItem}>Remove</button>
    </div>
}