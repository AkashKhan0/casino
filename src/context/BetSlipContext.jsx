import { createContext, useContext, useState } from "react";

const BetSlipContext = createContext();

export const BetSlipProvider = ({ children }) => {
  const [bets, setBets] = useState([]);

  const addBet = (bet) => {
    setBets((prev) => {
      if (prev.find((b) => b.id == bet.id)) return prev;
      return [...prev, bet];
    });
  };

  const removeBet = (id) => {
    setBets((prev) => prev.filter((b) => b.id !== id));
  };

  const totalOdds = bets.reduce((acc, b) => acc * b.odds, 1) || 0;
  return (
    <BetSlipContext.Provider value={{ bets, addBet, removeBet, totalOdds }}>
      {children}
    </BetSlipContext.Provider>
  );
};
export const useBetSlip = () => useContext(BetSlipContext);
