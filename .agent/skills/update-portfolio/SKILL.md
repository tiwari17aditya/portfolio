---
name: update-portfolio
description: Triggered by /update-portfolio or user requests to scan C:\Users\Admin\Desktop\Projects recursively and update portfolio projects in portfolio.js.
---

# Update Portfolio Skill

## Trigger
- Command: `/update-portfolio`
- Keywords: `update portfolio`, `sync portfolio projects`, `scan projects directory`

## Workflow & Execution
1. Execute the recursive project scanner script at `.agent/skills/update-portfolio/scripts/update_portfolio.py`:
   ```bash
   python .agent/skills/update-portfolio/scripts/update_portfolio.py
   ```
2. The script scans `C:\Users\Admin\Desktop\Projects` recursively (following all `.lnk` shortcuts to target directories like `D:\Antigravity-Projects`, `D:\youtube-projects`, `E:\hdd-data\Projects`, and `E:\hdd-data\pulse-vector`).
3. Extracted metadata (Title, Description, Tech Stack, Git Remotes, Live URLs) is verified against existing projects in `developerFolio/src/portfolio.js`.
4. Update `developerFolio/src/portfolio.js` with new or modified projects under `bigProjects`.
5. Ensure `portfolio.js` maintains clean Javascript syntax and zero breaking edits.
