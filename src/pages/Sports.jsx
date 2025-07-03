import React from "react";
import CenterPanel from "../components/CenterPanel";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { BetSlipProvider } from "../context/BetSlipContext";

const Sports = () => {
  return (
    <>
      <BetSlipProvider>
        <div className="flex h-screen bg-gray-900 text-gray-100">
          <LeftSidebar />
          <CenterPanel />
          <RightSidebar />
        </div>
      </BetSlipProvider>
    </>
  );
};

export default Sports;
