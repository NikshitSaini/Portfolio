import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack(props) {
  const percentage = (props.initialRating / 5) * 100;

  return (
    <Row style={{ justifyContent: "left", paddingBottom: "12px", alignItems: "center" }}>
      <Col className="skill-name" xs={5}>
        {props.name}
      </Col>
      <Col xs={7}>
        <div className="rating">
          <div
            className="rating-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
