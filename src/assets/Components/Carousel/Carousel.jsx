import React, { useEffect, useRef } from 'react';
import "./Carousel.css";
import bitc from "../Media/bitc.jpeg";
import bitc2 from "../Media/bitc2.jpeg";
import bitc3 from "../Media/bitc3.jpeg";
import bitc4 from "../Media/bitc4.jpeg";
import bitc6 from "../Media/bitc6.jpeg";

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
          <img src={bitc} alt="Slide 1" />
        </div>
        <div className="slide" data-slide>
          <img src={bitc2} alt="Slide 2" />
        </div>
        <div className="slide" data-slide>
          <img src={bitc3} alt="Slide 3" />
        </div>
        <div className="slide" data-slide>
          <img src={bitc4} alt="Slide 4" />
        </div>
        <div className="slide" data-slide>
          <img src={bitc6} alt="Slide 5" />
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
