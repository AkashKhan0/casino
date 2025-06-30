import React from "react";
import Keno from "../assets/TVbet/Keno.png";
import Bet1 from "../assets/Tvbet/1Bet.png";
import Bet5 from "../assets/Tvbet/5Bet.png";
import Bet7 from "../assets/Tvbet/7Bet.png";
import BlackJack from "../assets/Tvbet/Blackjack.png";
import Lucky6 from "../assets/Tvbet/Lucky6.png";
import Poker from "../assets/Tvbet/Poker.png";
import Wheel from "../assets/Tvbet/Wheel.png";
import FastKeno from "../assets/Tvbet/fastKeno.png";
import Roulette from "../assets/Tvbet/roulette.png";
import warelements from "../assets/Tvbet/warOfElements.png";
import AutoImageSlider from "../components/AutoImageSlider";
import GameCategory from "../components/Gaemecategory";

const TVBet = [
  {
    id: 28,
    name: "Roulette",
    image: Roulette,
  },
  {
    id: 29,
    name: "BlackJack",
    image: BlackJack,
  },
  {
    id: 30,
    name: "Poker",
    image: Poker,
  },

  {
    id: 31,
    name: "Wheel",
    image: Wheel,
  },
  {
    id: 32,
    name: "Keno",
    image: Keno,
  },
  {
    id: 33,
    name: "Lucky6",
    image: Lucky6,
  },
  {
    id: 34,
    name: "7Bet",
    image: Bet7,
  },
  {
    id: 35,
    name: "5Bet",
    image: Bet5,
  },
  {
    id: 36,
    name: "Fast Keno",
    image: FastKeno,
  },
  {
    id: 37,
    name: "1Bet",
    image: Bet1,
  },
  {
    id: 38,
    name: "War of Elements",
    image: warelements,
  },
];

const Livecasino = () => {
  return (
    <div className=" px-2 md:px-5 lg:px-10 mt-10 mb-10">
      <div className="mb-10 w-full h-fit max-h-[400px] overflow-hidden rounded-md">
        <AutoImageSlider />
      </div>
      <div className="min-h-screen">
        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 w-full">
          <div className="w-full md:w-full lg:w-1/2 flex items-center justify-start">
            <input
              type="text"
              placeholder="Buscar"
              className="nav_btn w-full rounded-md outline-none"
            />
          </div>

          <div className="w-full md:w-full lg:w-1/2 flex items-center justify-end gap-5">
            <div className="flex gap-4">
              <select className="px-4 nav_btn py-2 rounded-full text-white">
                <option>Categorías</option>
                <option>Slots</option>
                <option>Live Casino</option>
              </select>
              <select className="px-4 nav_btn py-2 rounded-full text-white">
                <option>Proveedores</option>
                <option>Pragmatic Play</option>
                <option>Ruby Play</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <GameCategory title="Tv Bet" games={TVBet} />
        <GameCategory title="Jacktop" games={TVBet} />
        <GameCategory title="Pragmatic live" games={TVBet} />
        <GameCategory title="XPG" games={TVBet} />
      </div>
    </div>
  );
};

export default Livecasino;
