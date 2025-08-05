import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>🛒 Cart ({cartItems.length})</h2>
      {cartItems.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}
    </div>
  );
}

export default Cart;
