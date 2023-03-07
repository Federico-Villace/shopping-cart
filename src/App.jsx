import { useState, useEffect } from "react";
import { Header } from "./components/Header/HeaderComponent";
import { Products } from "./components/Products/ProductsComponent";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/CartComponent";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { Spinner } from "./components/Spinner";
import { supabase } from "./utils/supabaseClient";
import { Auth } from "./components/Authentication";
import { Account } from "./components/Account";

function App() {
  const [products, setProducts] = useState([]);
  const { webProducts, getElements } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(products);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (webProducts?.length === 0) {
      getElements();
    }
    getProducts();
  }, [webProducts]);

  const getProducts = () => {
    if (webProducts?.length > 0) {
      const prods = { products: [webProducts] };
      setProducts(prods.products[0]);
    }
  };

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <CartProvider>
          <Header />
          <Account key={session.user.id} session={session} />
          <Cart />
          {products?.length === 0 ? (
            <Spinner />
          ) : (
            <Products products={filterProducts} />
          )}
        </CartProvider>
      )}
    </div>
  );
}

export default App;
