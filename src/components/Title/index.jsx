import { useProducts } from "../../hooks/useProducts";

export const Title = () => {
  const { getProduct, setInput, input } = useProducts();

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
      <button onClick={getProduct}>Search</button>
    </div>
  );
};
