import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nihar Gandhi </span>
            .<span className="purple"> </span>
            <br />
            I am currently pursuing Computer with Marketing at Rochester Institute of Technology, Dubai.
            <br />
            <br />
            Beyond Content Creation, I indulge in a variety of activities that bring me joy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Blog Writer
            </li>
            <li className="about-activity">
              <ImPointRight /> Avid Traveler
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nihar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
