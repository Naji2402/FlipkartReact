import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
import ProductAndFilterFinal from "../ProductFilterComponent/ProductAndFilterFinalComponent/ProductAndFilterFinal";
import ProductPageFooter from "../ProductPageFooterComponent/ProductPageFooter";
import ProductCategories from "../ProductCategoriesComponent/ProductCategories";

 function PFinal(){
     return (
        <>
          <PHeader />  
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          <ProductCategories />
          <ProductAndFilterFinal />
          <ProductPageFooter />
        </>
)}


 export default PFinal;