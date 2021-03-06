import { useContext, useEffect, useState } from "react";
import { getShoppingLists } from "../../utils/HelperFunctions";
import 'font-awesome/css/font-awesome.min.css';
import "./ShoppingListsPage.css";
import { AuthContext } from "../../utils/Auth";
import { Redirect } from "react-router";

import NewShoppingCartModal from "../../components/modals/NewShoppingCartModal";
import { MdAddShoppingCart } from "react-icons/md";
import ShoppingListItemComp from "../../components/shopping_item_comp/ShoppingListItemComp";


function ShoppingListsPage() {
    
    const [showAddNewCartModal , updateAddNewCartModal] = useState(false);

    const [shoppingLists , updateShoppingLists] = useState();
    const [shouldUpdateList , setUpdateList] = useState(true);

    const getLists = shoppingLists ? shoppingLists.map((item,index)=>{
        return <ShoppingListItemComp key={item+ "_" + index} item={item} setDeletedItem={setUpdateList} />} ) : "";
    
    const {currentUser} = useContext(AuthContext);

    useEffect(()=>{
        if (shouldUpdateList){
            getShoppingLists(updateShoppingLists);
            setUpdateList(false);
        }

    },[shouldUpdateList]);

    if (typeof currentUser ==='undefined' || currentUser ===null) {
      return <Redirect to="/login" />;
    }

    return(<div className="p-container">
        <div id="p-shopping-lists-container">
            <div id="p-shopping-list-header-container">
                <p>Shopping Carts</p>
                <span onClick={()=>updateAddNewCartModal(true)}>
                     <MdAddShoppingCart />
               </span>
                
            </div>
            <hr></hr>
            {getLists}
        </div> 

        <NewShoppingCartModal show={showAddNewCartModal} onClose={()=>updateAddNewCartModal(false)} setUpdateList={()=>setUpdateList(true)} />

    </div>)
}

export default ShoppingListsPage