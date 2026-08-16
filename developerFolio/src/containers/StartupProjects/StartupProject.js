import React, {useState, useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [showAll, setShowAll] = useState(false);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects || !bigProjects.display) {
    return null;
  }

  const INITIAL_LIMIT = 5;
  const visibleProjects = showAll
    ? bigProjects.projects
    : bigProjects.projects.slice(0, INITIAL_LIMIT);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {visibleProjects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image?.default || project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.techStack && project.techStack.length > 0 ? (
                      <div className="project-tech-stack">
                        <span
                          className={
                            isDark
                              ? "tech-stack-label dark-mode"
                              : "tech-stack-label"
                          }
                        >
                          Tech Stack
                        </span>
                        <div className="tech-chips">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className={
                                isDark
                                  ? "tech-chip tech-chip-dark"
                                  : "tech-chip"
                              }
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, k) => {
                          return (
                            <span
                              key={k}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {bigProjects.projects.length > INITIAL_LIMIT && (
            <div className="more-projects-btn-div">
              <button
                className={
                  isDark
                    ? "more-projects-btn dark-mode-more-btn"
                    : "more-projects-btn"
                }
                onClick={() => setShowAll(!showAll)}
              >
                {showAll
                  ? "Show Less Projects"
                  : `More Projects (${
                      bigProjects.projects.length - INITIAL_LIMIT
                    } More)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
