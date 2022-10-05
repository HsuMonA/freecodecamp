import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { increment, decrement, selectBreak } from "./breakSlice.js";

function Break() {
  const number = useSelector(selectBreak);
  const dispatch = useDispatch();

  return (
    <div id="break-label">
      <div>Break</div>
      <button
        id="break-decrement"
        className="button break-decrement rounded-circle"
        onClick={() => dispatch(decrement())}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span id="break-length" className="break-count px-1">
        {number}
      </span>
      <button
        id="break-increment"
        className="button break-increment rounded-circle"
        onClick={() => dispatch(increment())}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Break;
