import React, { useEffect, useState } from "react";
import slide1 from "../assets/slider/slider1.jpg";
import slide2 from "../assets/slider/slider2.jpg";
import slide3 from "../assets/slider/slider3.jpg";

const images = [slide1, slide2, slide3];
const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-full h-full overflow-hidden rounded-md">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-[250px] object-cover transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default AutoImageSlider;
