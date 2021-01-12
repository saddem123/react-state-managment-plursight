import React, {useContext, useEffect, useReducer} from "react";
import cartReducer from "./cartReducer";

export const CartContext = React.createContext(null);


let initalCart;

function initCart() {
    try {
        initalCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    }catch {
        console.error("The cart couldn't be parsed into JSON.");
        initalCart =  [];
    }
}

initCart();

export function CartProvider(props){
    const [cart,dispatch] = useReducer(cartReducer,initalCart);

    useEffect(() =>  {
        localStorage.setItem("cart",JSON.stringify(cart));
    }, [cart]);
    const contextValue = {cart,dispatch};
    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext);
