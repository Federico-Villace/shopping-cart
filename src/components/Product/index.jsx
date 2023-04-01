import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../icons";
import "./product.css";

export const Product = ({ product, isProdInCart, onSelected }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="product-container">
      <li onClick={() => onSelected(product)}>
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <strong>{product.title} </strong>- ${product.price}
        </div>
      </li>
      <div>
        <button
          style={
            isProdInCart
              ? { backgroundColor: "#fb4f4f" }
              : { backgroundColor: "" }
          }
          onClick={() =>
            isProdInCart ? removeFromCart(product) : addToCart(product)
          }
        >
          {isProdInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </div>
  );
};
