import { React, useEffect, useState } from "react";
import { useIntervalWhen, useTimeoutWhen } from "rooks";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";
import { resetBreak, selectBreak } from "../break/breakSlice";
import { resetSession, selectSession } from "../session/sessionSlice";

function Timer() {
  const sessionMinutes = useSelector(selectSession);
  const breakMinutes = useSelector(selectBreak);
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(1500); // 25mins in sec = 25 * 60
  const [startTimer, setStartTimer] = useState(false);
  const [startTimeOut, setStartTimeOut] = useState(false);
  const [timer, setTimer] = useState("session");
  const [displayLabel, setDisplayLabel] = useState("Session");
  const sound = useRef();

  useEffect(
    // the number on the display timer changes when the number on the session is updated
    () => {
      setCountdown(sessionMinutes * 60);
    },
    [sessionMinutes]
  );

  useEffect(
    //run the code below when the countdown is changed
    () => {
      if (countdown === 0) {
        setStartTimeOut(true); // delay changing back to session/break
        setStartTimer(false); // stop the timer
        sound.current.currentTime = 0;
        sound.current.play();
      }
    },
    [countdown]
  );

  useIntervalWhen(
    // run the code below repetitively every 1000 ms if startTimer is true
    () => {
      setCountdown(countdown - 1);
    },
    1000, // run callback every 1 second
    startTimer // start the timer when it's true
  );

  useTimeoutWhen(
    //run the code below only once after 2000 ms if startTimeOut is true
    () => {
      // change back to session/break
      if (countdown === 0 && timer === "session") {
        setStartTimer(true); // start the timer
        setCountdown(breakMinutes * 60);
        setTimer("break");
        setDisplayLabel("Break");
      } else if (countdown === 0 && timer === "break") {
        setStartTimer(true); // start the timer
        setCountdown(sessionMinutes * 60);
        setTimer("session");
        setDisplayLabel("Session");
      }
      setStartTimeOut(false);
    },
    2000,
    startTimeOut
  );

  // convert secs to mins in js (mm:ss)
  function displayTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  }

  return (
    <>
      <div id="timer-label" className="timer-label fs-4 fw-semibold pt-2">
        <span className="display-label w-25 px-5">{displayLabel}</span>
      </div>
      <div className="time-left mb-4 pb-4">
        <span id="time-left" className="display-timer">
          {displayTimer()}
        </span>
      </div>
      <button
        id="start_stop"
        className="control-button w-25"
        onClick={() =>
          startTimer === false ? setStartTimer(true) : setStartTimer(false)
        } // start the timer, stop the timer
      >
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button
        id="reset"
        className="control-button w-25"
        onClick={() => {
          dispatch(resetBreak());
          dispatch(resetSession());
          setCountdown(1500);
          setStartTimer(false);
          sound.current.currentTime = 0;
          sound.current.pause();
          setDisplayLabel("Session");
          setTimer("session");
        }}
      >
        <FontAwesomeIcon icon={faRotate} />
      </button>
      <audio id="beep" ref={sound} src="beep.mp3" type="audio/mp3" />
    </>
  );
}
export default Timer;
