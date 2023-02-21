import { useState } from "react";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <main>
      <Products products={filteredProducts(products)} />
    </main>
  );
}

export default App;
