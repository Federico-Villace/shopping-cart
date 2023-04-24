import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { useSession } from "./hooks/useSession";
import { Spinner } from "./components/Spinner";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";

function App() {
  const { products } = useProducts();
  const { session } = useSession();

  return (
    <CartProvider>
      <Header session={session} />
      <Cart />
      {products?.length === 0 ? <Spinner /> : <Products />}
      <Footer />
    </CartProvider>
  );
}

export default App;
