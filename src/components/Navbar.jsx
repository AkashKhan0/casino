import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/blackk2.png";
import { Link, useNavigate } from "react-router-dom";
import StarButton from "./mini_components/StarButton";
import { FaUserCircle } from "react-icons/fa";
import Popupwllt from "./mini_components/Popupwllt";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const [popupwlltVisible, setPopupwlltVisible] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // hide after 5s
  };

  useEffect(() => {
    // ✅ Login Status Check
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = localStorage.getItem("username");

    if (loginStatus && savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    }

    // ✅ Handle Outside Click for Dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // ✅ Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          <div className={`${isLoggedIn ? "hidden" : "w-full lg:w-[30%]"}`}>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-auto h-[70px] min-h-10" />
            </Link>
          </div>

          <div
            className={`w-full lg:w-[40%] flex flex-wrap items-center gap-2 ${
              isLoggedIn ? "lg:w-[60%] py-5" : "lg:w-[40%]"
            }`}
          >
            <div className="nav_text">
              <Link to="/">INICIO</Link>
            </div>
            <div className="nav_text">
              <Link to="/features">FUNCIONES</Link>
            </div>

            {isLoggedIn && (
              <>
                <div className="nav_text">
                  <Link to="/livecasino">CASINO EN VIVO</Link>
                </div>
                <div className="nav_text">
                  <Link to="/casino">CASINO</Link>
                </div>
                <div className="nav_text">
                  <Link to="/bswgames">CASINO 2</Link>
                </div>
                <div className="nav_text">
                  <Link to="/sports">DEPORTES</Link>
                </div>
                <div className="nav_text">
                  <Link to="/tvbet">TVBET</Link>
                </div>
                <div className="nav_text">
                  <Link to="/poker">POKER</Link>
                </div>
                <div className="nav_text_vip">
                  <button className="vip_button" onClick={handleClick}>
                    <span className="liquid"></span>
                    <span className="btn-txt">SALON V.I.P.</span>
                  </button>
                </div>
                {showPopup && (
                  <div className=" absolute mt-4 p-4 bg-green-500 text-white rounded shadow">
                    ⚠️ Para entrar al salón VIP, debes tener más de $1.000.000
                    en saldo.
                  </div>
                )}
              </>
            )}
          </div>

          <div
            className={`w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-3 relative ${
              isLoggedIn ? "lg:w-[40%]" : "lg:w-[30%]"
            }`}
          >
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
                <div className="nav_btn" onClick={() => setPopupwlltVisible(true)}>
                  <StarButton label="Billetera" />
                </div>

                <div className="nav_btn">
                  <StarButton label="32,5288,879.00" />
                </div>
                <div className="relative">
                  <div
                    className="cursor-pointer flex items-center gap-2 text-white"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span className="">
                      {username.length > 10
                        ? username.slice(0, 10) + ".."
                        : username}
                    </span>
                    <FaUserCircle className="text-2xl" />
                  </div>

                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-12 right-0 bg-[#cd0000f1] text-black shadow-lg w-[150px] z-50"
                    >
                      <Link to="/profile" className="">
                        <div className="w-full flex items-center justify-center py-1 hover:bg-[#590000] hover:text-[#FFBC07] text-white duration-300">
                          Profile
                        </div>
                      </Link>
                      <div className="w-full flex items-center justify-center py-1 hover:bg-[#590000] hover:text-[#FFBC07] text-white duration-300">
                        <button onClick={handleLogout} className="w-full">
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Show Popupwllt Component */}
      {popupwlltVisible && (
        <Popupwllt onClose={() => setPopupwlltVisible(false)} />
      )}
    </div>
  );
};

export default Navbar;
