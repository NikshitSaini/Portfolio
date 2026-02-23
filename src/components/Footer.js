import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ alignItems: "center" }}>
        <Col md="4" className="footer-copywright">
          <h3>
            Built with 💜 by <strong style={{ color: "var(--text-primary)" }}>Nikshit Saini</strong>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
