# Session Summary Log — 2026-08-12

## Session Overview
- **Date**: 2026-08-12
- **Session Focus**: Resume Updates, Personalization, Custom Logo Assets Integration, Section Pruning, Console Error Fixes, and Vercel Asset Path Fix

---

## Key Achievements & Modifications

1. **Resume Replacement**:
   - Replaced default sample resume at [resume.pdf](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/greeting/resume.pdf) with the actual resume `Resume_Adityatiwari.pdf` from the workspace root.

2. **Personalized Portfolio Configuration ([portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/portfolio.js))**:
   - **Profile Description**: Aligned the greeting subtitle with actual ML & Platform Engineering experience summary.
   - **Education details**: Updated BTech duration and result with **8.35 CGPA**.
   - **Jio Platforms Experience**: Updated role to **Data Scientist** with 7 detailed resume bullets.
   - **Skills List**: Expanded with FastAPI, SQL, GitLab, Streamlit, Grafana, Prometheus, LangGraph, Pandas, NumPy.
   - **Certifications**: Added 4 specialization certificates with verify links and local PDF views.
   - **Pruning Placeholders**: Disabled Blogs, Talks, Podcasts, Open Source duplicate, and Twitter sections.

3. **Logo & Asset Integration**:
   - Copied new user-provided [college-logo.png](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/assets/images/college-logo.png) and [school-logo.png](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/assets/images/school-logo.png).
   - Copied PDF certificate files into `assets/certs/` and generated logo PNGs for IBM, EDUCBA, DeepLearning.AI, Michigan.
   - Cleaned up root directory by deleting raw certificate files.

4. **Profile Photo Integration**:
   - Copied `photo.jpg` to `developerFolio/src/assets/images/` and wired it into [Greeting.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/greeting/Greeting.js).
   - Styled with soft-rounded square frame (`border-radius: 24px`, `height: auto`) in [Greeting.scss](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/greeting/Greeting.scss).

5. **Certifications Pruning (v1.5.5)**:
   - Removed 3 individual University of Michigan course certs and the unlinked GenAI LLM card.
   - Deleted associated PDF files from `assets/certs/`.
   - Retained 4 primary specializations: Machine Learning, GenAI Fundamentals, Linux Bash, Python for Everybody.

6. **Vercel Console Error Fixes (v1.5.6)**:
   - Reverted `serviceWorker.register()` → `serviceWorker.unregister()` in [index.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/index.js) — no `service-worker.js` served at Vercel root.
   - Set `displayMediumBlogs: "false"` in [portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/portfolio.js) — no Medium feed, `/blogs.json` was 404ing.
   - Added null-guard in [Blogs.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/containers/blogs/Blogs.js) to prevent `TypeError: Cannot read properties of undefined (reading 'items')`.
   - Fixed Montserrat font format string from `"woff"` → `"truetype"` in [index.css](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/index.css).

7. **Vercel Asset Path Fix — Photo & Fonts (v1.5.7)**:
   - **Root Cause Identified**: `homepage: "https://tiwari17aditya.github.io/portfolio"` in [package.json](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/package.json) caused CRA to bake `/portfolio/` into ALL asset paths at build time. Vercel serves from `/` so photo, fonts, JS chunks all 404d silently.
   - **Fix**: Changed `homepage` to `/` in `package.json` and simplified [vercel.json](file:///e:/hdd-data/Projects/portfolio-website/vercel.json) build command.
   - Build now reports: *"The project was built assuming it is hosted at `/`"* — all asset paths are root-relative.

8. **Proficiency Section Cards Redesign**:
   - Replaced progress bar gauges with a grid of 7 interactive styled cards (Glassmorphism, Gradient Border, Neumorphism, Glowing Shadow, Slide-Up Fill, Cyberpunk Grid, and Pulse Glow).
   - Renamed section from "Proficiency" to "Technical Skills".

9. **Release & Documentation Updates**:
   - Versions incremented through v1.5.0 → v1.5.7 in [VERSION.md](file:///e:/hdd-data/Projects/portfolio-website/docs/VERSION.md).
   - Full changelog in [CHANGELOG.md](file:///e:/hdd-data/Projects/portfolio-website/docs/CHANGELOG.md).
   - Link catalog in [URL_TRACKER.md](file:///e:/hdd-data/Projects/portfolio-website/docs/URL_TRACKER.md).

10. **Build Verification**:
    - All compilations succeeded cleanly with `npm run build`.
    - Git working tree is clean after all pushes.
