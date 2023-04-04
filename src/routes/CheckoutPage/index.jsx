import React, { useState } from "react";
import { failedMagicLink } from "../../utils/Toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CheckoutPage.css";
import axios from "axios";

function CheckoutPage() {
  const prods = JSON.parse(localStorage.getItem("cart"));
  const [products] = useState(prods);

  const formattedProducts = products.map(
    ({
      title,
      category,
      description,
      thumbnail: image,
      price: unit_price,
      quantity,
    }) => ({
      title,
      category,
      description,
      image,
      unit_price,
      quantity,
    })
  );

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
      <button
        onClick={() =>
          axios
            .post("http://localhost:3001/payment", formattedProducts)
            .then(
              (res) =>
                (window.location.href = res.data.response.body.init_point)
            )
        }
      >
        Buy Order
      </button>
    </div>
  );
}

export default CheckoutPage;
