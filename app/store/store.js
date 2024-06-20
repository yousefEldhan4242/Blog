"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    input: counterSlice,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
// import { createWrapper } from "next-redux-wrapper";

// export const makeStore = () => {
//   configureStore({
//     reducer: {
//       input: counterReducer,
//     },
//   });
// };

// export const wrapper = createWrapper(makeStore);
