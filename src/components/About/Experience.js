import React from "react";
import { EXPERIENCE } from "../../Constants";

function Experience() {
  return (
    <div className="experience-section">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Experience</strong>
      </h1>
      <div className="experience-timeline">
        {EXPERIENCE.map((exp, index) => (
          <div className="experience-item fade-in" key={index}>
            <div className={`experience-dot ${exp.ongoing ? "ongoing" : ""}`} />
            <div className="experience-card">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-role">{exp.role}</div>
              <div className="experience-duration">
                {exp.duration}
                {exp.ongoing && (
                  <span className="ongoing-badge">Ongoing</span>
                )}
              </div>
              <div className="experience-description">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
