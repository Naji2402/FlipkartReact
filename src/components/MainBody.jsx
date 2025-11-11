import Search from './SearchProducts'
import Slide from './SliderShow';
import './MainBody.css';

 function Main(){
     return (
        <>
        <div className='main-content-section'>
            <Search />
            <Slide />
        </div>
        </>
)}

 export default Main;