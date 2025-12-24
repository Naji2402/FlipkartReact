import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
import ProductAndFilterFinal from "../ProductFilterComponent/ProductAndFilterFinalComponent/ProductAndFilterFinal";
import ProductPageFooter from "../ProductPageFooterComponent/ProductPageFooter";

 function PFinal(){
     return (
        <>
          <PHeader />  
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          <ProductAndFilterFinal />
          <ProductPageFooter />
        </>
)}


 export default PFinal;