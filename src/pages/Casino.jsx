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
  },
  {
    id: 2,
    name: "Joker's Jewels Wild",
    image: jokerswild,
  },
  {
    id: 3,
    name: "Gold Party",
    image: goldparty,
  },
  {
    id: 4,
    name: "Joker's Jewels Cash",
    image: jokercash,
  },
  {
    id: 5,
    name: "5 Lions Megaways",
    image: vswayslions,
  },
  {
    id: 6,
    name: "Sugar Rush 1000",
    image: Sugarrush,
  },
  {
    id: 7,
    name: "Sweet Bonanza 1000",
    image: Sweet,
  },
  {
    id: 8,
    name: "Jokers Jewels Hot",
    image: JokersJewelsHot,
  },
  {
    id: 9,
    name: "Buffalo King Megaways",
    image: BuffaloKing,
  },
];

const rubyPlayGames = [
  {
    id: 10,
    name: "Volcano Rising SE",
    image: VolcanoRising,
  },
  {
    id: 11,
    name: "Volcano Rising",
    image: VolcanoRising,
  },
  {
    id: 12,
    name: "Zeus Rush Fever Deluxe",
    image: ZeusRush,
  },
  {
    id: 13,
    name: "Vegas No Limit Wins",
    image: Vegas,
  },
  {
    id: 14,
    name: "Rush Fever 7s Deluxe",
    image: Rushfever,
  },
  {
    id: 15,
    name: "Mayan Cache",
    image: Mayancache,
  },
  {
    id: 16,
    name: "Stampede Rush Trident",
    image: Stampede,
  },
  {
    id: 17,
    name: "Shake Shake Money Tree",
    image: Shake,
  },
  {
    id: 18,
    name: "Madame Luck",
    image: Madame,
  },
];

const netEntGames = [
  {
    id: 19,
    name: "Twin Spin Megaways",
    image: TwinSpin,
  },
  {
    id: 20,
    name: "Fruit Shop Megaways",
    image: FruitShop,
  },
  {
    id: 21,
    name: "Buster Bones",
    image: Buster,
  },
  {
    id: 22,
    name: "Dazzle Me Megaways",
    image: DazzleMe,
  },
  {
    id: 23,
    name: "Reel Rush",
    image: ReelRush,
  },
  {
    id: 24,
    name: "Dead or Alive 2 Feature Buy",
    image: Dead,
  },
  {
    id: 25,
    name: "Gonzo's Quest",
    image: Gonzo,
  },
  {
    id: 26,
    name: "Roulette",
    image: Roulette,
  },
  {
    id: 27,
    name: "Flowers Christmas Edition",
    image: Flowerschristmas,
  },
];

const Casino = () => {
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
          <GameCategory title="Pragmatic Play" games={pragmaticGames} />
          <GameCategory title="Ruby Play" games={rubyPlayGames} />
          <GameCategory title="NetEnt" games={netEntGames} />
        </div>
      </div>
    </>
  );
};

export default Casino;
