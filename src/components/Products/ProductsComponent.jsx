import { useCart } from "../../hooks/useCart";
import { useFilters } from "../../hooks/useFilters";
import { useProducts } from "../../hooks/useProducts";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/index.jsx";
import "./products.css";

export function Products() {
  const { cart } = useCart();
  const { getSelectedProduct, limit, setLimit, products } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(products);

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <div>
        <Filters />
      </div>
      <ul>
        {filterProducts.map((prod) => {
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
        <button onClick={() => setLimit(limit + 10)}>Load More</button>
      </ul>
    </main>
  );
}
