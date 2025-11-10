import './SlideShow.css';
import SlideImg from '../assets/Images/SlideImage.webp'


let images = [
    {
        image: SlideImg,
        description: "image1"
    },
    {
        image: SlideImg,
        description: "image2"
    },
    {
        image: SlideImg,
        description: "image3"
    },
    {
        image: SlideImg,
        description: "image4"
    },
    {
        image: SlideImg,
        description: "image5"
    },
]


 function Slide(){
    let mapped = images.map((img, index) => {
        return <img key={index} src={img.image} alt={img.description} />
    })
     return (
        <>
          <div className='slide-section-main'>
            <div className='slide-image-section'>
                {mapped}
            </div>
            <div></div>
          </div>
        </>
)}

 export default Slide;

