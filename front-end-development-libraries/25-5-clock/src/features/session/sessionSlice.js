import { createSlice } from "@reduxjs/toolkit";

const minCount = 1;
const maxCount = 60;
export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    display: 25,
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
    resetSession: (state) => {
      state.display = 25;
    }
  },
});
export const { increment, decrement, resetSession } = sessionSlice.actions;
export const selectSession = (state) => state.session.display;
export default sessionSlice.reducer;
