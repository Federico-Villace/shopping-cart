import { AddToCartIcon } from "../icons";

export function Products({ products }) {
  console.log(products);
  return (
    <main>
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
