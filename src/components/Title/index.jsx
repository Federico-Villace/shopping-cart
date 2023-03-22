import { useState } from "react";
import "./Title.css";

export const Title = ({ getProduct }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
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
      <button onClick={() => getProduct(input)}>Search</button>
    </div>
  );
};
