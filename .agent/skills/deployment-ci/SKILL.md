---
name: deployment-ci
description: Procedures for managing package dependencies, react-scripts build process, Vercel deployments, and GitHub Pages publishing.
---

# Deployment & CI Skill

## Directives & Standards
- Verify project build integrity with `npm run build` inside `developerFolio/` before triggering production deployment.
- Maintain deployment configuration in `vercel.json` and ensure route rewrites function properly.
- Keep `package.json` scripts (`predeploy`, `build`, `deploy`) synchronized.

## Constraints
- Never ignore explicit build timeouts, compilation warnings, or exit code failures.
- Do not modify production build flags without running build validation.

## Verification Checklist
- [ ] `npm run build` completes with exit code 0.
- [ ] Build outputs in `developerFolio/build/` contain valid static bundles.
- [ ] `vercel.json` routing configurations match current path structures.
