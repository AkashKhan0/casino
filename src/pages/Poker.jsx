import React from "react";
import { FaFantasyFlightGames } from "react-icons/fa";
import { SiLegacygames } from "react-icons/si";

import AutoImageSlider from "../components/AutoImageSlider";
import CarouselMulti from "../components/Carousel3d";
import Carouselpoker from "../components/Carouselpoker";

const Poker = () => {
  return (
    <>
      <div className=" px-2 md:px-5 lg:px-10 mt-10 mb-10">
        <div className="mb-10 w-full h-fit max-h-[400px] overflow-hidden rounded-md">
          <AutoImageSlider />
        </div>

        <div className="w-full flex gap-5 items-center mb-5">
          <FaFantasyFlightGames className="text-2xl" />
          <h3 className="text-2xl">JUEGOS EXCLUSIVOS</h3>
        </div>
        <div>
          <div className="mb-5">
            <CarouselMulti />
          </div>
          <div>
            <div className="w-full flex gap-5 items-center mb-5">
              <SiLegacygames className="text-2xl" />
              <h3 className="text-2xl">Juegos más Jugados</h3>
            </div>
            <div>
              <Carouselpoker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poker;
