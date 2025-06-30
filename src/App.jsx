import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Casino from "./pages/Casino";
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
<<<<<<< HEAD
          <Route path="/poker" element={<Poker />} />
          <Route path="/casino" element={<Casino />} />
=======
>>>>>>> e46425da074d1c84a33fbcacde318fc1450a6a03
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
