import { useState } from "react";

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
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
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
