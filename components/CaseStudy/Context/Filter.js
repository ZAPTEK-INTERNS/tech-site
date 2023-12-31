/**
 * This component is a local store for @CaseStudy
 * Holds value for filter variable
 */
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

