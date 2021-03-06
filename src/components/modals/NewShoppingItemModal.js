import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Form , Modal } from "react-bootstrap";
import ShoppingItemModel from "../../models/ShoppingItemModel";
import { addShoppingItemToFireStore } from "../../utils/HelperFunctions";

function NewShoppingItemModal({show, onClose, currentListName , currentShoppingList, updateShoppingList}) {
    const [itemName,setItemName]         = useState("");
    const [itemBrand,setItemBrand]       = useState("");
    const [itemQuantity,setItemQuantity] = useState("");

    const clearInputs = ()=>{
        setItemName("");
        setItemBrand("");
        setItemQuantity("");

    }

    const newItemCreated = ()=>{
        const newShoppingItem = new ShoppingItemModel(itemName, itemBrand, itemQuantity);
        addShoppingItemToFireStore(currentListName, newShoppingItem);
        updateShoppingList(currentShoppingList.concat(newShoppingItem))
        clearInputs();
        onClose();
    }

return(<Modal show={show} onHide={onClose} size="lg" >
            <Modal.Header >
                <Modal.Title>New Shopping Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGridFirestName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control  value={itemName} onChange={(e)=>setItemName(e.target.value)} placeholder="Enter item name" />
                    </Form.Group>

                    <Form.Group controlId="formGridLastName">
                        <Form.Label>Item Brand Name</Form.Label>
                        <Form.Control  value={itemBrand} onChange={(e)=>setItemBrand(e.target.value)} placeholder="Enter item brand" />

                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Item Quantity</Form.Label>
                            <Form.Control value={itemQuantity} onChange={(e)=>setItemQuantity(e.target.value)} placeholder="Enter Item Quantity" />
                        </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={onClose}>
                    Cancel
                </button>
                <button variant="primary" onClick={newItemCreated}>
                    Create Shopping Item
                </button>
            </Modal.Footer>

</Modal>)
    
}

export default NewShoppingItemModal;