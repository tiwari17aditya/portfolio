import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

const getIconForSkill = (skill) => {
  const s = skill.toLowerCase();
  if (s.includes("neondb") || s.includes("neon")) return "fas fa-database";
  if (s.includes("supabase")) return "fas fa-bolt";
  if (s.includes("chromadb") || s.includes("vector")) return "fas fa-layer-group";
  if (s.includes("docker") || s.includes("kubernetes")) return "fab fa-docker";
  if (s.includes("python")) return "fab fa-python";
  if (s.includes("airflow") || s.includes("mlops")) return "fas fa-wind";
  if (s.includes("langgraph") || s.includes("langchain")) return "fas fa-project-diagram";
  if (s.includes("crewai") || s.includes("agentic")) return "fas fa-network-wired";
  if (s.includes("ollama") || s.includes("local llm")) return "fas fa-microchip";
  if (s.includes("gemini") || s.includes("groq") || s.includes("deepseek") || s.includes("llm")) return "fas fa-brain";
  if (s.includes("fastapi") || s.includes("backend")) return "fas fa-server";
  if (s.includes("next") || s.includes("react")) return "fab fa-react";
  if (s.includes("github") || s.includes("ci/cd")) return "fab fa-github";
  if (s.includes("streamlit") || s.includes("ui")) return "fas fa-desktop";
  if (s.includes("typescript") || s.includes("js")) return "fab fa-js";
  if (s.includes("scikit") || s.includes("ml")) return "fas fa-cogs";
  if (s.includes("ffmpeg") || s.includes("video")) return "fas fa-file-video";
  if (s.includes("artificial intelligence") || s === "ai") return "fas fa-brain";
  return "fas fa-laptop-code";
};

const cardVariants = [
  "card-glass",
  "card-gradient-border",
  "card-neumorphic",
  "card-glowing",
  "card-slide-up",
  "card-cyber",
  "card-pulse-gradient"
];

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    let globalCardIndex = 0;
    const hasCategorized =
      techStack.categorizedExperience &&
      techStack.categorizedExperience.length > 0;

    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Technical Skills</h1>

            {hasCategorized ? (
              techStack.categorizedExperience.map((catGroup, groupIdx) => (
                <div key={groupIdx} className="tech-category-group">
                  <h3 className="tech-category-heading">
                    {catGroup.categoryName}
                  </h3>
                  <div className="skills-grid">
                    {catGroup.skills.map((exp, i) => {
                      const variant =
                        cardVariants[globalCardIndex % cardVariants.length];
                      globalCardIndex++;
                      const iconClass = getIconForSkill(exp.Stack);
                      return (
                        <div key={i} className={`skill-card ${variant}`}>
                          <div className="skill-card-inner">
                            <div className="skill-card-icon-div">
                              <i className={`${iconClass} skill-card-icon`}></i>
                            </div>
                            <span className="skill-card-title">{exp.Stack}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="skills-grid">
                {techStack.experience.map((exp, i) => {
                  const variant = cardVariants[i % cardVariants.length];
                  const iconClass = getIconForSkill(exp.Stack);
                  return (
                    <div key={i} className={`skill-card ${variant}`}>
                      <div className="skill-card-inner">
                        <div className="skill-card-icon-div">
                          <i className={`${iconClass} skill-card-icon`}></i>
                        </div>
                        <span className="skill-card-title">{exp.Stack}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={require("../../assets/images/skill.svg")} />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
