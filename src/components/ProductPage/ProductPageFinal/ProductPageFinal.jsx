import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";

 function PFinal(){
     return (
        <>
          <PHeader />  
          <PHeaderLarge />
          <FilterSort />
          <FilterButtons />
        </>
)}

 export default PFinal;