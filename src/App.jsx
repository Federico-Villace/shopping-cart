import { useState, useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/products";
import { FiltersContext } from "./context/filters";
import { products as initialProducts } from "./mocks/products.json";

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { setFilters, filteredProducts };
};

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
