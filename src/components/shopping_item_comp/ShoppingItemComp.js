import {  useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { deleteShoppingItem, saveCheckBoxState } from "../../utils/HelperFunctions";
import "./ShoppingItemComp.css";
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemComp class 
 */

function ShoppingItemComp({currentListName, item , isChecked , setItemDeleted}) {

    const [isCheckedItem , updateCheckItem] = useState(isChecked);

    const handleTrashIconClick = async ()=>{
        await deleteShoppingItem(currentListName,item);
        setItemDeleted(true);
    }

    const handleCheckBoxChange =()=>{
            saveCheckBoxState(currentListName,  item, !isCheckedItem)
            updateCheckItem(!isCheckedItem)   
    }


    return(<ul className="display-flex-row list-border-style-shopping-content"> 
                <li className="shopping-item-col">
                    <h5>{item.itemName}</h5>
                 </li>
                <li className="shopping-item-col">
                    <h5>{item.itemBrand} </h5>
                </li>
                <li className="shopping-item-col">
                    <h5>{item.itemQuantity}</h5>
                </li>
                <li className="shopping-item-checkbox-container">
                    <input className="shopping-item-checkbox"  type="checkbox" checked={isCheckedItem} onChange={()=>handleCheckBoxChange()} />  
                </li> 
                <li className="shopping-item-col" className="icon-container" onClick={handleTrashIconClick}>
                     <MdRemoveShoppingCart />
                </li>

        
        {/* TODO: create data base of item and corresponding images for better look and feal
        {imgUrl ? <img className="shopping-item-icon" src="" alt=""> </img> : <div></div>} */}

    </ul>)
}
 export default ShoppingItemComp;