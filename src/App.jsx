import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

const App = () => {
  return (
    <>
      <Navbar />
      <Chat/>
      <div className="w-full h-full px-2 md:px-5 lg:px-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
