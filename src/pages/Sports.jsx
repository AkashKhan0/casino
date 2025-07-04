import React from "react";
import CenterPanel from "../components/CenterPanel";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { BetSlipProvider } from "../context/BetSlipContext";

const Sports = () => {
  return (
    <>
      <BetSlipProvider>
        <div className=" w-full flex h-auto min-h-screen bg-[#590000ea] text-gray-100">
          <div className="w-full flex flex-col md:flex-row lg:flex-row">
            <div className="w-full md:w-[20%] lg:w-[20%] "><LeftSidebar /></div>
            <div className="w-full md:w-[60%] lg:w-[60%] "><CenterPanel /></div>
            <div className="w-full md:w-[20%] lg:w-[20%] "><RightSidebar /></div>
          </div>
          
        </div>
      </BetSlipProvider>
    </>
  );
};

export default Sports;
