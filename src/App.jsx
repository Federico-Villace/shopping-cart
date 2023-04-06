import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { Filters } from "./components/Filters/Filters";
import { useProducts } from "./hooks/useProducts";
import { useSession } from "./hooks/useSession";
import { Spinner } from "./components/Spinner";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";

function App() {
  const { products, product, getProduct, updateProducts } = useProducts();
  const { filteredProducts } = useFilters();
  const { session } = useSession();
  const filterProducts = filteredProducts(products);

  return (
    <CartProvider>
      <Header session={session} />
      <Title getProduct={getProduct} updateProducts={updateProducts} />
      <Cart />
      {products?.length === 0 && product.length === 0 ? (
        <Spinner />
      ) : (
        <Products products={filterProducts} />
      )}
      <Footer />
    </CartProvider>
  );
}

export default App;
