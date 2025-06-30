import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";

import Carouselpoker6 from "../assets/carouselpoker/aviator.png";
import Carouselpoker1 from "../assets/carouselpoker/bigbass.png";
import Carouselpoker2 from "../assets/carouselpoker/buffeloking.png";
import Carouselpoker5 from "../assets/carouselpoker/megaways.png";
import Carouselpoker3 from "../assets/carouselpoker/olympus.png";
import Carouselpoker4 from "../assets/carouselpoker/sweet.png";

const slides = [
  { id: 1, image: Carouselpoker1 },
  { id: 2, image: Carouselpoker2 },
  { id: 3, image: Carouselpoker3 },
  { id: 4, image: Carouselpoker4 },
  { id: 5, image: Carouselpoker5 },
  { id: 6, image: Carouselpoker6 },
];

const Carouselpoker = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    drag: true,
    created(slider) {
      slider.moveToIdx(0);
    },
  });

  // Autoplay
  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <div className="keen-slider__slide p-2" key={slide.id}>
            <img
              src={slide.image}
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-900"
      >
        &larr;
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-900"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Carouselpoker;
