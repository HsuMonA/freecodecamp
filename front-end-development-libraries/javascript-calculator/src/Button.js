import React from "react";
import { useDispatch } from "react-redux";
import {
  num,
  clear,
  equals,
  decimal,
  add,
  divide,
  multiply,
  subtract,
} from "./features/calculatorSlice";

function Button(props) {
  const dispatch = useDispatch();
  return (
    <div
      className={props.className}
      id={props.id}
      type={props.type}
      character={props.character}
      onClick={() => {
        // in the case of props.character is equal to "input", dispatch the input() and change the character state to props.character
        switch (props.type) {
          case "num":
            dispatch(num(props.character));
            break;
          case "clear":
            dispatch(clear());
            break;
          case "add":
            dispatch(add(props.character));
            break;
          case "divide":
            dispatch(divide(props.character));
            break;
          case "multiply":
            dispatch(multiply(props.character));
            break;
          case "subtract":
            dispatch(subtract(props.character));
            break;
          case "equals":
            dispatch(equals());
            break;
          case "decimal":
            dispatch(decimal());
            break;
        }
      }}
    >
      {props.character}
    </div>
  );
}

export default Button;
