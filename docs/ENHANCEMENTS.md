# Project Enhancements & Future Roadmap

This document outlines structural suggestions, architectural designs, and feature checklists planned for the next major version of the portfolio website.

---

## 1. Architectural Suggestions

To elevate the portfolio site to enterprise-grade quality, we suggest implementing the following improvements in the next revision:

### A. React & Environment Modernization
- **Upgrade to React 18+**: Replace the legacy React v16 foundation with React v18/19 to leverage modern hooks (`useTransition`, `useDeferredValue`) and improve rendering performance.
- **Vite Migration**: Replace `react-scripts` (Webpack 5 wrapper) with Vite to decrease build compilation times from ~30 seconds to less than 2 seconds.

### B. Observatory Alerts
- **Slack/Discord Alert Integrations**: Refactor the Node `fetch.js` pipeline to trigger webhook posts (e.g. to Discord or Slack channels) whenever a build fails or GitHub API rate quotas drop below 10%.
- **GitHub Actions Telemetry**: Output and upload the `logs/usage_telemetry.md` as an Actions artifact automatically after scheduled runs.

---

## 2. Next Version Implementation Roadmap

The following specific tasks are scheduled for implementation in Version 1.2.0:

### 1. Integration of "Eye 20/20/20 Reminder" Project
* **Scope**: Add a new project card for the "Eye 20/20/20 Reminder" utility (a health-focused PWA that alerts users every 20 minutes to look at an object 20 feet away for 20 seconds).
* **Proposed Layout**:
  ```javascript
  {
    projectName: "Eye 20/20/20 Reminder",
    projectDesc: "A PWA utility alerting developers to prevent eye strain by looking at an object 20 feet away for 20 seconds, every 20 minutes. Built with lightweight service workers and web audio notification APIs.",
    footerLink: []
  }
  ```

### 2. Cataloging Workspace Projects from E:\hdd-data\Projects
* **Scope**: Scan, select, and import descriptions for project directories located under the HDD storage partition (`e:\hdd-data\Projects\`).
* **Target Directories to Catalog**:
  - `Agentic-AI-Projects` (Autonomous agent workflows and implementations)
  - `Project-Converter` (Utility data conversion tool)
  - `Project-git-auto-push` (Git deployment automation daemon)
  - `Project-google-takeout-organizer` (Google backup parser and folder sorting script)
  - `collab-project` (Team collaborative development project)

### 3. Refine Portfolio UI Content
* **Scope**: Perform a content sweep of the website representation to ensure 100% personalization for Aditya Tiwari:
  - Redact or rewrite generic placeholders.
  - Streamline and consolidate details under the greeting, work experience, and educational bullet points.
  - Audit and modernize font variables inside `App.scss` to use curated Google Fonts (such as **Inter** or **Outfit**) instead of standard system fonts.

### 4. Track Versioning in a Unified File
* **Scope**: Maintain project releases, build tags, and semver tracking in a single centralized documentation file (`docs/VERSION.md`) to prevent version drift between `package.json` and other metadata components.

### 5. Next Session Immediate Action Items
* **Skills Section Overhaul**:
  - Update and replace all existing skills in `portfolio.js` purely based on technical skills extracted from all added workspace projects.
* **Education Section Logos**:
  - Update institution logos for original college/university and high school once user provides logo image assets.
* **Remove Duplicate Open Source Projects Section**:
  - Remove/disable the Open Source projects section to eliminate duplication with the main "Projects" section.
* **Achievements Section Alignment**:
  - Replace generic achievement entries with original personal achievements and recognitions.
* **Hide Blog & Talk Sections**:
  - Hide/disable "Blog" and "Talks" sections from both the topbar navigation header and the main page sections for now (retaining codebase compatibility for future use).
* **Profile & Contact Details Update**:
  - Update contact information, role details/descriptions, and personal profile image/photo.
* **Footer Customization & Template Credits**:
  - Remove default footer text:
    ```
    Made with ❤️ by DeveloperFolio Team
    Theme by developerFolio
    ```
  - Replace with proper credits acknowledging `developerFolio` as the portfolio template foundation, including details/links to original template work and samples.

