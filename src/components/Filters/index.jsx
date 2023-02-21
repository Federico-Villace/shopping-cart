import { useState, useId } from "react";

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

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
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1749"
          onChange={handleMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
