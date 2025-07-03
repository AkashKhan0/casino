import { Link } from "react-router-dom";
import GameCard from "./Gamecard";
import StarButton from "./mini_components/StarButton";

const GameCategory = ({ title, games }) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#FCBD00]">{title}</h2>
        <Link to=""> <StarButton label="TODOS"/> </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GameCategory;
