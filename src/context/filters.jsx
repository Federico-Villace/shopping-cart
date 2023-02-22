import { createContext, useState } from "react";

// 1-creation of the context
export const FiltersContext = createContext();

// 2- creation of the provider
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
