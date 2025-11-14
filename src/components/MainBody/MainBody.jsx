import Search from '../SearchComponent/SearchProducts'
import Slide from '../SlideshowComponent/SliderShow';
import Categories from '../CategoriesComponent/Categories';
import RandomBox from '../RandomComponent/RandomBox';
import './MainBody.css';

 function Main(){
     return (
        <>
        <div className='main-content-section'>
            <Search />
            <Slide />
            <Categories />
            <RandomBox />
        </div>
        </>
)}



 export default Main;