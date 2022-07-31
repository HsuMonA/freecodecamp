import React from "react";
import Markdown from "marked-react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "highlight.js/styles/atom-one-light.css";
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import "./App.css";

function App() {
  Lowlight.registerLanguage("js", javascript);

  const renderer = {
    code(snippet, lang) {
      return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
  };
  const [content, setContent] = useState(
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  );

  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <h1 className="text-center">Markdown Previewer</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div
            className="shadow p-3 mb-5 rounded"
            style={{ backgroundColor: "rgba(255,0,0,.1)" }}
          >
            <h2 className="text-center fst-italic">Editor</h2>
            <textarea
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
              }}
              id="editor"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
        </Col>
        <Col md={6}>
          <div
            className="shadow p-3 mb-5 rounded"
            style={{ width: "100%", backgroundColor: "rgba(0,0,255,.1)" }}
          >
            <h2 className="text-center fst-italic">Preview</h2>
            <div
              id="preview"
              className="overflow-auto"
              style={{ height: "80vh" }}
            >
              <Markdown
                value={content}
                breaks={true}
                gfm={true}
                renderer={renderer}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
