import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="netflix-bg"
        />
        <div className="p-14 absolute bg-[#000000b5] top-[165px] left-[430px] w-[35%] rounded-md">
          <form className=" flex flex-col gap-4">
            <h1 className="text-white text-3xl font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Enter Full Name"
                className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
              />
            )}
            <input
              type="text"
              placeholder="Enter Email Address"
              className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
            />
            <button className="bg-red-700 h-[40px] font-semibold text-[18px] text-white rounded-md">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {isSignInForm && (
              <div className="flex flex-col gap-3">
                <p className="text-[#ffffff9e] text-center font-semibold">OR</p>
                <button className="bg-[#ffffff75] h-[40px] font-semibold text-[18px] text-white rounded-md">
                  Use asign-in code
                </button>
                <button className="text-white font-semibold text-center">
                  Forget password?
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <label className="text-white">Remember me</label>
            </div>
            <div className="">
              <p
                className="text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign up now"
                  : "Already registered? Sign In now"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
