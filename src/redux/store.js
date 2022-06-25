import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import listMovieReducer from "./reducers/listMovie";

export default configureStore({
  reducer: {
    counter: counterReducer,
    listMovie: listMovieReducer,
  },
});
