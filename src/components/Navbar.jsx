import React from "react";
import logo from "../assets/blackk.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto navbar flex justify-center items-center">
        <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between w-full h-full gap-2">
          <div className="w-full lg:w-[30%]">
            <Link to="/"><img src={logo} alt="Logo" className="w-24 h-[70px] min-h-10" /></Link>
            
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center gap-5">
            <div className="nav_btn"><Link to="/">HOME</Link></div>
            <div className="nav_btn"><Link to="/features">FEATURES</Link></div>
          </div>
          <div className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-5">
            <div className="nav_btn"><AiOutlineGlobal className="text-2xl"/></div>
            <div className="nav_btn"><Link to="/signup">Register</Link></div>
            <div className="nav_btn"><Link to="/login">Log In</Link></div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
