import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 w-full h-auto">
        <div className="w-full flex items-center justify-center p-5 mb-5">
          <div className="w-[70%] min-w-[300px] max-w-[700px] h-fit min-h-[300px] rounded-md p-5 forrm flex flex-col items-end justify-center gap-3">
            <form
              action=""
              autocomplete="off"
              className="backdrop-blur-[3px] p-5 bg-transparent flex flex-col gap-5 border w-1/2 min-w-[250px]"
            >
              <h1 className="uppercase text-2xl font-semibold text-center">login</h1>

              <div className="w-full border px-2  rounded-md form_inp">
                <input
                  type="text"
                  className="w-full py-1 outline-none bg-transparent"
                  placeholder="Username..."
                  autoComplete="off" required
                />
              </div>

              <div className="w-full border rounded-md flex items-center px-2 form_inp">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Password..."  required
                  className="w-full py-1 outline-none bg-transparent"
                />

                <div
                  className=""
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <BiHide className="cursor-pointer text-xl text-[#330E3C]" />
                  ) : (
                    <BiShow className="cursor-pointer text-xl text-[#330E3C]" />
                  )}
                </div>
              </div>
              <button className="nav_btn">Log in</button>

              <p className="text-center"><Link to="/signup">Don't have an account? Sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
