import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Poker from "./pages/Poker";

const App = () => {
  return (
    <>
      <Navbar />
      <Chat />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/poker" element={<Poker />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
