import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";

export const store = configureStore({
  reducer: {
    genre: genreReducer,
  },
});
