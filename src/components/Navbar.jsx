import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto navbar flex justify-center items-center">
        <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between w-full h-full gap-2">
          <div className="w-full lg:w-[30%]">
            <img src={logo} alt="Logo" className="w-[80%] min-h-10" />
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center gap-5">
            <div className="nav_btn">HOME</div>
            <div className="nav_btn">FEATURES</div>
          </div>
          <div className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-5">
            <div className="nav_btn"><AiOutlineGlobal className="text-2xl"/></div>
            <div className="nav_btn">Register</div>
            <div className="nav_btn">Log In</div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
