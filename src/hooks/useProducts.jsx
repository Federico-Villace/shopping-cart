import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products";

export const useProducts = () => {
  const [webProducts, setWebProducts] = useState([]);
  const [input, setInput] = useState("");
  const [product, setProduct] = useState([]);

  const getElements = () => {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => setWebProducts(data.products));
  };

  const getProduct = () => {
    return fetch(`${URL}/search?q=${input}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  };

  useEffect(() => {
    setProduct(product);
    console.log(product);
  }, [getProduct]);

  return {
    webProducts,
    getElements,
    setInput,
    input,
    getProduct,
    setProduct,
    product,
  };
};
