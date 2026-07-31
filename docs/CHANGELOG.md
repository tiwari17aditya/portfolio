# Changelog

All notable changes to the portfolio website project are documented here using semantic versioning format.

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
