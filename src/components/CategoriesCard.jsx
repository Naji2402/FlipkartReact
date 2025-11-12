import './CategoriesCard.css';
// import Categories1 from '../assets/Images/categories1.webp'

 function CategoriesCard(props){
     return (
        <>
          <div className='card-main'>
            <div>
                <img src={props.img}/>
            </div>
            <p>{props.text}</p>
          </div>  
        </>
)}

 export default CategoriesCard;