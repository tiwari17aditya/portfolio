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

- **Profile Content**: Edit [portfolio.js](file:///e:/hdd-data/Projects/portfolio-website/portfolio.js) at the root of the workspace to customize names, greetings, schools, experiences, achievements, and layout sections.
- **Environment Variables**: Configure credentials, API toggles, and token overrides inside `developerFolio/.env`.

---

## 3. Observability & Logging

Whenever the project builds or runs its fetch script, metrics are written to the workspace root:
- **Daily Logs**: Located in `logs/log_D_Month_YYYY.log` tracking task events.
- **Build Telemetry**: Performance and hit count tables stored in `logs/usage_telemetry.md`.
- **API Quotas**: GitHub GraphQL rate limit indicators captured in `logs/quota_tracking.md`.

---

## 4. Deployment

This project contains zero-config automation setup:
- **Vercel**: Deploy the root folder directly. The [vercel.json](file:///e:/hdd-data/Projects/portfolio-website/vercel.json) at the root coordinates sub-directory execution automatically.
- **GitHub Pages**: Configure `homepage` in `package.json` and run `npm run deploy` to publish static files to your repository branch.
