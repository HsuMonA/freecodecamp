import { createSlice } from "@reduxjs/toolkit";

const minCount = 1;
const maxCount = 60;
export const breakSlice = createSlice({
  name: "break",
  initialState: {
    display: 5,
  },
  reducers: {
    increment: (state) => {
      if (state.display >= minCount && state.display < maxCount) {
        state.display += 1;
      }
    },
    decrement: (state) => {
      if (state.display > minCount && state.display <= maxCount) {
        state.display -= 1;
      }
    },
    resetBreak: (state) => {
      state.display = 5;
    }
  },
});
export const { increment, decrement, resetBreak } = breakSlice.actions;
export const selectBreak = (state) => state.break.display;
export default breakSlice.reducer;
