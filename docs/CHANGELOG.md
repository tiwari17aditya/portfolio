# Changelog

All notable changes to the portfolio website project are documented here using semantic versioning format.

## [1.5.1] - 2026-08-12

### Added
- **Coursera Verification & View links**: Added verify links and local PDF file views for Machine Learning, Generative AI Fundamentals, and Linux Bash Scripting specializations.
- **IBM & EDUCBA Logos**: Generated and integrated customized logo icons for IBM and EDUCBA certifications.
- **Root cleanup**: Deleted temporary PDF certificates from the workspace root directory.

---

## [1.5.0] - 2026-08-12

### Added
- **Resume and Credentials Integration**: Replaced default template resume with candidate's actual resume (`Resume_Adityatiwari.pdf`).
- **Education Logos**: Overwrote template logos with custom school and college logo png files.
- **Customized Certifications**: Replaced template achievements with Stanford and University of Michigan specializations, including generated custom logo graphics.
- **Enhanced Profile & Skills**: Updated the greeting subTitle, skills lists, education results (with **8.35 CGPA**), and Jio Platforms experience details.

### Changed
- **Footer Copyright & Credits**: Customized copyright details to the candidate and added clean template foundation credits.
- **Hiding Placeholder Sections**: Turned off Blog, Talks, Podcasts, Open Source repository list, and Twitter timelines in config.

---

## [1.4.0] - 2026-08-08

### Added
- **AI-Generated Default Project Logos**: Generated tailored visual graphics depicting the structure, architecture, and purpose for all 12 projects lacking explicit custom images, replacing generic SVG placeholders across the portfolio.

---

## [1.3.3] - 2026-08-08

### Changed
- **Projects Layout Optimization**: Preserved the original clean portfolio project structure by displaying top 5 featured cards initially, with an interactive "More Projects (12 More)" toggle button to reveal all 17 projects with identical card formatting.

---

## [1.3.2] - 2026-08-08

### Fixed
- **Header Navigation**: Added missing `Projects` link (`#projects`) in `Header.js` navbar.
- **Projects Section Visibility**: Enabled `openSource.display = true` and generated fallback `public/profile.json` in `fetch.js` so all 17 projects render seamlessly without missing data crashes.

---

## [1.3.1] - 2026-08-08

### Added
- **Token Optimization Skill**: Added `.agents/skills/token-optimization/SKILL.md` detailing context windowing, payload pruning, prompt caching, and token telemetry tracking.

### Refactored
- **Cleaned Duplicate Directories**: Consolidated all skills and router tables under standard `.agents/` directory and eliminated duplicate `.agent/` folder.

---

## [1.3.0] - 2026-08-08

### Added
- **17 Production Projects**: Scanned `C:\Users\Admin\Desktop\Projects` recursively (following shortcuts to `D:\Antigravity-Projects`, `D:\youtube-projects`, `E:\hdd-data\Projects`, and `E:\hdd-data\pulse-vector`) and updated `developerFolio/src/portfolio.js` with 17 projects, complete with tech stack badges, rich descriptions, and GitHub links.
- **Automated `/update-portfolio` Trigger**: Created `.agent/skills/update-portfolio/SKILL.md` and script `update_portfolio.py` to automate future portfolio updates on command.
- **Session Token & Version Tracking**: Created `docs/VERSION.md`, session-based token telemetry in `logs/session_token_telemetry.md`, and session summary logs under `logs/`.

### Changed
- **Packup Workflow**: Enhanced packup command to update logs, sync docs under `docs/`, track version and tokens, generate session summaries, and execute Git add, commit, and push automatically.

---

## [1.2.0] - 2026-07-31

### Added
- **Project URLs**: Added clickable footer links to four projects — Mahabharat (YouTube), Stocks Insights Agent (GitHub), Daily CA Insights (GitHub), and Pulse Vector (4 YouTube playlists).
- **Tech Stack Chips**: Each project card now displays styled pill badges for its tech stack below the description. Hover animations and dark-mode variants included.
- **Jio Platforms Experience**: Replaced the placeholder Facebook/Quora/Airbnb experience entries with a complete, professional Jio Platforms AI/ML Engineer entry — includes role, date, description, and 5 bullet points covering RAG, MLOps, FastAPI, GenAI, and LLM optimization.
- **Jio Logo Asset**: Generated and committed `jioLogo.png` to `src/assets/images/`.

### Changed
- **Removed "pipeline" word** from all project titles and descriptions (Mahabharat, Pulse Vector, Daily CA Insights, section subtitle).
- **Renamed** `bigProjects.title` from "Projects under Review" to "Projects".
- **URL_TRACKER.md** updated to track all 8 new project/playlist URLs.

### Refactored
- **StartupProject.js**: Added `techStack` rendering JSX block between description and footer links.
- **StartupProjects.scss**: Added `.tech-chip`, `.tech-chip-dark`, `.tech-chips`, `.project-tech-stack`, `.tech-stack-label` styles.

---

## [1.1.0] - 2026-07-31

### Added
- **Unified config wrapper**: Created `src/config.js` to combine environmental settings from `.env` and content configurations in `portfolio.js`.
- **Daily Build Logging**: Introduced Node.js logging utility `scripts/logger.js` that automatically generates daily run logs (e.g. `log_31_July_2026.log`) under the `logs/` directory.
- **Build Telemetry tracking**: Created `logs/usage_telemetry.md` to append pipeline execution durations, network hit counts, and status rates.
- **API Quota observation**: Added rate limit tracking to `logs/quota_tracking.md` which extracts and logs GitHub API GraphQL remaining allowances.
- **Structural docs**: Created `docs/TECH_STACK.md` and `docs/CHANGELOG.md` inside a dedicated `docs/` folder to improve governance.

### Refactored
- **Fetch pipeline**: Refactored `fetch.js` to utilize Promise wrappers, track HTTP response headers, and gracefully log rate limits.

---

## [1.0.0] - 2026-07-31

### Added
- **Initial Setup**: Configured the developer portfolio template with custom personal profile data.
- **Image Assets**: Resolved missing institutional logo imports with local placeholders.
- **Local Dev environment**: Enabled local hot reload serving on port 3000.
- **Vercel deployment setup**: Created root `vercel.json` overriding Vercel build parameters for frictionless deploy.
- **Git Version tracking**: Initialized git repo and committed files.
