import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [character, setCharacter] = useState("");

  return (
    <Container fluid id="calculator" className="vh-100">
      <div
        id="main"
        className="position-relative top-50 start-50 translate-middle"
      >
        <div id="display" className="text-end text-break">
          <Display character={character} />
        </div>
        <div id="buttons" className="grid-container buttons">
          <Button
            id="equals"
            className="button"
            character="="
            type="equals"
            setCharacter={setCharacter}
          />
          <Button
            id="zero"
            className="button"
            character="0"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="one"
            className="button"
            character="1"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="two"
            className="button"
            character="2"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="three"
            className="button"
            character="3"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="four"
            className="button"
            character="4"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="five"
            className="button"
            character="5"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="six"
            className="button"
            character="6"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="seven"
            className="button"
            character="7"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="eight"
            className="button"
            character="8"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="nine"
            className="button"
            character="9"
            type="num"
            setCharacter={setCharacter}
          />
          <Button
            id="clear"
            className="button"
            character="C"
            type="clear"
            setCharacter={setCharacter}
          />
          <Button
            id="add"
            className="button"
            character="+"
            type="add"
            setCharacter={setCharacter}
          />
          <Button
            id="subtract"
            className="button"
            character="-"
            type="subtract"
            setCharacter={setCharacter}
          />
          <Button
            id="multiply"
            className="button"
            character="*"
            type="multiply"
            setCharacter={setCharacter}
          />
          <Button
            id="divide"
            className="button"
            character="/"
            type="divide"
            setCharacter={setCharacter}
          />
          <Button
            id="decimal"
            className="button"
            character="."
            type="decimal"
            setCharacter={setCharacter}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
