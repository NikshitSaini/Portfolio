import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikshit Saini </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I'm a problem-driven developer who enjoys turning ideas into real products.
            <br />
            With a strong foundation in DSA (300+ LeetCode problems) and hands-on experience in React Native, Node.js, and AI,
            I focus on building applications that are both technically sound and user-friendly.
            <br />
            I actively learn through projects, competitive programming, and exploring AI-based systems,
            especially in Computer Vision and intelligent apps.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Computer Vision
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Real-World Apps
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
