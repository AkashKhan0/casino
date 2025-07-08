import React from "react";
import vbox1 from "../assets/box1/box1.png";
import vbox2 from "../assets/box1/box2.png";
import vbox3 from "../assets/box1/box3.png";
import vbox4 from "../assets/box1/box4.png";
import vbox5 from "../assets/box1/box5.png";
import vbox6 from "../assets/box1/box6.png";
import vbox7 from "../assets/box1/box7.png";
import vbox8 from "../assets/box1/box8.png";

const images = [vbox1, vbox2, vbox3, vbox4, vbox5, vbox6, vbox7, vbox8];

import { FaFantasyFlightGames } from "react-icons/fa";

const Features = () => {
  return (
    <div className="mb-10">
      <div className="w-full h-auto relative overflow-hidden my-10">
          <h1 className="text-3xl md:text-5xl lg:text-9xl font-bold light_text text-center">
            FUNCIONES
          </h1>
      </div>

      <div className=" px-2 md:px-5 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={imgSrc}
              alt={`game-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Features;
