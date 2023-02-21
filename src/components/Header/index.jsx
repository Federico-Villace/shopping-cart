import { Filters } from "../Filters/index";

export const Header = ({ changeFilters }) => {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};
