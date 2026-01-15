import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ACHIEVEMENTS } from "../../Constants";

function Achievements() {
  return (
    <>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Achievements </strong> & Certifications
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {ACHIEVEMENTS.map((achievement, index) => (
          <Col md={4} className="achievement-card" key={index}>
            <Card className="achievement-card-view">
              <Card.Body>
                <div style={{ fontSize: "3em", textAlign: "center", marginBottom: "10px" }}>
                  {achievement.icon}
                </div>
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  {achievement.title}
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  {achievement.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Achievements;
