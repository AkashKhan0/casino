import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import StarButton from "./mini_components/StarButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "nicoplayer" && password === "s12345") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", "Nicoplayer");
      navigate("/");
      window.location.reload(); // redirect to home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="px-2 md:px-5 lg:px-10 w-full h-auto">
      <div className="w-full flex items-center justify-center p-5 mb-5">
        <div className="w-[100%] min-w-[300px] max-w-[600px] h-fit min-h-[300px] rounded-md p-5 forrm flex flex-col items-center justify-center gap-3">
          <form
            autoComplete="off"
            onSubmit={handleLogin}
            className="backdrop-blur-[5px] p-5 bg-[#000000b7] flex flex-col gap-5 rounded-lg w-full min-w-[250px]"
          >
            <h1 className="uppercase text-2xl font-semibold text-center text-[#FCBD00] black_shadow">login</h1>

            <div className="w-full border px-2 rounded-md form_inp">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-1 outline-none bg-transparent placeholder-[#FCBD00]"
                placeholder="Username..."
                required
              />
            </div>

            <div className="w-full border rounded-md flex items-center px-2 form_inp">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                className="w-full py-1 outline-none bg-transparent placeholder-[#FCBD00]"
                required
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <BiHide className="cursor-pointer text-xl text-[#FCBD00]" />
                ) : (
                  <BiShow className="cursor-pointer text-xl text-[#FCBD00]" />
                )}
              </div>
            </div>

            <button className="nav_btn" type="submit">
              <StarButton label="LOGIN" />
            </button>

            <p className="text-center text-[#FCBD00] black_shadow">
              <Link to="/signup">Don't have an account? Sign up now!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
