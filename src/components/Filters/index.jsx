import { useState } from "react";

export const Filters = () => {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  return (
    <section>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value="notebooks">Notebooks</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
