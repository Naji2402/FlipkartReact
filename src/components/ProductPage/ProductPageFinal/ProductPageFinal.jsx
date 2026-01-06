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
export const brandFilterValueContext = createContext();

  

function PFinal() {
  const [sortInputValue, setSortInputValue] = useState("");
  const [brandFilterInputValue, setBrandFilterInputValue] = useState([]);

  return (
    <>
      <sortValueContext.Provider value={{ sortInputValue, setSortInputValue }}>
        <brandFilterValueContext.Provider
          value={{ brandFilterInputValue, setBrandFilterInputValue }}
        >
          <PHeader />
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          <ProductCategories />
          <ProductAndFilterFinal />
          <ProductPageFooter />
          <Outlet />
        </brandFilterValueContext.Provider>
      </sortValueContext.Provider>
    </>
  );
}

export default PFinal;
