import React, { useReducer, useState } from "react";
import shoppingCartReducer from "../ShoppingCartReducer";
import CartItem from "../CartItem";

const ShoppingCart: React.FC = () => {
    const [state, dispatch] = useReducer(shoppingCartReducer, { cart: [], total: 0 });
    const [itemName, setItemName] = useState<string>('');
    const [itemPrice, setItemPrice] = useState<number>(0);

    const addItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem: CartItem = { id: Date.now(), name: itemName, price: itemPrice };
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setItemName('');
    };

    const removeItem = (itemId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    return (
        <div>
            <form onSubmit={addItem}>
                <label>Item Name:</label>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Enter item name" required
                    />
                    <br/>
                <label>Item Price:</label>
                <input
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(parseFloat(e.target.value))}
                    placeholder="Enter Item Price" required />
                    <button type="submit">Add Item</button>
            </form>
            <ul>
                {state.cart.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h4>Total Cart Cost: ${state.total.toFixed(2)}</h4>
        </div>
    )
};

export default ShoppingCart;