import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIE_LIST, API_KEY } from "../../constants/api";

const initialState = {
  movieList: [],
};

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const response = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`);
  return response.data.results;
});

export const movieListSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //hhtp request
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });
  },
});

export const {} = movieListSlice.actions;

export default movieListSlice.reducer;
