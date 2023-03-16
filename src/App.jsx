import { useState, useEffect } from "react";
import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { Spinner } from "./components/Spinner";
import { Title } from "./components/Title";

function App() {
  const { products, product, getProduct } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(products);
  const newProdFilter = filteredProducts(product);

  useEffect(() => {
    if (product.length > 0) {
      setProd(product);
    }
    console.log(newProdFilter);
  }, [product]);

  return (
    <CartProvider>
      <Header />
      <Title getProduct={getProduct} />
      <Cart />
      {products?.length === 0 && product.length === 0 ? (
        <Spinner />
      ) : newProdFilter.length > 0 ? (
        <Products products={newProdFilter} />
      ) : (
        <Products products={filterProducts} />
      )}
    </CartProvider>
  );
}

export default App;
