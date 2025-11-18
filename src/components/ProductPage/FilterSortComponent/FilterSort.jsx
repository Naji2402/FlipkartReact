import Sort from './FilterSortImages/sort.svg'
import Filter from './FilterSortImages/filter.svg'
import './FilterSort.css';

 function FilterSort(){
     return (
        <>
            <div className="filter-sort-main">
                <div className="sort filter-sort">
                    <div>
                        <img src={Sort} alt="Sort logo" className='sort' />
                        <h2>Sort</h2>
                    </div>
                </div>
                <div className='middle-line'></div>
                <div className="filter filter-sort">
                    <div>
                        <span>2</span>
                        <img src={Filter} alt="filter lgot" className='filter' />
                        <h2>Filter</h2>
                    </div>
                </div>
            </div>
        </>
)}

 export default FilterSort;

 