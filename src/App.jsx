import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";

function App() {
  const [products] = useState(initialProducts);
  const { filteredProducts } = useFilters();
  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts(products)} />
    </>
  );
}

export default App;
