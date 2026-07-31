# Technical Tech Stack Matrix

This document outlines the core technical dependencies, tooling, styling libraries, and automation utilities used in the portfolio repository.

---

## 1. Core Architecture

| Technology | Role | Purpose / Benefit |
|---|---|---|
| **React (v16.10.2)** | UI Framework | Component-driven UI development for responsive presentation |
| **react-scripts (v5.0.1)** | Build System | Under-the-hood Webpack 5 bundling, dev serving, and hot reloading |
| **Node.js (v24.18.0)** | Runtime | Script execution for telemetry logging and data fetching |

---

## 2. Styling & Presentation

| Technology / Library | Purpose | Implementation details |
|---|---|---|
| **Sass (v1.32.8)** | Styling | Used for layout themes, colors, and modular responsive stylesheets |
| **Google Fonts** | Typography | Custom Inter, Outfit, or Montserrat fonts imported directly in stylesheet |
| **Lottie React (v2.4.0)** | Animations | Interactive vector-based JSON animations for loading/hero sections |
| **React Reveal (v1.2.2)** | Animations | Scroll-triggered layout entrance animation effects (Fade/Slide) |

---

## 3. Observability & Logging Engine

| Technology / Component | Role | Details / Path |
|---|---|---|
| **logger.js** | Custom Logger | Creates daily logs under `logs/log_D_Month_YYYY.log` with levels (INFO/WARN/ERROR) |
| **fetch.js** | Build Pipeline | Orchestrates GraphQL profile fetching and API quota resolution at build time |
| **usage_telemetry.md** | Telemetry Store | Logs build execution times, API hit rates, and request statuses in Markdown tables |
| **quota_tracking.md** | Quota Guard | Tracks remaining API rates for GitHub GraphQL requests to avoid limits |

---

## 4. Configuration & Deployment

| File / Service | Role | Details |
|---|---|---|
| **portfolio.js** | Content Source | Unified static configuration file for all layout settings and text fields |
| **config.js** | Config Wrapper | Resolves process.env overrides alongside portfolio config at compilation |
| **.env** | Secret Management | Local gitignored file for API variables |
| **Vercel** | Cloud Deployment | Root `vercel.json` coordinates build scripts and outputs dynamically on push |
