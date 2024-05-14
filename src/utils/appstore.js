import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
import gptReducer from "../utils/gptSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptReducer,
  },
});

export default appStore;
