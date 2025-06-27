import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import Features from "./pages/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <Chat/>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
