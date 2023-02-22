import { useState, useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);
  const { setFilters, filteredProducts } = useFilters();
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts(products)} />
    </>
  );
}

export default App;
