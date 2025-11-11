import { useState, useEffect } from 'react';
import './SlideShow.css';
import SlideImg1 from '../assets/Images/SlideImage.webp'
import SlideImg2 from '../assets/Images/SlideImage2.webp'


let images = [
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
]



 function Slide(){

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrent(current === images.length -1 ? 0 : current + 1 )
        }, 3000)
    })

    let slideImages = images.map((img, index) => {
        return <img key={index} src={img.image} alt={img.description} className={index === current ? "slide-image" : "slide-image hide"}/>
    })
     return (
        <>
          <div className='slide-section-main'>
            <div className='slide-image-section'>
                {slideImages}
            </div>
            <div className='slide-progress-bar'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
        </>
)}

 export default Slide;

