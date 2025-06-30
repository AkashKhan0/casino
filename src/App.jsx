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
import Whoweare from "./components/Whoweare";
import Responsiblegaming from "./components/Responsiblegaming";
import Gamerule from "./components/Gamerule";
import Sportsrule from "./components/Sportsrule";
import Glossary from "./components/Glossary";

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

          <Route path="/sportsrule" element={<Sportsrule />} />
          <Route path="/gamerule" element={<Gamerule />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/responsiblegaming" element={<Responsiblegaming />} />
          <Route path="/whoweare" element={<Whoweare />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
