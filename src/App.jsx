import React, {useState} from "react";
import "./App.css";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";


export default function App() {
    const [cart,setCart] = useState([]);

    function addToCart(id, sku){
        setCart((items) => {
            const itemInCart = items.find((item) => item.sku == sku);
            if(itemInCart){
                // Return a new array with the matching item replaced
                return items.map((i) => i.sku === sku ? {...i,quantity: i.quantity + 1 }: i);
            }else {
                return [...cart,{id,sku,quantity: 1}];
            }
        });
    }

    return (
      <>
        <div className="content">
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<h1>Welcome to the Carved Rock Fitness</h1>}/>
                  <Route path="/:category" element={<Products/>}/>
                  <Route path="/:category/:id" element={<Detail addToCart={addToCart}/>}/>
                  <Route path="/cart" element={<Cart cart={cart}/>}/>
              </Routes>
          </main>
        </div>
        <Footer />
      </>
  );
}
