import React, { useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories present in softwareSkills
  const categories = [
    "All",
    ...Array.from(
      new Set(
        skillsSection.softwareSkills
          .map((s) => s.category)
          .filter(Boolean)
      )
    )
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsSection.softwareSkills
      : skillsSection.softwareSkills.filter(
          (s) => s.category === selectedCategory
        );

  // Group skills by category
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    const cat = skill.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className="software-skills-container">
      {/* Category Filter Pills */}
      <div className="category-tabs">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`category-tab-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categorized Skills Render */}
      <div className="software-skills-main-div">
        {Object.keys(groupedSkills).map((catName, idx) => (
          <div key={idx} className="skill-category-block">
            {selectedCategory === "All" && (
              <div className="category-group-header">
                <span className="category-group-badge">{catName}</span>
              </div>
            )}
            <ul className="dev-icons">
              {groupedSkills[catName].map((skills, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

