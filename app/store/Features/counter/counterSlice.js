"use client";

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
  reducers: {
    handleInput: (state, action) =>
      (state = {
        ...data,
        [e.target.name]: e.target.value,
        id: lastId,
        userId: lastUserID,
      }),
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   value: "",
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;
