import CartItem from "./CartItem";

type ShoppingCartActions = 
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: number };

export default ShoppingCartActions;