import React from "react";

const products = [
  { id: 1, name: "iPhone 15", price: 90000 },
  { id: 2, name: "MacBook Pro", price: 180000 },
  { id: 3, name: "AirPods", price: 20000 },
];

function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
