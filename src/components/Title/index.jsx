import { useState } from "react";
import "./Title.css";

export const Title = ({ getProduct, updateProducts }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e);
  };

  const handleClick = () => {
    updateProducts();
  };

  return (
    <div className="title-div">
      <h2 className="title-font" onClick={handleClick}>
        INIT Technologies 🛒
      </h2>
      <input
        type={"text"}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Iphone X, Macbook Pro, ... "
      />
      <button onClick={() => getProduct(input)}>Search</button>
    </div>
  );
};
