import { useId, useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { CartIcon, ClearCartIcon } from "../icons";
import "./cart.css";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, clearCart, addToCart } = useCart();
  const cartCheckboxId = useId();

  const CartItem = ({ thumbnail, title, quantity, price, addToCart }) => {
    const [itemTotal, setItemTotal] = useState(0);

    const totalItemPrice = () => {
      const newItemTotal = price * quantity;
      setItemTotal(newItemTotal);
    };

    const totalPrice = () => {
      const arr = cart.map((item) => {
        const sum = item.price * item.quantity;
        return sum;
      });
      const totPrice = arr.reduce((acum, actual) => {
        return acum + actual;
      });
      setTotal(totPrice);
    };

    useEffect(() => {
      totalItemPrice();
      totalPrice();
    }, [price]);

    return (
      <>
        <li>
          <img src={thumbnail} alt={title} />
          <div className="total">
            <strong>
              {quantity === 1
                ? `${title} - $${price}`
                : `${title} - $${itemTotal}`}
            </strong>
          </div>
          <footer>
            <small>Qty: {quantity}</small>
            <button onClick={addToCart}>+</button>
          </footer>
        </li>
      </>
    );
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="total">
          {cart.length > 1 ? (
            <span>
              <strong>Total Price: {total}</strong>
            </span>
          ) : (
            ""
          )}
        </div>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};