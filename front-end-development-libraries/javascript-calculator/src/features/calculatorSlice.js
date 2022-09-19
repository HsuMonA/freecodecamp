import { createSlice } from "@reduxjs/toolkit";
import * as math from "mathjs";

const initialState = {
  display: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    num: (state, action) => {
      state.display = state.display.replace(/^0+/, "") + action.payload;
    },
    add: (state, action) => {
      if (state.display.slice(-2) === "*-") {
        state.display = state.display.slice(0, -2) + action.payload;
      } else if (
        state.display.slice(-1) === "+" ||
        state.display.slice(-1) === "/" ||
        state.display.slice(-1) === "*" ||
        state.display.slice(-1) === "-"
      ) {
        state.display = state.display.slice(0, -1) + action.payload;
      } else {
        state.display = state.display + action.payload;
      }
    },
    divide: (state, action) => {
      if (
        state.display.slice(-1) === "-" ||
        state.display.slice(-1) === "/" ||
        state.display.slice(-1) === "+" ||
        state.display.slice(-1) === "*"
      ) {
        state.display = state.display.slice(0, -1) + action.payload;
      } else {
        state.display = state.display + action.payload;
      }
    },
    multiply: (state, action) => {
      if (
        state.display.slice(-1) === "-" ||
        state.display.slice(-1) === "*" ||
        state.display.slice(-1) === "+" ||
        state.display.slice(-1) === "/"
      ) {
        state.display = state.display.slice(0, -1) + action.payload;
      } else {
        state.display = state.display + action.payload;
      }
    },
    subtract: (state, action) => {
      if (
        state.display.slice(-2) === "--" ||
        state.display.slice(-2) === "/-" ||
        state.display.slice(-2) === "*-" ||
        state.display.slice(-2) === "+-"
      ) {
        state.display = state.display;
      } else if (state.display.slice(-1) === "-") {
        state.display = state.display + action.payload;
      } else {
        state.display = state.display + action.payload;
      }
    },
    clear: (state) => {
      state.display = "0";
    },
    equals: (state) => {
      state.display = math.evaluate(state.display).toString();
    },
    decimal: (state) => {
      const lastNumber = /\d*\.?\d*(\+|\-|\*|\/)?$/; //last number of the display string
      if (state.display.match(lastNumber)[0].includes(".")) {
        state.display = state.display;
      } else {
        state.display = state.display + ".";
      }
    },
  },
});
export const { num, clear, equals, decimal, add, divide, multiply, subtract } =
  calculatorSlice.actions;
export const selectDisplay = (state) => state.calculator.display;

export default calculatorSlice.reducer;
