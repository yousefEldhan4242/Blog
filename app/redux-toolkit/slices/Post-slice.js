import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: 0,
  userId: 0,
  title: "",
  body: "",
};

export const postSlice = createSlice({
  initialState,
  name: "postSlice",
  reducers: {
    handleInput: (state, action) => {
      // Using immer's draft state to mutate the state directly
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetPost: () => initialState,
  },
});

export const { handleInput, resetPost } = postSlice.actions;

export default postSlice.reducer;
