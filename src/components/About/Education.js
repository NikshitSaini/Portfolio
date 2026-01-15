import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { EDUCATION } from "../../Constants";

function Education() {
  return (
    <>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Education</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {EDUCATION.map((edu, index) => (
          <Col md={6} key={index} style={{ paddingBottom: "20px" }}>
            <Card className="quote-card-view">
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", color: "#c770f0" }}>
                  {edu.degree}
                </Card.Title>
                <Card.Subtitle className="mb-2" style={{ paddingTop: "10px" }}>
                  {edu.institution}
                </Card.Subtitle>
                <Card.Text style={{ paddingTop: "5px" }}>
                  <strong>Duration:</strong> {edu.duration}
                </Card.Text>
                {edu.cgpa && (
                  <Card.Text>
                    <strong>CGPA:</strong> {edu.cgpa}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Education;
