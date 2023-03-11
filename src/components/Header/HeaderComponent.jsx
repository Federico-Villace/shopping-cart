import { Filters } from "../Filters/FiltersComponent";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/Account">Profile</a>
          </li>
        </ul>
      </nav>
      <h1>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  );
};
