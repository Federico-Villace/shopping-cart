import { useEffect } from "react";
import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { Spinner } from "./components/Spinner";
import { Title } from "./components/Title";

function App() {
  const { products } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(products);

  return (
    <CartProvider>
      <Header />
      <Title />
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
