import { useState, useEffect } from "react";
import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { Spinner } from "./components/Spinner";

function App() {
  const [products, setProducts] = useState([]);
  const { webProducts, getElements } = useProducts();
  const { filteredProducts } = useFilters();

  useEffect(() => {
    if (webProducts.length === 0) {
      getElements();
    }
    getProducts();
  }, [webProducts]);

  const getProducts = () => {
    if (webProducts.length > 0) {
      const prods = { products: [webProducts] };
      setProducts(prods.products[0]);
    }
  };

  return (
    <CartProvider>
      <Header />
      <Cart />
      {webProducts.length === 0 ? (
        <Spinner />
      ) : (
        <Products products={filteredProducts(products)} />
      )}
    </CartProvider>
  );
}

export default App;
