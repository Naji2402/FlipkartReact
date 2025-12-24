import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
// import PAddSection from "../PDescriptionComponent/PDescription";
// import ProductCards from "../ProductCardsSection/ProductCards";
// import ProductFilter from "../ProductFilterComponent/ProductFilter";
import ProductAndFilterFinal from "../ProductFilterComponent/ProductAndFilterFinalComponent/ProductAndFilterFinal";

 function PFinal(){
     return (
        <>
          <PHeader />  
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          {/* <PAddSection />
          <ProductCards />
          <ProductFilter /> */}
          <ProductAndFilterFinal />
        </>
)}


 export default PFinal;