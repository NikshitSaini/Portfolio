import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  // Split tech string into array for badges
  const techList = props.technologyUsed
    ? props.technologyUsed.split(",").map((t) => t.trim())
    : [];

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <div className="tech-badges">
          {techList.map((tech, i) => (
            <span className="tech-badge" key={i}>
              {tech}
            </span>
          ))}
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.whatILearned && (
          <div className="what-learned-section">
            <div className="what-learned-label">💡 What I Learned</div>
            <div className="what-learned-text">{props.whatILearned}</div>
          </div>
        )}

        {props.link && (
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            className="download-button"
            style={{ marginTop: "15px" }}
          >
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View on GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
