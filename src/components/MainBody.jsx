import Search from './SearchProducts'
import Slide from './SliderShow';
import Categories from './Categories';
import RandomBox from './RandomComponent/RandomBox';
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