import React from "react";
import Card from "react-bootstrap/Card";
import { ImBriefcase, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Divya Akkim!</span>
            <br />
            Working as a Web developer at Humgrow.
            <ul>
            <li className="about-activity">
              <ImBriefcase /> Intern
            </li>
            <li className="about-activity">
              <ImPointRight /> Feb 2023 - Present
            </li>
          </ul>
          Salesforce developer at Smart internz.
          <ul>
            <li className="about-activity">
              <ImBriefcase /> Intern
            </li>
            <li className="about-activity">
              <ImPointRight /> Aug 2022 - Oct 2022
            </li>
          </ul>
          </p>
         
          <footer className="blockquote-footer">Be yourself; everyone else is already taken. </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
