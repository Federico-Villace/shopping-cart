import { useEffect } from "react";
import { useCart } from "../../../hooks/useCart";

export const AddToCart = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const isProdInCart = chechProductInCart(product);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="product-button-container">
      <button
        className="product-button"
        onClick={() =>
          isProdInCart ? removeFromCart(product) : addToCart(product)
        }
      >
        Add to Cart
      </button>
    </div>
  );
};
