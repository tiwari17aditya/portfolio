# Antigravity Router Table

Use this routing table to trigger domain-specific skills located in `.agents/skills/`.

## File Pattern & Task Router

| File Pattern / Task Keyword | Skill Name | Skill Path |
|---|---|---|
| `src/components/**`, `src/containers/**`, `*.scss`, `*.css` | UI Components | [.agents/skills/ui-components/SKILL.md](file:///.agents/skills/ui-components/SKILL.md) |
| `fetch.js`, `portfolio.js`, API calls, data schemas | API & Data | [.agents/skills/api-data/SKILL.md](file:///.agents/skills/api-data/SKILL.md) |
| `vercel.json`, `package.json`, build scripts, deployment | Deployment & CI | [.agents/skills/deployment-ci/SKILL.md](file:///.agents/skills/deployment-ci/SKILL.md) |
| `logs/**`, execution logs, compile/build errors, telemetry | Logging & Telemetry | [.agents/skills/logging-telemetry/SKILL.md](file:///.agents/skills/logging-telemetry/SKILL.md) |
| `docs/**`, `URL_TRACKER.md`, "packup", Git workflow | Documentation & Packup | [.agents/skills/documentation-packup/SKILL.md](file:///.agents/skills/documentation-packup/SKILL.md) |
| `/update-portfolio`, update portfolio, scan projects | Portfolio Updater | [.agents/skills/update-portfolio/SKILL.md](file:///.agents/skills/update-portfolio/SKILL.md) |
| token usage, token optimization, token tracking, model tokens | Token Optimization | [.agents/skills/token-optimization/SKILL.md](file:///.agents/skills/token-optimization/SKILL.md) |
