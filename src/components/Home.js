import React, { useState } from 'react';
import "./Home.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowForwardIosIcon className="arrow_forward"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={slide.image} alt="#" className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Home