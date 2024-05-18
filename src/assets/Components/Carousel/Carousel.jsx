import React, { useEffect, useRef } from 'react';
import "./Carousel.css";
import s1 from "../Media/s1.webp"
import s2 from "../Media/s2.webp"
import s3 from "../Media/s3.webp"
import s4 from "../Media/s4.webp"
import s5 from "../Media/s5.webp"
import s6 from "../Media/s6.webp"
import { faStopwatch20 } from '@fortawesome/free-solid-svg-icons/faStopwatch20';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const slides = carouselRef.current.querySelectorAll("[data-slide]");
    const buttons = carouselRef.current.querySelectorAll("[data-button]");

    let currSlide = 0;
    const maxSlide = slides.length - 1;

    const updateCarousel = (number = 0) => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - number) * 100}%)`;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.dataset.button === "next" ? ++currSlide : --currSlide;

        if (currSlide > maxSlide) {
          currSlide = 0;
        } else if (currSlide < 0) {
          currSlide = maxSlide;
        }

        updateCarousel(currSlide);
      });
    });

    updateCarousel();

    // Clean up event listeners on unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
    <div className="textt">
      <div className='heading2'>International Tour Management.</div>
      <div className="para33">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
    </div>
    <div className="car">
    <div className='carousel' ref={carouselRef}>
      <div className="carousel-wrapper">
        <div className="slide" data-slide>
          <img src={s1} alt="Slide 1" />
        </div>
        <div className="slide" data-slide>
          <img src={s2} alt="Slide 2" />
        </div>
        <div className="slide" data-slide>
          <img src={s3} alt="Slide 3" />
        </div>
        <div className="slide" data-slide>
          <img src={s4} alt="Slide 4" />
        </div>
        <div className="slide" data-slide>
          <img src={s5} alt="Slide 5" />
        </div>
        <button className="btn previous" data-button="previous">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="btn next" data-button="next">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Carousel;
