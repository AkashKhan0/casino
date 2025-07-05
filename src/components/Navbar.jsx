import React, { useEffect, useState } from "react";
import logo from "../assets/blackk2.png";
import { Link, useNavigate } from "react-router-dom";
import StarButton from "./mini_components/StarButton";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = localStorage.getItem("username");

    if (loginStatus && savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="relative">
      <div className="w-full h-auto navbar flex justify-center items-center">
        <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between w-full h-full gap-2">
          <div className="w-full lg:w-[30%]">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-auto h-[70px] min-h-10" />
            </Link>
          </div>

          <div className="w-full lg:w-[40%] flex items-center justify-center gap-5">
            <div className="nav_text">
              <Link to="/">HOME</Link>
            </div>
            <div className="nav_text">
              <Link to="/features">FEATURES</Link>
            </div>

            {isLoggedIn && (
              <>
                <div className="nav_text"><Link to="/casino">CASINO</Link></div>
                <div className="nav_text"><Link to="/sports">SPORTS</Link></div>
                <div className="nav_text"><Link to="/tvbet">TVBET</Link></div>
              </>
            )}
          </div>

          <div className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-5 relative">
            {!isLoggedIn ? (
              <>
                <div className="nav_btn">
                  <Link to="/signup">
                    <StarButton label="REGISTER" />
                  </Link>
                </div>
                <div className="nav_btn">
                  <Link to="/login">
                    <StarButton label="LOGIN" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="nav_btn">
                  <StarButton label="WALLET" />
                </div>
                <div className="nav_btn">
                  <StarButton label="BALANCE" />
                </div>
                <div className="relative">
                  <div
                    className="cursor-pointer flex items-center gap-2 text-white"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <FaUserCircle className="text-2xl" />
                    <span className="uppercase">{username}</span>
                  </div>

                  {showDropdown && (
                    <div className="absolute top-10 right-0 bg-white text-black rounded shadow-lg p-3 w-[150px] z-50">
                      <Link to="/profile" className="block mb-2 hover:underline">Profile</Link>
                      <button onClick={handleLogout} className="w-full text-left hover:underline">Logout</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;