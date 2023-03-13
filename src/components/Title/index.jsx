import { useState } from "react";

export const Title = () => {
  const [product, setProduct] = useState({});
  const [input, setInput] = useState("");

  const getProduct = () => {
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((res) => res.json())
      .then(console.log);
  };

  const handleChange = (e) => {
    setProduct(e);
    setInput(e);
  };

  return (
    <div className="title-div">
      <h1>LS Technologies 🛒</h1>
      <input
        type={"text"}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Iphone X, Macbook Pro, ... "
      />
      <button onClick={getProduct}>Search</button>
    </div>
  );
};
