# Version Tracking

Current Project Version: **v1.8.0**  
Release Date: **2026-08-23**  
Repository: [portfolio](https://github.com/tiwari17aditya/portfolio)

---

## Release History

### v1.8.0 (2026-08-23)
- **Deep-Scan Technical Skills Expansion (79 Projects)**: Deep-scanned 79 project repositories across all drive roots (`C:`, `D:`, `E:`) to extract primary, secondary, and optional open-source tools, vector databases, and AI frameworks.
- **Added 37 Software Skill Icons**: Updated `skillsSection.softwareSkills` in `portfolio.js` with NeonDB PostgreSQL, Supabase, ChromaDB, Neo4j, LangGraph, LangChain, CrewAI, Ollama, DeepSeek LLM, Gemini API, Groq API, OpenAI API, FastAPI, Streamlit, Next.js, React, Tailwind CSS, Vite, Remotion, Docker, Kubernetes, Apache Airflow, GitHub Actions, Vercel, PyTorch, TensorFlow, Scikit-Learn, Pandas, NumPy, Plotly, FFmpeg, Prometheus, Grafana, and Bash.
- **Added 18 Tech Stack Skill Cards**: Updated `techStack.experience` in `portfolio.js` with 18 clean domain cards covering all project domains and **removed percentage progress indicators as requested**.
- **Dynamic Icon Resolver**: Extended `getIconForSkill` in `skillProgress.js` to map FontAwesome icons for all newly added open-source technologies.
- **Production Build Validation**: Verified zero-error React production bundle compilation (`npm run build`).

### v1.7.0 (2026-08-19)
- **Projects Showcase Expansion to 16 Production Systems**: Scanned all project roots dynamically (`C:\Users\Admin\Desktop\Projects`, `D:\youtube-projects`, `E:\hdd-data\Projects`, `E:\hdd-data\pulse-vector`, etc.) and promoted 5 high-impact systems into `portfolio.js` `bigProjects`.
- **Integrated Agentic AI & Automation Projects**: Added Local Stock Insights Autopilot Agent (CrewAI + Ollama + faster-whisper), Agentic AI Travel Planner (LangGraph + Gemini Flash), Intelligent Financial Hub AI (LangChain + Plotly), Weather Intelligence Agent (LangGraph + Tavily), and Git Auto-Push Automation.
- **Live Deployment Link Refinements**: Updated live deployment links for VitalsGuard (`https://vitalsguard.vercel.app/`) and Vibrant Music Academy (`https://vibrantmusicacademy.vercel.app/`).
- **Production Build Validation**: Verified zero-error compilation with React Scripts and static assets.
- **Documentation & Telemetry Synchronization**: Synchronized `URL_TRACKER.md`, `ongoing-or-not-verified-projects.md`, `CHANGELOG.md`, and session token telemetry.

### v1.6.1 (2026-08-17)
- **Profile Photo Stream & Encoding Restoration**: Replaced corrupted JPEG asset with uncorrupted original `IMG_2602.jpg` (800 × 881 px, 205 KB clean sRGB JPEG).
- **Webpack 5 Asset Import Standardization**: Added top-level ES module imports & `.default` string URL fallbacks across all UI cards (`Greeting.js`, `EducationCard.js`, `ExperienceCard.js`, `AchievementCard.js`, `StartupProject.js`).
- **Font 404 Preload Cleanup**: Removed hardcoded font preload links from `index.html`.
- **Vercel CI Build Resolution**: Removed unused `Fade` import from `Greeting.js` to ensure clean zero-warning builds under `CI=true`.

### v1.6.0 (2026-08-16)
- **Portfolio Projects Audit & Streamlining**: Audited workspace project directories and updated `portfolio.js` UI to display 11 verified production projects (including TaskPulse Enterprise and Utility Projects Suite).
- **Ongoing & Unverified Projects Catalog**: Created `docs/ongoing-or-not-verified-projects.md` to track 12 experimental, R&D, or unverified projects excluded from the UI.
- **Telemetry & Logs Directory Restructuring**: Reorganized `logs/` into dedicated subdirectories (`execution_logs/`, `session_summaries/`, `token_tracking/`) and updated skill guidelines.
- **Vercel Asset Path Fix**: Changed `homepage` in `package.json` from the GitHub Pages URL to `/` so CRA builds root-relative asset paths. This fixes the profile photo, fonts, and all JS/CSS chunks being 404 on Vercel.
- **Simplified `vercel.json`**: Removed redundant `PUBLIC_URL` override from build command.

### v1.5.6 (2026-08-12)
- **Service Worker Fix**: Reverted `serviceWorker.register()` to `unregister()` — no service-worker.js served on Vercel root scope, causing a 404 on every page load.
- **Blogs.json Fix**: Set `displayMediumBlogs: false` to prevent 404 fetch to `/blogs.json` (no Medium feed configured). Added null-guard in `Blogs.js` to prevent TypeError crash on undefined response.
- **Font Format Fix**: Corrected Montserrat `@font-face` format from `"woff"` to `"truetype"` for the `.ttf` file.

### v1.5.5 (2026-08-12)
- **Certifications Pruning**: Kept only the 4 primary specialization certificates (ML, GenAI Fundamentals, Linux Bash, and Python for Everybody Specialization). Removed individual course certificates.
- **Greeting Photo Aspect Ratio**: Altered profile image styles to use a soft-rounded square border (`border-radius: 24px` and dynamic height) to show the full upper body without cropping.

### v1.5.4 (2026-08-12)
- **Profile Photo Integration**: Replaced vector illustrations in the greeting section with a personal profile photo card avatar.
- **Skills Renaming**: Renamed the "Proficiency" section header to "Technical Skills".
- **Three Python Course Certificates**: Added certificates for Using Python to Access Web Data, Python Data Structures, and Programming for Everybody, including verify links and local PDF views.
- **Certificate Provider Annotations**: Appended `| Provider: Coursera` to all Coursera-issued certifications.

### v1.5.3 (2026-08-12)
- **Proficiency Card Showcase Grid**: Replaced progress bars with interactive card layout, demonstrating 7 styles (Glassmorphism, Gradient Border, Neumorphism, Glow, Slide-Up, Cyberpunk Grid, and Pulse Glow).
- **Service Worker PWA Registration**: Registered the service worker in React index, enabling offline precaching and PWA installation for mobile browsers.

### v1.5.2 (2026-08-12)
- **Interactive Proficiency Section**: Redesigned the skill progress meters with rounded gradient bars, load slide-in animations, glassmorphism background tracks, and responsive hover-glow translation transitions.

### v1.5.1 (2026-08-12)
- **Coursera Certificates & Links**: Added verification links and local PDF files for Machine Learning, Generative AI Fundamentals, and Linux Bash Scripting specializations.
- **New Logo Assets**: Generated and integrated custom logo images for IBM and EDUCBA.
- **Root Cleanup**: Removed temporary PDF certificate files from the workspace root directory.

### v1.5.0 (2026-08-12)
- **Resume Replacements**: Replaced the default template resume PDF with the actual personal resume (`Resume_Adityatiwari.pdf`).
- **Education Logos Update**: Overwrote the placeholder institutional logos with custom school and college logos.
- **Section Customization**: Personalized work experience, education results, profile summaries, and technical skills.
- **Achievements and Certifications**: Replaced sample achievements with Stanford and University of Michigan specializations, including generated custom logo graphics.
- **Placeholder Hiding**: Toggle display off for Blogs, Talks, Podcasts, Open Source duplication, and Twitter widgets.
