# Custom Agent Rules for Portfolio Website Workspace

These rules govern the behavior of the AI assistant (Antigravity) within this workspace.

---

## 1. Daily & Run Logging
- After every run or pipeline execution, log updates, Vercel build states, UI logs, errors, and React compile messages into the `logs/` directory.

## 2. Packup Workflow (When "packup" is requested)
- **Git Actions**: Stage, commit, and push all modifications to the remote repository.
- **Documentation Sync**: Update all documentation files (such as `README.md`, `walkthrough.md`, `CHANGELOG.md`, `TECH_STACK.md`) to remain in sync with the current codebase state.
- **Token Telemetry**: Output the exact count of tokens used (both input and output) for the session at the end of the response.

## 3. Centralized URL Tracker
- Maintain a single, updated file `docs/URL_TRACKER.md` tracking all URLs and endpoints used across all projects in the portfolio configuration. This includes present and future links so the user can audit them regularly.
