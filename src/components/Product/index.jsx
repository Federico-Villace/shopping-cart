import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../icons";

export const Product = ({ product, isProdInCart, onSelected }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <li onClick={() => onSelected(product)}>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title} </strong>- ${product.price}
      </div>
      <div>
        <button
          onClick={() =>
            isProdInCart ? removeFromCart(product) : addToCart(product)
          }
        >
          {isProdInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  );
};
