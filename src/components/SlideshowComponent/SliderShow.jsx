import { useState, useEffect, useRef } from "react";
import "./SlideShow.css";
import SlideImg1 from "./SlideshowComponentImages/SlideImage.webp";
import SlideImg2 from "./SlideshowComponentImages/SlideImage2.webp";
import SlideImg3 from "./SlideshowComponentImages/SlideImage3.webp";
import SlideImg4 from "./SlideshowComponentImages/SlideImage4.webp";
import SlideImg5 from "./SlideshowComponentImages/SlideImage5.webp";
import SlideImg6 from "./SlideshowComponentImages/SlideImage6.webp";
import SlideImg7 from "./SlideshowComponentImages/SlideImage7.webp";
import SlideImg8 from "./SlideshowComponentImages/SlideImage8.webp";
import SlideImg9 from "./SlideshowComponentImages/SlideImage9.webp";
import SlideImg10 from "./SlideshowComponentImages/SlideImage10.webp";
import ArrowRight from "./SlideshowComponentImages/ArrowRight.svg";
import ArrowLeft from "./SlideshowComponentImages/ArrowLeft.svg";
import js from "@eslint/js";

let slides = [
  {
    image: SlideImg1,
    description: "image1",
  },
  {
    image: SlideImg2,
    description: "image2",
  },
  {
    image: SlideImg3,
    description: "image3",
  },
  {
    image: SlideImg4,
    description: "image4",
  },
  {
    image: SlideImg5,
    description: "image5",
  },
  {
    image: SlideImg6,
    description: "image6",
  },
  {
    image: SlideImg7,
    description: "image7",
  },
  {
    image: SlideImg8,
    description: "image8",
  },
  {
    image: SlideImg9,
    description: "image9",
  },
  {
    image: SlideImg10,
    description: "image10",
  },
];

function Slide() {
  const sliderRef = useRef(null);
  const slideWidthRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
  });

  function slidePrev() {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev - 1));
  }

  function slideNext() {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (sliderRef) {
      sliderRef.current.scrollTo({
        top: 0,
        left: currentIndex * (slideWidthRef.current.clientWidth + 20),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  

  return (
    <>
      <div className="slide-section-main">
        <div className="slide-image-section" ref={sliderRef}>
          <div className="arrow-main left-arrow" onClick={slidePrev}>
            <img src={ArrowLeft} alt="left arrow" className="arrow" />
          </div>
          {slides.map((slide, index) => {
            return (
              <img
                key={index}
                src={slide.image}
                alt={slide.description}
                className={"slide-image"}
                ref={slideWidthRef}
              />
            );
          })}
          <div className="arrow-main right-arrow" onClick={slideNext}>
            <img src={ArrowRight} alt="right arrow" className="arrow" />
          </div>
        </div>
        <div className="slide-progress-bar">
          {slides.map((_, index) => {
            return (
              <div
                key={index}
                id={index}
                className={
                  index === currentIndex ? "progress-bar-open" : "progress-bar close"
                }
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slide;
