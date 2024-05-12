import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix-bg"
      />
      <Header />
      <div className="p-14 absolute bg-[#000000b5] top-[165px] left-[430px] w-[35%] rounded-md">
        <form
          className=" flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Full Name"
              className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Enter Email Address"
            className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-transparent border-[1px] border-[#ffffff70] rounded-md h-[55px] text-white focus-visible:outline-none"
            ref={password}
          />
          <p className="text-red-500 font-semibold">{errorMessage}</p>
          <button
            className="bg-red-700 h-[40px] font-semibold text-[18px] text-white rounded-md"
            onClick={handleButtonClick}
          >
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
            <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign up now"
                : "Already registered? Sign In now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
