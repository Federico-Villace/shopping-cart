import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../icons";
import "./cart.css";

export const Cart = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="Iphone"
            />
            <div>
              <strong> Iphone </strong>
            </div>
            <footer>
              <small>Qty: 1 </small>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
