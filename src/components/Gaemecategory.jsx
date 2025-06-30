import GameCard from "./Gamecard";

const GameCategory = ({ title, games }) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button className="text-sm text-white border border-white rounded-full px-4 py-1 hover:bg-white hover:text-green-900 transition">
          Todos
        </button>
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
