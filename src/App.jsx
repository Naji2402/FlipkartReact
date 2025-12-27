import Error from "./components/ErrorComponent/Error.jsx"
import Final from "./components/FinalComponent/Final"
import FilterCategories from "./components/ProductPage/FilterSortComponent/FilterCategoriesComponent/FilterCategories.jsx"
import PFinal from "./components/ProductPage/ProductPageFinal/ProductPageFinal"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Final />} />
            <Route path='productPage' element={<PFinal />}>
              <Route path="filter" element={<FilterCategories />} />
            </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
    </>
  )
}

export default App
