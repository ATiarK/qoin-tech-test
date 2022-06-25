import { createSlice } from "@reduxjs/toolkit";

export const listMovieSlice = createSlice({
  name: "listMovie",
  initialState: {
    listMovie: [],
    loading: false,
    error: null,
    count: 1,
  },
  reducers: {
    getListMovieStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getListMovieSuccess: (state, action) => {
      state.listMovie = action.payload;
      state.loading = false;
      state.error = null;
    },
    getListMovieFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getListMovieFinish: (state) => {
      state.loading = false;
    },
  },
});

export const {
  getListMovieStart,
  getListMovieSuccess,
  getListMovieFailure,
  getListMovieFinish,
} = listMovieSlice.actions;

export default listMovieSlice.reducer;
