import React from "react";
import { BiShow } from "react-icons/bi";

const Login = () => {
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 w-full h-auto">
        <div className="w-full flex items-center justify-center p-5 mb-5">
          <div className="w-[60%] min-w-[300px] max-w-[600px] h-fit min-h-[300px] rounded-md p-5 forrm flex flex-col items-end justify-center gap-3">
            <form
              action=""
              autocomplete="off"
              className="backdrop-blur-[5px] p-5 bg-transparent flex flex-col gap-5"
            >
              <h1 className="uppercase text-2xl font-semibold">login</h1>

              <div className="w-[200px] border px-2  rounded-md form_inp">
                <input
                  type="text"
                  className="w-full py-1 outline-none bg-transparent"
                  placeholder="Username..."
                  autoComplete="off"
                />
              </div>
              <div className="w-[200px] border rounded-md flex items-center px-2 form_inp">
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="Password..."
                  className="w-full py-1 outline-none bg-transparent"
                />
                <BiShow className="cursor-pointer text-xl text-[#330E3C]" />
              </div>
              <button className="nav_btn">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
