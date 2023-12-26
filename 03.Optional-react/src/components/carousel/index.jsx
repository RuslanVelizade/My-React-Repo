import React, { useState } from 'react';
import "./index.scss"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Carousel = ({data}) => {
    
    const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item, index)=> (
        <div key={item.index} className={slide === index ? "slide" : "slide slide-hidden"}>
            <p>{item.title}</p>
            <h6 >{item.h6} </h6>
        <h1>{item.h1}</h1>
       <span>{item.span}</span>
       <a>{item.a}</a>
        </div>
    ))}
    <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  )
}

export default Carousel