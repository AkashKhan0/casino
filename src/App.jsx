import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Casino from "./pages/Casino";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Poker from "./pages/Poker";
import Termcondition from "./components/Termcondition";
import Privecypolicy from "./components/Privecypolicy";
import Validation from "./components/Validation";
import Moneylaundering from "./components/Moneylaundering";

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
          <Route path="/casino" element={<Casino />} />
          <Route path="/termcondition" element={<Termcondition />} />
          <Route path="/privecypolicy" element={<Privecypolicy />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/moneylaundering" element={<Moneylaundering />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
