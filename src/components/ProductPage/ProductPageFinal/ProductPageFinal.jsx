import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
import ProductAndFilterFinal from "../ProductFilterComponent/ProductAndFilterFinalComponent/ProductAndFilterFinal";
import ProductPageFooter from "../ProductPageFooterComponent/ProductPageFooter";
import ProductCategories from "../ProductCategoriesComponent/ProductCategories";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const sortValueContext = createContext();
export const filterValueContext = createContext();

  

function PFinal() {
  const [sortInputValue, setSortInputValue] = useState("");
  const [filterInputValue, setFilterInputValue] = useState([]);

  return (
    <>
      <sortValueContext.Provider value={{ sortInputValue, setSortInputValue }}>
        <filterValueContext.Provider
          value={{ filterInputValue, setFilterInputValue }}
        >
          <PHeader />
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          <ProductCategories />
          <ProductAndFilterFinal />
          <ProductPageFooter />
          <Outlet />
        </filterValueContext.Provider>
      </sortValueContext.Provider>
    </>
  );
}

export default PFinal;
