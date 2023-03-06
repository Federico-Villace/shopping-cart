import { useState, useEffect } from "react";
import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { products as initialProducts } from "./mocks/products.json";
import { useProducts } from "./hooks/useProducts";
import { Spinner } from "./components/Spinner";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { webProducts, getElements } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(initialProducts);

  /* useEffect(() => {
    console.log(webProducts);
    if (webProducts?.length === 0) {
      getElements();
    }
    getProducts();
  }, [webProducts]);

  const getProducts = () => {
    if (webProducts?.length > 0) {
      const prods = { products: [webProducts] };
      setProducts(prods.products[0]);
    }
  };*/

  return (
    <CartProvider>
      <Header />
      <Cart />
      {products?.length === 0 ? (
        <Spinner />
      ) : (
        <Products products={filterProducts} />
      )}
    </CartProvider>
  );
}

export default App;
