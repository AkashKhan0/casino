const GameCard = ({ image, name }) => {
    return (
      <div className="flex flex-col items-center w-full max-w-[160px] cursor-pointer">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-[120px] object-cover"
        />
        <p className="text-white text-sm mt-2 text-center">{name}</p>
      </div>
    );
  };
  
  export default GameCard;