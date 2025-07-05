import React from "react";
import text_vdo from "../assets/ftr_bg.mp4";
import vbox1 from '../assets/box1/box1.png'
import vbox2 from '../assets/box1/box2.png'
import vbox3 from '../assets/box1/box3.png'
import vbox4 from '../assets/box1/box4.png'
import vbox5 from '../assets/box1/box5.png'
import vbox6 from '../assets/box1/box6.png'
import vbox7 from '../assets/box1/box7.png'
import vbox8 from '../assets/box1/box8.png'
import { FaFantasyFlightGames } from "react-icons/fa";

const Features = () => {
  return (
    <div className="mb-10">
      <div className="w-full h-[150px] relative overflow-hidden my-5">
          <h1 className="text-9xl font-bold light_text text-center">
            FUNCIONES
          </h1>
      </div>

      <div className=" px-2 md:px-5 lg:px-10">
        <div className="w-full flex gap-5 items-center mb-5">
          <FaFantasyFlightGames className="text-2xl" />
          <h3 className="text-2xl">Pragmatic Play</h3>
        </div>
        <div className="w-full h-auto flex gap-5 justify-between flex-wrap">
          <div className="v_box">
            <img src={vbox1} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox2} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox3} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox4} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox5} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox6} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox7} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox8} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox2} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox3} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox4} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox7} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox2} alt="" />
          </div>
          <div className="v_box">
            <img src={vbox6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
