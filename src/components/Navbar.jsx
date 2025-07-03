import React from "react";
import logo from "../assets/blackk2.png";
import { Link } from "react-router-dom";
import StarButton from "./mini_components/StarButton";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto navbar flex justify-center items-center">
        <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between w-full h-full gap-2">
          <div className="w-full lg:w-[30%]">
            <Link to="/"><img src={logo} alt="Logo" className="w-auto h-[70px] min-h-10" /></Link>
            
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center gap-5">
            <div className="nav_text"><Link to="/">HOME</Link></div>
            <div className="nav_text"><Link to="/features">FEATURES</Link></div>
          </div>
          <div className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-5">
            <div className="nav_btn"><Link to="/signup"> <StarButton label="REGISTER"/> </Link></div>
            <div className="nav_btn"><Link to="/login"> <StarButton label="LOGIN"/> </Link></div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
