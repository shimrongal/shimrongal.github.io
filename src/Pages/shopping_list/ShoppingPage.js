import React, { useEffect } from 'react';
import ShoppingItemComp from '../../components/shopping_item_comp/ShoppingItemComp';
import { useState } from 'react';
import NewShoppingItemModal from '../../components/modals/NewShoppingItemModal';
import { useLocation } from 'react-router';
import { getShoppingListByName } from '../../utils/HelperFunctions';
import ShoppingItemListHeaderComp from '../../components/shopping_item_comp/ShoppingItemListHeaderComp';
import { MdAddShoppingCart } from 'react-icons/md';
import "./ShoppingPage.css";


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Shopping page
 * 
 * @param {*} params 
 * 
 */


function ShoppingPage() {
  
  const [showAddNewItemModal , updateAddNewItemModal] = useState(false);
  const [shoppingList , updateShoppingList] = useState();
  const [itemDeleted ,setItemDeleted] = useState(true);
 
  const currentListName = useLocation().data


  useEffect( ()=>{
    if (currentListName !== 'undefined' && itemDeleted){
      getShoppingListByName( currentListName, updateShoppingList);
      setItemDeleted(false);
    }
  },[currentListName , itemDeleted]);

  const getShoppingItems = shoppingList ? shoppingList.map( (item , index)=>{
     return <ShoppingItemComp key={item + index} currentListName={currentListName} item={item} isChecked={item.inCart} setItemDeleted={setItemDeleted} />  }) : "";

  return(<div id="p-shopping-list-container">        
            <div id="p-list-header-container">
                <p>{currentListName}</p>
                <span onClick={()=>updateAddNewItemModal(true)}>
                     <MdAddShoppingCart />
               </span>
                
            </div>
            <hr></hr>


        <ul  >
          <ShoppingItemListHeaderComp />
          {shoppingList ? getShoppingItems : ""}     
        </ul>  
          <NewShoppingItemModal show={showAddNewItemModal} onClose={()=>updateAddNewItemModal(false)} currentListName={currentListName} currentShoppingList={shoppingList} updateShoppingList={updateShoppingList} ></NewShoppingItemModal>
        </div>)
    
}


 export default ShoppingPage;