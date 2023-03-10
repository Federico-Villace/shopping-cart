import { Filters } from "../Filters/FiltersComponent";

export const Header = () => {
  return (
    <header>
      <button>
        <a href="/Account">Profile</a>
      </button>
      <h1>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  );
};
