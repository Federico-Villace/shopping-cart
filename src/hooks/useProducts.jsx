import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [webProducts, setWebProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (webProducts?.length === 0) {
      getElements();
    }
    getProducts();
  }, [webProducts, product]);

  const getProducts = () => {
    if (webProducts?.length > 0) {
      const prods = { products: [webProducts] };
      setProducts(prods.products[0]);
    }
    if (product.length > 0) {
      setProducts(product);
    }
  };

  useEffect(() => {
    console.log(products);
    //  console.log(products);
  }, [products, product]);

  const getElements = () => {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => setWebProducts(data.products));
  };

  const getProduct = (input) => {
    return fetch(`${URL}/search?q=${input}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  };

  return {
    getProduct,
    products,
  };
};
