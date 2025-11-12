import './Categories.css';
import CategoriesCard from './CategoriesCard';
import Fashion from '../assets/Images/fashion.webp';
import Travel from '../assets/Images/travelCategory.webp';
import Appliances from '../assets/Images/appliancesCategory.webp';
import Beauty from '../assets/Images/beautyCategory.webp';
import Electronics from '../assets/Images/electronicsCategory.webp';
import Toys from '../assets/Images/toysCategory.webp';
import SellPhones from '../assets/Images/sellphonesCategory.webp';
import FlipkartPay from '../assets/Images/flipkartpayCategory.webp';
import SuperCoin from '../assets/Images/supercoinCategory.webp';
import Mobiles from '../assets/Images/mobilesCategory.webp';
import FoodAndHealth from '../assets/Images/foodandhealthCategory.webp';
import HomeAndKichecn from '../assets/Images/homeandkitchenCategory.webp';
import AutoAcc from '../assets/Images/autoaccCategory.webp';
import Furniture from '../assets/Images/furnitureCategory.webp';
import Sports from '../assets/Images/sportsCategory.webp';
import GenZTrends from '../assets/Images/genztrendsCategory.webp';
import NextGen from '../assets/Images/nextgenCategory.webp';


const categoriesCardDetails = [
  [
    {
      image: Fashion,
      text: 'Fashion'
    },
    {
      image: Travel,
      text: 'Travel'
    },
    {
      image: Appliances,
      text: 'Appliances'
    },
    {
      image: Beauty,
      text: 'Beauty'
    },
    {
      image: Electronics,
      text: 'Electronics'
    },
    {
      image: Toys,
      text: 'Toys, Baby...'
    },
    {
      image: SellPhones,
      text: 'Sell Phone'
    },
    {
      image: FlipkartPay,
      text: 'Flipkart Pay'
    },
    {
      image: SuperCoin,
      text: 'Super Coin'
    },
  ],
  [
    {
      image: Mobiles,
      text: 'Mobiles'
    },
    {
      image: FoodAndHealth,
      text: 'Food & Heal...'
    },
    {
      image: HomeAndKichecn,
      text: 'Home & Kitc...'
    },
    {
      image: AutoAcc,
      text: 'Auto Acc'
    },
    {
      image: Furniture,
      text: 'Furniture'
    },
    {
      image: Sports,
      text: 'Sports'
    },
    {
      image: GenZTrends,
      text: 'GenZ Trends'
    },
    {
      image: NextGen,
      text: 'Next Gen'
    },
  ]
];

 function Categories(){
     return (
        <>
          <div className='categories'>
            <div className='categories-top-section categories-section'>
              {categoriesCardDetails[0].map((card) => {
                return <CategoriesCard img={card.image} text={card.text} />
              })}
            </div>  
            <div className='categories-bottom-section categories-section'>
               {categoriesCardDetails[1].map((card) => {
                return <CategoriesCard img={card.image} text={card.text} />
              })}
            </div>  
          </div>  
        </>
)}

 export default Categories;