import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Privecypolicy from "./components/Privecypolicy";
import Termcondition from "./components/Termcondition";
import Casino from "./pages/Casino";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Livecasino from "./pages/Livecasino";
import Poker from "./pages/Poker";

import Gamerule from "./components/Gamerule";
import Glossary from "./components/Glossary";
import Login from "./components/Login";
import Moneylaundering from "./components/Moneylaundering";
import Responsiblegaming from "./components/Responsiblegaming";
import Signup from "./components/Signup";
import Sportsrule from "./components/Sportsrule";
import Validation from "./components/Validation";
import Whoweare from "./components/Whoweare";
import Sports from "./pages/Sports";

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
          <Route path="/Livecasino" element={<Livecasino />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/termcondition" element={<Termcondition />} />
          <Route path="/privecypolicy" element={<Privecypolicy />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/moneylaundering" element={<Moneylaundering />} />

          <Route path="/sportsrule" element={<Sportsrule />} />
          <Route path="/gamerule" element={<Gamerule />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/responsiblegaming" element={<Responsiblegaming />} />
          <Route path="/whoweare" element={<Whoweare />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
