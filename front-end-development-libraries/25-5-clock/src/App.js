import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Break from "./features/break/Break.js";
import Session from "./features/session/Session.js";
import Timer from "./features/timer/Timer.js";

function App() {
  return (
    <Container fluid className="container vh-100">
      <div
        id="main"
        className="position-relative top-50 start-50 translate-middle"
      >
        <div className="title text-center fs-1 fw-bold my-3">25 + 5 Clock</div>
        <div className="break-session d-flex justify-content-around text-center fs-4 fw-bold my-3">
          <Break />
          <Session />
        </div>
        <div className="timer text-center">
          <Timer />
        </div>
      </div>
    </Container>
  );
}

export default App;
