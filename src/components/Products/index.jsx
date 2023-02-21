import { AddToCartIcon } from "../icons";
import "./products.css";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div>
              <strong>{prod.title} </strong>- ${prod.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
