import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading fade-in">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "20px" }} className="fade-in fade-in-delay-1">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={6} lg={6} className="project-card fade-in" key={index} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                whatILearned={project.whatILearned}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
