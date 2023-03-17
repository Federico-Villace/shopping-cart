import { AddToCartIcon, RemoveFromCartIcon } from "../icons";
import { useCart } from "../../hooks/useCart";
import "./products.css";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const goToProduct = () => {
    console.log("hola");
  };

  return (
    <main className="products">
      <ul>
        {products.map((prod) => {
          const isProdInCart = chechProductInCart(prod);
          return (
            <li key={prod.id} onClick={goToProduct}>
              <img src={prod.thumbnail} alt={prod.title} />
              <div>
                <strong>{prod.title} </strong>- ${prod.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    isProdInCart ? removeFromCart(prod) : addToCart(prod)
                  }
                >
                  {isProdInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
