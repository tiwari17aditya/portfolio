# Developer Portfolio - System Manual

A professional, single-page interactive developer portfolio. Optimized for rapid local development and automated cloud deployments via Vercel or GitHub Pages.

---

## 1. Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Install dependencies from the workspace root or inside `developerFolio/`:
   ```bash
   cd developerFolio
   npm install --legacy-peer-deps
   ```

### Running Locally
1. Start the React development and build fetch server:
   ```bash
   npm start
   ```
   The site will load automatically at **http://localhost:3000** with hot reloading enabled.

---

## 2. Configuration System

- **Profile Content**: Edit [portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/developerFolio/src/portfolio.js) to customize names, greetings, schools, experiences, achievements, and layout sections.
- **Excluded & Ongoing Projects**: Documented in [ongoing-or-not-verified-projects.md](file:///e:/hdd-data/Projects/portfolio-website/docs/ongoing-or-not-verified-projects.md) for R&D, experimental, and unverified projects excluded from the UI.
- **Environment Variables**: Configure credentials, API toggles, and token overrides inside `developerFolio/.env`.

---

## 3. Observability & Logging

All logs and telemetry are organized under the root [`logs/`](file:///e:/hdd-data/Projects/portfolio-website/logs) directory:
- **Execution Logs**: Located in `logs/execution_logs/` tracking task events and runtime scripts.
- **Session Summaries**: Stored in `logs/session_summaries/` for work session accomplishments.
- **Token Telemetry**: Usage tables and token counts captured in `logs/token_tracking/session_token_telemetry.md` and `usage_telemetry.md`.

---

## 4. Deployment

This project contains zero-config automation setup:
- **Vercel**: Deploy the root folder directly. The [vercel.json](file:///e:/hdd-data/Projects/portfolio-website/vercel.json) at the root coordinates sub-directory execution automatically.
- **GitHub Pages**: Configure `homepage` in `package.json` and run `npm run deploy` to publish static files to your repository branch.
