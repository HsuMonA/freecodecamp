import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "./features/calculatorSlice";

function Display() {
  const display = useSelector(selectDisplay);
  return (
    <div>
      {display}
    </div>
  );
}

export default Display;
