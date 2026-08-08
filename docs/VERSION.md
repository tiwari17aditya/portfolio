# Version Tracking

Current Project Version: **v1.3.2**  
Release Date: **2026-08-08**  
Repository: [portfolio](https://github.com/tiwari17aditya/portfolio)

---

## Release History

### v1.3.2 (2026-08-08)
- **Header Navigation Fix**: Added `Projects` nav link (`#projects`) in `Header.js` to ensure the project section is accessible from the top navbar.
- **Open Source Section & Fallback**: Enabled `openSource.display = true` and updated `fetch.js` to auto-generate fallback `public/profile.json` so both `Projects` and `StartupProject` components render all 17 projects reliably.

### v1.3.1 (2026-08-08)
- Consolidated all custom skills, scripts, and router tables under standard `.agents/` workspace directory.
- Created `.agents/skills/token-optimization/SKILL.md` for LLM payload and context window budgeting.

### v1.3.0 (2026-08-08)
- Scanned `C:\Users\Admin\Desktop\Projects` recursively and updated `portfolio.js` with 17 production projects.
