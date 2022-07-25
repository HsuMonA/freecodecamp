import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faTumblr);

function App() {
  const [num, setNum] = useState(0);
  const quotes = [
    "“Change your thoughts and you change your world.”",
    "“Very little is needed to make a happy life, it is all within yourself, in your way of thinking.”",
    "“Life is from the inside out. When you shift on the inside, life shifts on the outside.”",
    "“The mind is everything. What you think you become.”",
    "“Life can be simple and beautiful. Focus on the good things.”",
    "“If you don’t like something change it; if you can’t change it, change the way you think about it.”",
    "“Your mind is your greatest power. Use it well.”",
    "“She knew the power of her mind and  so programmed it for success.”",
    "“Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become a reality.”",
    "“Your mind is precious. It has the power to unlock infinite possibilities.”",
  ];
  const authors = [
    "Norman Vincent",
    "Marcus Aurelius",
    "Kamal Ravikant",
    "Buddha",
    "Maxime Lagacé",
    "Mary Engelbreit",
    "Aneta Cruz",
    "Carrie Green",
    "Earl Nightingale ",
    "Joel Annesley",
  ];
  const textColors = [
    "crimson",
    "darkcyan",
    "darkmagenta",
    "chocolate",
    "forestgreen",
    "indianred",
    "sandybrown",
    "tan",
    "tomato",
    "steelblue",
  ];
  const backgroundColors = [
    "crimson",
    "darkcyan",
    "darkmagenta",
    "chocolate",
    "forestgreen",
    "indianred",
    "sandybrown",
    "tan",
    "tomato",
    "steelblue",
  ];
  function randomize() {
    setNum(Math.floor(Math.random() * 10));
  }
  const quote = quotes[num];
  const author = authors[num];
  const textColor = textColors[num];
  const backgroundColor = backgroundColors[num];
  return (
    <Container
      fluid
      className="main vh-100"
      style={{ backgroundColor: backgroundColor }}
    >
      <Card
        id="quote-box"
        className="top-50 start-50 translate-middle shadow rounded"
        style={{ maxWidth: "40rem" }}
      >
        <Card.Header className="fw-bold" style={{ color: textColor }}>
          Quote
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote">
            <p id="text" className="fw-normal p-3" style={{ color: textColor }}>
              {quote}
            </p>
            <footer
              id="author"
              className="blockquote-footer fst-italic"
              style={{ color: textColor }}
            >
              {author}
            </footer>
          </blockquote>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-1">
              <Button
                id="tweet-quote"
                href="https://twitter.com/intent/tweet"
                target="_blank"
                style={{ backgroundColor: backgroundColor }}
              >
                <FontAwesomeIcon icon="fab fa-twitter" />
              </Button>
              <Button
                id="tumblr-quote"
                href="https://www.tumblr.com/explore/trending?source=homepage_explore"
                target="_blank"
                style={{ backgroundColor: backgroundColor }}
              >
                <FontAwesomeIcon icon="fab fa-tumblr" />
              </Button>
            </div>
            <Button
              id="new-quote"
              onClick={randomize}
              variant="primary"
              style={{ backgroundColor: backgroundColor }}
            >
              New quote
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
