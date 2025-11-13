import { useState, useEffect } from 'react';
import './SlideShow.css';
import SlideImg1 from './SlideshowComponentImages/SlideImage.webp';
import SlideImg2 from './SlideshowComponentImages/SlideImage2.webp';
import ArrowRight from './SlideshowComponentImages/ArrowRight.svg';
import ArrowLeft from './SlideshowComponentImages/ArrowLeft.svg';

let slides = [
    {
        image: SlideImg1,
        description: "image1"
    },
    {
        image: SlideImg2,
        description: "image2"
    },
    {
        image: SlideImg1,
        description: "image3"
    },
    {
        image: SlideImg2,
        description: "image4"
    },
    {
        image: SlideImg1,
        description: "image5"
    },
     {
        image: SlideImg2,
        description: "image6"
    },
    {
        image: SlideImg1,
        description: "image7"
    },
    {
        image: SlideImg2,
        description: "image8"
    },
    {
        image: SlideImg1,
        description: "image9"
    },
    {
        image: SlideImg2,
        description: "image10"
    },
    
]



 function Slide(){

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrent(current === slides.length -1 ? 0 : current + 1 )
        }, 3000)
    })

    let slideImages = slides.map((img, index) => {
        return <img key={index} src={img.image} alt={img.description} className={index === current ? "slide-image" : "slide-image hide"}/>
    })
     return (
        <>
          <div className='slide-section-main'>
            <div className='slide-image-section'>
                <div className='arrow-main left-arrow'><img src={ArrowLeft} alt="left arrow" className='arrow' /></div>
                {slideImages}
                <div className='arrow-main right-arrow'><img src={ArrowRight} alt="right arrow" className='arrow' /></div>
            </div>
            <div className='slide-progress-bar'>
                {
                    slides.map((_, index) => {
                        return <div key={index} id={index} className={index === current ? 'progress-bar' : 'progress-bar close'}></div>
                    })
                }
            </div>
          </div>
        </>
)}



 export default Slide;

