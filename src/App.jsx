import React from "react";
import "./App.css";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Card";


export default function App() {

    return (
      <>
        <div className="content">
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<h1>Welcome to the Carved Rock Fitness</h1>}/>
                  <Route path="/:category" element={<Products/>}/>
                  <Route path="/:category/:id" element={<Detail/>}/>
                  <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </main>
        </div>
        <Footer />
      </>
  );
}
