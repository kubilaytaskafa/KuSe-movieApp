import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";
import movieReducer from "./slices/MovieListSlice";

export const store = configureStore({
  reducer: {
    genre: genreReducer,
    movieList: movieReducer,
  },
});
