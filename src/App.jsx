import { Products } from "./components/products";
import { products } from "./mocks/products.json";

function App() {
  return (
    <main>
      <Products products={products} />
    </main>
  );
}

export default App;
