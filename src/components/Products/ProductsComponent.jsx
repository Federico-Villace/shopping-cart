import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../Product/index.jsx";
import "./products.css";

export function Products({ products }) {
  const { cart } = useCart();
  const { getSelectedProduct } = useProducts();

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((prod) => {
          const isProdInCart = chechProductInCart(prod);
          return (
            <Product
              product={prod}
              isProdInCart={isProdInCart}
              key={prod.id}
              onSelected={(prod) => getSelectedProduct(prod)}
            />
          );
        })}
      </ul>
    </main>
  );
}
