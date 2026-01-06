import Error from "./components/ErrorComponent/Error.jsx";
import Final from "./components/FinalComponent/Final";
import FilterCategories from "./components/ProductPage/FilterSortComponent/FilterCategoriesComponent/FilterCategories.jsx";
import PFinal from "./components/ProductPage/ProductPageFinal/ProductPageFinal";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const sortValueContext = createContext();
export const brandFilterValueContext = createContext();
export const priceFilterValueContext = createContext();

function App() {
  const [sortInputValue, setSortInputValue] = useState("");
  const [brandFilterInputValue, setBrandFilterInputValue] = useState([]);
  const [priceFilterInputValue, setPriceFilterInputValue] = useState([]);
  return (
    <>
      <sortValueContext.Provider value={{ sortInputValue, setSortInputValue }}>
        <brandFilterValueContext.Provider
          value={{ brandFilterInputValue, setBrandFilterInputValue }}
        >
          <priceFilterValueContext.Provider
            value={{ priceFilterInputValue, setPriceFilterInputValue }}
          >
            <Routes>
              <Route path="/" element={<Final />} />
              <Route path="productPage" element={<PFinal />}>
                <Route path="filter" element={<FilterCategories />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </priceFilterValueContext.Provider>
        </brandFilterValueContext.Provider>
      </sortValueContext.Provider>
    </>
  );
}

export default App;
