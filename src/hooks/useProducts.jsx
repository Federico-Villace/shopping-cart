import { useState } from "react";

const URL = "https://dummyjson.com/products";

export const useProducts = () => {
  const [webProducts, setWebProducts] = useState([]);

  const getElements = () => {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => setWebProducts(data.products));
  };

  return { webProducts, getElements };
};
