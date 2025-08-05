import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>Simple Add to Cart</h1>
      <Cart cartItems={cartItems} />
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
