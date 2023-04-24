import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { useSession } from "./hooks/useSession";
import { Spinner } from "./components/Spinner";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

function App() {
  const { products, product, getProduct, updateProducts } = useProducts();
  const { session } = useSession();

  return (
    <CartProvider>
      <Header session={session} />
      <Title getProduct={getProduct} updateProducts={updateProducts} />
      <Cart />
      {products?.length === 0 && product.length === 0 ? (
        <Spinner />
      ) : (
        <Products />
      )}
      <Footer />
    </CartProvider>
  );
}

export default App;
