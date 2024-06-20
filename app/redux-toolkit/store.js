import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./slices/Post-slice";

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});
