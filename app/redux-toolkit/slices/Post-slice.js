import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  initialState: {
    id: 0,
    userId: 0,
    title: "",
    body: "",
  },
  name: "postSlice",
  reducers: {
    handleInput: (state, action) => {
      // Using immer's draft state to mutate the state directly
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { handleInput } = postSlice.actions;

export default postSlice.reducer;
