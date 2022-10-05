import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { increment, decrement, selectSession } from "./sessionSlice.js";

function Session() {
  const number = useSelector(selectSession);
  const dispatch = useDispatch();

  return (
    <div id="session-label">
      <div>Session</div>
      <button
        id="session-decrement"
        className="button session-decrement rounded-circle"
        onClick={() => dispatch(decrement())}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span id="session-length" className="session-count px-1">
        {number}
      </span>
      <button
        id="session-increment"
        className="button session-increment rounded-circle"
        onClick={() => dispatch(increment())}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Session;
