import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import DisplayComponent from "./DisplayComponent";

function App() {
  const [letter, setLetter] = useState("");

  return (
    <Container fluid id="drum-machine" className="main vh-100">
      <div
        id="main"
        className="position-relative top-50 start-50 translate-middle border-4 text-center"
      >
        <Row>
          <Col>
            <p className="fw-bold fs-4 fst-italic title">Drum Machine</p>
          </Col>
          <Col xs={6} sm={4}>
            <DisplayComponent
              id="display"
              letter={letter}
              className="display"
            />
          </Col>
        </Row>
        <Row className="p-1">
          <Col>
            <ButtonComponent
              id="Q"
              className="drum-pad group-1"
              letter="Q"
              src="drum-sounds/Q.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="W"
              className="drum-pad group-1"
              letter="W"
              src="drum-sounds/W.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="E"
              className="drum-pad group-1"
              letter="E"
              src="drum-sounds/E.wav"
              setLetter={setLetter}
            />
          </Col>
        </Row>
        <Row className="p-1">
          <Col>
            <ButtonComponent
              id="A"
              className="drum-pad group-2"
              letter="A"
              src="drum-sounds/A.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="S"
              className="drum-pad group-2"
              letter="S"
              src="drum-sounds/S.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="D"
              className="drum-pad group-2"
              letter="D"
              src="drum-sounds/D.wav"
              setLetter={setLetter}
            />
          </Col>
        </Row>
        <Row className="p-1">
          <Col>
            <ButtonComponent
              id="Z"
              className="drum-pad group-3"
              letter="Z"
              src="drum-sounds/Z.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="X"
              className="drum-pad group-3"
              letter="X"
              src="drum-sounds/X.wav"
              setLetter={setLetter}
            />
          </Col>
          <Col>
            <ButtonComponent
              id="C"
              className="drum-pad group-3"
              letter="C"
              src="drum-sounds/C.wav"
              setLetter={setLetter}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
