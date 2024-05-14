import React, { useEffect } from "react";
import logo from "../images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscibe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 top-0 flex justify-between items-center">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex gap-2">
          <button
            className="text-white bg-lime-600 w-28 h-10 rounded-md"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            className="text-white bg-red-600 w-20 h-10 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
