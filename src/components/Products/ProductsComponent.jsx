import { AddToCartIcon } from "../icons";
import { useCart } from "../../hooks/useCart";
import "./products.css";

export function Products({ products }) {
  const { addToCart } = useCart();

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div>
              <strong>{prod.title} </strong>- ${prod.price}
            </div>
            <div>
              <button onClick={() => addToCart(prod)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
