import React, { useState } from "react";
import { liveGames, tableGames, betOnGamesTabs } from "../assets/data/tvbet";

const GameCard = ({ img, name }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
    <img src={img} alt={name} className="w-full h-full object-cover aspect-[4/3]" />
    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">LIVE</div>
    <div className="text-center mt-2 text-white font-medium">{name}</div>
  </div>
);

const Tvbet = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full px-4 py-6 space-y-10">
      {/* Show Games */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#FCBD00] mb-4">Show Games</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {liveGames.map((item, idx) => (
            <GameCard key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Table Games */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#FCBD00] mb-4">Table Games</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tableGames.map((item, idx) => (
            <GameCard key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Bet on Games */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#FCBD00] mb-4">Bet on Games</h2>
        <div className="flex gap-4 flex-wrap mb-4">
          {Object.keys(betOnGamesTabs).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1 rounded-md text-sm font-medium border transition-all duration-200 bg-[#590000] ${
                activeTab === tab ? "bg-[#FCBD00] text-black" : "text-white border-white hover:bg-[#FCBD00] hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {betOnGamesTabs[activeTab].map((item, idx) => (
            <GameCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tvbet;
