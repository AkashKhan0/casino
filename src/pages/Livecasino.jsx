import React, { useState, useEffect } from "react";
// import casinoData from "../assets/data/casinoData";
import liveCasinoData from "../assets/data/liveCasinoData";
const Livecasino = () => {

   const categories = Object.keys(liveCasinoData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(liveCasinoData[categories[0]]);
  const [activeBySearch, setActiveBySearch] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredItems(liveCasinoData[activeCategory]);
      setActiveBySearch(false);
    } else {
      let found = false;
      for (const category of categories) {
        const items = liveCasinoData[category];
        const matched = items.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matched.length > 0) {
          setActiveCategory(category);
          setFilteredItems(matched);
          found = true;
          break;
        }
      }
      if (!found) setFilteredItems([]);
      setActiveBySearch(true);
    }
  }, [searchTerm, activeCategory]);


  return (
    <div className="flex flex-col md:flex-row w-full h-auto p-5 gap-5 bg-[#000000a9]">
      {/* Left Side - Categories */}
      <div className="w-full md:w-[20%]">
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-left px-3 py-1 rounded-md ${
                activeCategory === category && !activeBySearch
                  ? "bg-yellow-400 text-black font-bold"
                  : "bg-gray-800 text-white hover:bg-yellow-500 hover:text-black"
              }`}
              onClick={() => {
                setActiveCategory(category);
                setSearchTerm("");
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Items */}
      <div className="w-full md:w-[80%]">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Search game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FCBD00] border-[#330e3c] border-2 px-3 py-1 text-[#330e3c] placeholder-[#590000] outline-none rounded-md"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-[#FFBC07]">{activeCategory}</h2>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden flex flex-col items-center cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Livecasino;
