import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://dummyjson.com/products";

export const useProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getElements();
  }, [product, limit]);

  const getElements = () => {
    return fetch(`${URL}?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) =>
        setProducts((prevProds) => prevProds.concat(data.products))
      );
  };

  const getProduct = (input) => {
    return fetch(`${URL}/search?q=${input}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  const getSelectedProduct = (prod) => {
    return fetch(`${URL}/${prod.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        navigate("/Product", { state: data });
      });
  };

  const updateProducts = () => {
    getElements();
  };

  return {
    getProduct,
    products,
    product,
    getSelectedProduct,
    updateProducts,
    limit,
    setLimit,
    skip,
    setSkip,
  };
};
