import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

const getIconForSkill = (skill) => {
  const s = skill.toLowerCase();
  if (s.includes("docker")) return "fab fa-docker";
  if (s.includes("python")) return "fab fa-python";
  if (s.includes("kubernetes")) return "fas fa-dharmachakra";
  if (s.includes("airflow")) return "fas fa-wind";
  if (s.includes("mlops")) return "fas fa-sync-alt";
  if (s.includes("artificial intelligence") || s === "ai") return "fas fa-brain";
  if (s.includes("agentic")) return "fas fa-project-diagram";
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
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Technical Skills</h1>
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
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
