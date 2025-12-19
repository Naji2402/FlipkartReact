import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
import PAddSection from "../PAddSectionComponent/PAddSection";
import ProductCards from "../ProductCardsSection/ProductCards";

 function PFinal(){
     return (
        <>
          <PHeader />  
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
          <PAddSection />
          <ProductCards />
        </>
)}


 export default PFinal;