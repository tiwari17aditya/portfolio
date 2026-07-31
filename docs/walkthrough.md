# Walkthrough & Deployment Guide

This document summarizes the changes made to run your developer portfolio locally, restructure the project to professional standards, implement daily logging, and push updates to Vercel/GitHub.

---

## 1. Project Structure & Restructuring Summary

We restructured the workspace root to follow professional architectural patterns:

```
portfolio-website/
├── .agents/                        # Agent configuration rules
│   └── AGENTS.md                   # Custom behavior instruction rules
├── docs/                           # Centralized documentation
│   ├── README.md                   # Setup manual & pointers
│   ├── TECH_STACK.md               # Technology matrix
│   ├── CHANGELOG.md                # Release versioning
│   ├── URL_TRACKER.md              # Catalog of all configuration URLs
│   └── ENHANCEMENTS.md             # Enhancement suggestions and roadmap
├── logs/                           # Automated build-time logging and metrics
│   ├── log_31_July_2026.log        # Daily build log
│   ├── usage_telemetry.md          # Execution tracking table
│   └── quota_tracking.md           # API Quota metrics
├── developerFolio/                 # React frontend project
│   ├── scripts/
│   │   └── logger.js               # CommonJS node logging engine
│   ├── src/
│   │   ├── config.js               # Centralized config loader wrapper
│   │   └── portfolio.js            # Unified profile content source
│   ├── fetch.js                    # Promise-wrapped fetching script
│   └── .env                        # Local gitignored environment file
├── vercel.json                     # Automated Vercel build configuration
└── README.md                       # Workspace root index pointer
```

### Key Architectural Enhancements:
1. **Centralized Configuration wrapper**: Created [src/config.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/config.js) to resolve environment parameters alongside [portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/portfolio.js).
2. **Modular Logging Engine**: Implemented [scripts/logger.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/scripts/logger.js) to handle folder checks, log date formatting, severity tags, and append metrics.
3. **Refactored Pipelines**: Modified [fetch.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/fetch.js) to run using asynchronous Promises, catch network faults, and inspect API response headers for rate limit tracking.
4. **Build Telemetry**: Logs each build status, execution times, and network hit rates into [logs/usage_telemetry.md](file:///e:/hdd-data/Projects/portfolio-website/logs/usage_telemetry.md).
5. **Quota Tracking**: Automatically logs API rate limit states into `logs/quota_tracking.md`.

---

## 2. Local Verification Results

### Build Execution Logs
- `node fetch.js` executed locally, successfully initializing the folders and logs.
- `npm run build` compiled successfully under 35 seconds without warnings.

### Telemetry Output Example
From [logs/usage_telemetry.md](file:///e:/hdd-data/Projects/portfolio-website/logs/usage_telemetry.md):
| Timestamp | Action | Status | GitHub Username | Medium Username | GitHub API Hits | Medium API Hits | Execution Time (ms) |
|---|---|---|---|---|---|---|---|
| 2026-07-31 08:00:01 | Fetch Profile & Blogs | SUCCESS | tiwari17aditya | N/A | 0 | 0 | 6 |

---

## 3. Vercel Cloud Deployment

Since you manually created the `portfolio` project on Vercel and linked the GitHub repository:
- **Zero Configuration**: The newly pushed [vercel.json](file:///e:/hdd-data/Projects/portfolio-website/vercel.json) automatically directs Vercel to install packages using `--legacy-peer-deps`, override the public path URL prefix to `/` (fixing the 404 assets issue), build, and serve the site from the `developerFolio/build` output.
- **Auto Deploy**: Your latest commit (**"Restructure project, add logs..."**) has been pushed to GitHub and Vercel has automatically queued and started compiling it.

---

## 4. v1.2.0 — Content & UI Updates (2026-07-31)

### Changes Applied

#### Project URLs & Links
All four previously link-less projects now have clickable footer buttons:

| Project | Link |
|---|---|
| Mahabharat | Watch on YouTube |
| Stocks Insights Agent | View on GitHub |
| Pulse Vector | 4 × YouTube Playlist links |
| Daily Current Affairs Insights | View on GitHub |

#### Tech Stack Chips
- Added `project.techStack` field to all 5 projects in [portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/portfolio.js)
- Updated [StartupProject.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/StartupProjects/StartupProject.js) to render chips conditionally
- Added chip styles to [StartupProjects.scss](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/StartupProjects/StartupProjects.scss) with purple gradient theme + dark mode + hover lift animation

#### "Pipeline" Removal
- Titles: "Mahabharat (Automated Video Pipeline)" → "Mahabharat (Automated Video)", "Pulse Vector Pipeline" → "Pulse Vector"
- Descriptions & section subtitle cleansed of the word "pipeline"

#### Work Experience — Jio Platforms
- Replaced placeholder entries (Facebook, Quora, Airbnb) with a single real entry
- **Company**: Jio Platforms | **Role**: AI / ML Engineer | **Period**: Aug 2022 – Present
- 5 professional bullet points: RAG systems, MLOps infra, FastAPI inference APIs, GenAI collaboration, LLM optimization
- Generated Jio logo asset (`jioLogo.png`) saved to `developerFolio/src/assets/images/`

### Compile & Verification
- React build: `Compiled successfully!` (no warnings/errors)
- Dev server: `http://localhost:3000/portfolio`
- All sections verified live in browser DOM
