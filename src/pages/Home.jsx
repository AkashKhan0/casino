import React from "react";
import AutoImageSlider from "../components/AutoImageSlider";
import box1 from "../assets/box1/box1.png";
import box2 from "../assets/box1/box2.png";
import box3 from "../assets/box1/box3.png";
import box4 from "../assets/box1/box4.png";
import box5 from "../assets/box1/box5.png";
import box6 from "../assets/box1/box6.png";
import box7 from "../assets/box1/box7.png";
import box8 from "../assets/box1/box8.png";

const gameData = {
  "JUEGOS EXCLUSIVOS": [box1, box2, box3, box4],
  "Juegos más Jugados": [box5, box6, box7, box8],
};


const Home = () => {
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-col lg:flex-row w-full justify-between gap-5 my-10">
        <div className="w-full h-auto lg:w-[40%] min-h-[250px] rounded-md">
          <div className="w-full h-auto min-h-[250px]">
            <AutoImageSlider />
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full rounded-md">
          <div className="w-full min-h-[250px]">
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">

              <div className="boxs w-full h-full border-[#000169] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#000169] min-h-[250px]">
                <img
                  src={box1}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxs border-[#1E4A34] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#FDD950]">
                <img
                  src={box2}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxs border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
            </div>
          </div>
        </div>

      </div>

        <div className="w-full py-6 px-2 md:px-5 lg:px-10 ">
      {Object.entries(gameData).map(([category, images]) => (
        <div key={category}>
          <h2 className="text-xl md:text-2xl font-semibold text-[#FCBD00] my-4">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
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
      ))}
    </div>


    </div>
  );
};

export default Home;
