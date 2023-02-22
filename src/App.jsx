import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);
  const { filteredProducts } = useFilters();
  return (
    <>
      <Header />
      <Products products={filteredProducts(products)} />
    </>
  );
}

export default App;
