import React, { useState } from "react";
import "./CheckoutPage.css";

function CheckoutPage() {
  const prods = JSON.parse(localStorage.getItem("cart"));
  const [products, setProducts] = useState(prods);
  console.log(prods);

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <p className="product-name">{product.title}</p>
            <p className="product-quantity">Quantity: {product.quantity}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      <button>Buy Order</button>
    </div>
  );
}

export default CheckoutPage;
