import { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useFilters } from "../../hooks/useFilters";
import { useProducts } from "../../hooks/useProducts";
import { Filters } from "../Filters/Filters";
import { Product } from "../Product/index.jsx";
import { Title } from "../Title";
import "./products.css";

export function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const { cart } = useCart();
  const {
    getSelectedProduct,
    limit,
    setLimit,
    skip,
    setSkip,
    products,
    getProduct,
  } = useProducts();
  const { filteredProducts } = useFilters();
  const filterProducts = filteredProducts(products);
  console.log(products);

  const chechProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  useEffect(() => {
    // checks when the user scrolls down and reach the end of the page
    const checkEndPage = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCurrentPage(currentPage + 1);
        setLimit(limit + 9);
        setSkip(skip + 9);
      }
    };

    window.addEventListener("scroll", checkEndPage);
    return () => window.removeEventListener("scroll", checkEndPage);
  }, [currentPage]);

  const totalPages = Math.ceil(filterProducts.length / limit);

  return (
    <main className="products">
      <Title getProduct={getProduct} />

      <ul>
        {[...Array(totalPages)].map((_, pageIndex) =>
          filterProducts
            .slice(pageIndex * limit, (pageIndex + 1) * limit)
            .map((prod) => {
              const isProdInCart = chechProductInCart(prod);
              return (
                <Product
                  product={prod}
                  isProdInCart={isProdInCart}
                  key={prod.id + "_" + pageIndex}
                  onSelected={(prod) => getSelectedProduct(prod)}
                />
              );
            })
        )}
      </ul>
    </main>
  );
}
