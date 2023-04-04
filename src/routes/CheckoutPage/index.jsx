import React, { useState } from "react";
import { notUserFound } from "../../utils/Toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "../../hooks/useSession";
import "./CheckoutPage.css";
import axios from "axios";

function CheckoutPage() {
  const prods = JSON.parse(localStorage.getItem("cart"));
  const [products] = useState(prods);
  const { session } = useSession();

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

  const handleClick = () => {
    if (session === null) {
      notUserFound();
    } else {
      axios
        .post("http://localhost:3001/payment", formattedProducts)
        .then(
          (res) => (window.location.href = res.data.response.body.init_point)
        );
    }
  };

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
      <button onClick={handleClick}>Buy Order</button>
      <ToastContainer />
    </div>
  );
}

export default CheckoutPage;
