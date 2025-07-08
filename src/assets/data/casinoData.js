// src/data/casinoData.js
import megaSpinImg from "../box1/box1.png";
import goldenFortuneImg from "../box1/box2.png";
import starBlastImg from "../box1/box3.png";
import euroRouletteImg from "../box1/box4.png";
import americanRouletteImg from "../box1/box5.png";
import classicBlackjackImg from "../box1/box6.png";
import vegasStripImg from "../box1/box7.png";

const casinoData = {
  PragmaticPlay: [
    { name: "Mega Spin", image: megaSpinImg },
    { name: "Golden Fortune", image: goldenFortuneImg },
    { name: "Star Blast", image: starBlastImg },
  ],
  BGaming: [
    { name: "European Roulette", image: euroRouletteImg },
    { name: "American Roulette", image: americanRouletteImg },
  ],
  Pragmatic: [
    { name: "Classic Blackjack", image: classicBlackjackImg },
    { name: "Vegas Strip Blackjack", image: vegasStripImg },
  ],
  RubyPlay: [
    { name: "Classic Blackjack", image: classicBlackjackImg },
    { name: "Vegas Strip Blackjack", image: vegasStripImg },
  ],
};

export default casinoData;
