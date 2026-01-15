import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.whatILearned && (
          <>
            <Card.Text style={{ fontWeight: "bold", marginTop: "10px" }}>
              What I Learned:
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontStyle: "italic" }}>
              {props.whatILearned}
            </Card.Text>
          </>
        )}
        {props.link && (
          <Button variant="primary" href={props.link} target="_blank" className="download-button">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View on GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
