import React from "react";
import "./DisplayComponent.css";

function DisplayComponent(props) {
  const displayTexts = {
    Q: "Snare",
    W: "Snare 2",
    E: "Hat 1",
    A: "Kick 1",
    S: "Hat 2",
    D: "Hat 3",
    Z: "Hat 4",
    X: "Kick 2",
    C: "Kick 3",
  };
  return (
    <div id="display" className="font-monospace border border-2 p-2 m-2">
      {displayTexts[props.letter]}
    </div>
  );
}

export default DisplayComponent;
