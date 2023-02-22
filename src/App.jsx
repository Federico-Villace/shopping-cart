import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(initialProducts);
  const { filteredProducts } = useFilters();
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts(products)} />
    </CartProvider>
  );
}

export default App;
