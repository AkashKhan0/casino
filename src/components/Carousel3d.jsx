import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";

import carousel1 from "../assets/carousel3d/alpha.png";
import carousel2 from "../assets/carousel3d/dragons.png";
import carousel4 from "../assets/carousel3d/feal.png";
import carousel3 from "../assets/carousel3d/pilinko.png";

const slides = [
  { id: 1, image: carousel1 },
  { id: 2, image: carousel2 },
  { id: 3, image: carousel3 },
  { id: 4, image: carousel4 },
];

const CarouselMulti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      // autoplay
      setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            className="keen-slider__slide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
      >
        &rarr;
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselMulti;
