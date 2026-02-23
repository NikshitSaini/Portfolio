import React from "react";
import { Row, Col } from "react-bootstrap";
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
            <div className="achievement-card-view">
              <div style={{ fontSize: "2.8em", textAlign: "center", marginBottom: "12px" }}>
                {achievement.icon}
              </div>
              <div style={{ textAlign: "center", fontWeight: "700", fontSize: "1rem", marginBottom: "6px", color: "var(--text-primary)", fontFamily: "'Outfit', sans-serif" }}>
                {achievement.title}
              </div>
              <div style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {achievement.description}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Achievements;
