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

import Validation from "./components/Validation";
import Moneylaundering from "./components/Moneylaundering";
import Whoweare from "./components/Whoweare";
import Responsiblegaming from "./components/Responsiblegaming";
import Gamerule from "./components/Gamerule";
import Sportsrule from "./components/Sportsrule";
import Glossary from "./components/Glossary";
import Signup from "./components/Signup";
import Login from "./components/Login";


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
