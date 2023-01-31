import React from "react";

import { HeaderWrapper } from "./LoginStyle";

const Login = () => {
  return (
    <HeaderWrapper>
      <div className=" nav h-19"></div>
      <div className="mt-20 w-[500px] py-12 m-auto text-center pt-0 bg-white rounded border border-gray-200 shadow">
        <p className="mb-12 mt-3 text-[22px] font-bold">Welcome Back</p>
        <div class="flex items-start ...">
          <form>
            {" "}
            <p className="text-left ml-4 font-bold break-words mb-3">Username</p>
            <input
              type="text"
              name="name"
              className="border border-black rounded pl-2 ml-4 px-7 mb-6"
            />
            <p className="text-left ml-4 font-bold break-words">Password</p>
            <input
              type="text"
              name="name"
              className="border border-black rounded pl-2 ml-4 px-7"
            />
          </form>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Login;
