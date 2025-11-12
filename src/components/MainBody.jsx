import Search from './SearchProducts'
import Slide from './SliderShow';
import Categories from './Categories';
import './MainBody.css';

 function Main(){
     return (
        <>
        <div className='main-content-section'>
            <Search />
            <Slide />
            <Categories />
        </div>
        </>
)}

 export default Main;