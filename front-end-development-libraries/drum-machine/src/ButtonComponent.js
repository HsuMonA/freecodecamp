import React from "react";
import useKeypress from "react-use-keypress";
import { useRef } from "react";
import "./ButtonComponent.css";

function ButtonComponent(props) {
  useKeypress(props.letter, () => {
    props.setLetter(props.letter);
    sound.current.currentTime = 0;
    sound.current.play();
  });
  const sound = useRef();
  return (
    <div
      className={`${props.className} btn rounded-3 fw-semibold`}
      id={props.id}
      onClick={() => {
        props.setLetter(props.letter);
        sound.current.currentTime = 0;
        sound.current.play();
      }}
    >
      <div className="position-relative top-50 start-50 translate-middle">
        {props.letter}
      </div>
      <audio
        ref={sound}
        src={props.src}
        type="audio/wav"
        className="clip"
        id={props.id}
      />
    </div>
  );
}

export default ButtonComponent;
