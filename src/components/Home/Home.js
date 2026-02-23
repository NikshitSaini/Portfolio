import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Nikshit.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header fade-in">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Nikshit Saini</strong>
              </h1>

              <p className="heading-description blockquote fade-in fade-in-delay-2">
                I'm a 3rd-year B.E. student in Artificial Intelligence & Data Science.
                I build scalable mobile apps, full-stack systems, and AI-driven solutions
                with a strong focus on clean code, performance, and user experience.
              </p>

              <div className="status-badge">
                Currently seeking Software / AI / Full-Stack internships
              </div>

              <div className="heading-type fade-in fade-in-delay-3" style={{ marginTop: "20px" }}>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} className="fade-in fade-in-delay-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={myImg} className="profile-pic" alt="Nikshit Saini" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social fade-in">
              <h1>Get in Touch</h1>
              <p style={{ color: "var(--text-secondary)" }}>
                Let's build something impactful together.
                <br />
                <strong style={{ color: "var(--text-primary)" }}>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
