import React, {useEffect, useReducer} from "react";
import "./App.css";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import cartReducer from "./cartReducer";

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

export default function App() {
    const [cart,dispatch] = useReducer(cartReducer,initalCart);


    useEffect(() =>  {
        localStorage.setItem("cart",JSON.stringify(cart));
    }, [cart]);

    /*function addToCart(id, sku){
        setCart((items) => {
            const itemInCart = items.find((item) => item.sku === sku);
            if(itemInCart){
                // Return a new array with the matching item replaced
                return items.map((i) => i.sku === sku ? {...i,quantity: i.quantity + 1 }: i);
            }else {
                return [...cart,{id,sku,quantity: 1}];
            }
        });
    }

    function updateQuantity(sku,quantity){
        setCart((items) => {
            return quantity === 0 ? items.filter((item) => item.sku !== sku) :
            items.map(i => i.sku === sku ? {...i,quantity}: i);
        });
    }

    function emptyCart() {
        setCart([]);
    }*/

    return (
      <>
        <div className="content">
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<h1>Welcome to the Carved Rock Fitness</h1>}/>
                  <Route path="/:category" element={<Products/>}/>
                  <Route path="/:category/:id" element={<Detail dispatch={dispatch}/>}/>
                  <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch}/>}/>
                  <Route path="/checkout" element={<Checkout cart={cart} dispatch={dispatch}/>} />
              </Routes>
          </main>
        </div>
        <Footer />
      </>
  );
}
