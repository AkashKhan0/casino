import { useState } from "react";
import Madame from "../assets/Rubyplay/1_300x300.png";
import Mayancache from "../assets/Rubyplay/501_300x300.png";
import Vegas from "../assets/Rubyplay/507_300x300.png";
import Rushfever from "../assets/Rubyplay/510_300x300.png";
import Shake from "../assets/Rubyplay/522_300x300.png";
import ZeusRush from "../assets/Rubyplay/555_300x300.png";
import Stampede from "../assets/Rubyplay/589_300x300.png";
import VolcanoRising from "../assets/Rubyplay/763_300x300.png";
import Buster from "../assets/netEntGames/busters_bones.jpg";
import DazzleMe from "../assets/netEntGames/dazzle_me_megaways.jpg";
import Dead from "../assets/netEntGames/dead_or_alive_2_fb.jpg";
import Flowerschristmas from "../assets/netEntGames/flowers_christmas.jpg";
import FruitShop from "../assets/netEntGames/fruit_shop_megaways.jpg";
import Gonzo from "../assets/netEntGames/gonzos_quest_touch.jpg";
import ReelRush from "../assets/netEntGames/reel_rush_html.jpg";
import Roulette from "../assets/netEntGames/roulette_touch.jpg";
import TwinSpin from "../assets/netEntGames/twin_spin_megaways.jpg";
import jokersjewel from "../assets/pregmaticgames/jokers-jewels.gif";
import JokersJewelsHot from "../assets/pregmaticgames/vs10jokerhot_narrow.jpg";
import Sweet from "../assets/pregmaticgames/vs20fruitswx_narrow.jpg";
import Sugarrush from "../assets/pregmaticgames/vs20sugarrushx_narrow.jpg";
import goldparty from "../assets/pregmaticgames/vs25goldparty_narrow.jpg";
import jokerswild from "../assets/pregmaticgames/vs5jjwild_narrow.jpg";
import jokercash from "../assets/pregmaticgames/vs5jokerjc_narrow.jpg";
import BuffaloKing from "../assets/pregmaticgames/vswaysbufking_narrow.jpg";
import vswayslions from "../assets/pregmaticgames/vswayslions_narrow.jpg";
import AutoImageSlider from "../components/AutoImageSlider";
import GameCategory from "../components/Gaemecategory";
const pragmaticGames = [
  {
    id: 1,
    name: "Joker's Jewels",
    image: jokersjewel,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 2,
    name: "Joker's Jewels Wild",
    image: jokerswild,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 3,
    name: "Gold Party",
    image: goldparty,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 4,
    name: "Joker's Jewels Cash",
    image: jokercash,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 5,
    name: "5 Lions Megaways",
    image: vswayslions,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 6,
    name: "Sugar Rush 1000",
    image: Sugarrush,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 7,
    name: "Sweet Bonanza 1000",
    image: Sweet,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 8,
    name: "Jokers Jewels Hot",
    image: JokersJewelsHot,
    category: "Slots",
    provider: "Pragmatic Play",
  },
  {
    id: 9,
    name: "Buffalo King Megaways",
    image: BuffaloKing,
    category: "Slots",
    provider: "Pragmatic Play",
  },
];

const rubyPlayGames = [
  {
    id: 10,
    name: "Volcano Rising SE",
    image: VolcanoRising,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 11,
    name: "Volcano Rising",
    image: VolcanoRising,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 12,
    name: "Zeus Rush Fever Deluxe",
    image: ZeusRush,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 13,
    name: "Vegas No Limit Wins",
    image: Vegas,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 14,
    name: "Rush Fever 7s Deluxe",
    image: Rushfever,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 15,
    name: "Mayan Cache",
    image: Mayancache,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 16,
    name: "Stampede Rush Trident",
    image: Stampede,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 17,
    name: "Shake Shake Money Tree",
    image: Shake,
    category: "Slots",
    provider: "Ruby Play",
  },
  {
    id: 18,
    name: "Madame Luck",
    image: Madame,
    category: "Slots",
    provider: "Ruby Play",
  },
];

const netEntGames = [
  {
    id: 19,
    name: "Twin Spin Megaways",
    image: TwinSpin,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 20,
    name: "Fruit Shop Megaways",
    image: FruitShop,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 21,
    name: "Buster Bones",
    image: Buster,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 22,
    name: "Dazzle Me Megaways",
    image: DazzleMe,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 23,
    name: "Reel Rush",
    image: ReelRush,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 24,
    name: "Dead or Alive 2 Feature Buy",
    image: Dead,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 25,
    name: "Gonzo's Quest",
    image: Gonzo,
    category: "Slots",
    provider: "NetEnt",
  },
  {
    id: 26,
    name: "Roulette",
    image: Roulette,
    category: "Live Casino",
    provider: "NetEnt",
  },
  {
    id: 27,
    name: "Flowers Christmas Edition",
    image: Flowerschristmas,
    category: "Slots",
    provider: "NetEnt",
  },
];

const Casino = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");

  const filterGames = (games) => {
    return games?.filter((game) => {
      const matchesSearch =
        !searchText.trim() ||
        game.name.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        !selectedCategory || game.category === selectedCategory;

      const matchesProvider =
        !selectedProvider || game.provider === selectedProvider;

      return matchesSearch && matchesCategory && matchesProvider;
    });
  };
  return (
    <>
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
                className="w-full rounded-md outline-none bg-[#FCBD00] border-[#330e3c] border-2 px-3 py-1 text-[#330e3c] placeholder-[#590000]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className="w-full md:w-full lg:w-1/2 flex items-center justify-end gap-5">
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 bg-[#FCBD00] outline-none py-2 rounded-lg text-[#330e3c] border-[#330e3c] border-2"
                >
                  <option>Categorías</option>
                  <option>Slots</option>
                  <option>Live Casino</option>
                </select>
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="px-4 bg-[#FCBD00] outline-none py-2 rounded-lg text-[#330e3c] border-[#330e3c] border-2"
                >
                  <option>NetEnt</option>
                  <option>Pragmatic Play</option>
                  <option>Ruby Play</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categories */}
          <GameCategory
            title="Pragmatic Play"
            games={filterGames(pragmaticGames)}
          />
          <GameCategory title="Ruby Play" games={filterGames(rubyPlayGames)} />
          <GameCategory title="NetEnt" games={filterGames(netEntGames)} />
        </div>
      </div>
    </>
  );
};

export default Casino;
