import { useId } from "react";
import { useCart } from "../../hooks/useCart";
import { CartIcon, ClearCartIcon } from "../icons";
import "./cart.css";

export const Cart = () => {
  const { cart, clearCart } = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong> {product.title} </strong>
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                </footer>
              </li>
            );
          })}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
