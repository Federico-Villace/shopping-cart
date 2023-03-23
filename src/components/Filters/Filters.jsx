import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import "./filters.css";

export const Filters = () => {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();

  const handleMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1749"
          onChange={handleMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          className="select"
        >
          <option value="all">All</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
