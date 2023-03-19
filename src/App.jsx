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

function App() {
  const { products, product, getProduct } = useProducts();
  const { filteredProducts } = useFilters();
  const { session } = useSession();
  const filterProducts = filteredProducts(products);
  const newProdFilter = filteredProducts(product);

  return (
    <CartProvider>
      <Header session={session} />
      <Title getProduct={getProduct} />
      <Filters />
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
