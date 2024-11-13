import ShoppingCartActions from "./ShoppingCartActions"
import ShoppingCartState from "./ShoppingCartState"

const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartActions): ShoppingCartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { 
                ...state, 
                cart: [...state.cart, action.payload], 
                total: state.total + action.payload.price };
        case 'REMOVE_ITEM':
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            const removedItem = state.cart.find(item => item.id === action.payload)
            return { 
                ...state, 
                cart: updatedCart,
                total: state.total - (removedItem ? removedItem.price : 0) 
            };
        default:
            return state;
        }
};

export default shoppingCartReducer;