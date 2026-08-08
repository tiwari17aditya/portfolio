# Antigravity Router Table

Use this routing table to trigger domain-specific skills located in `.agent/skills/`.

## File Pattern & Task Router

| File Pattern / Task Keyword | Skill Name | Skill Path |
|---|---|---|
| `src/components/**`, `src/containers/**`, `*.scss`, `*.css` | UI Components | [.agent/skills/ui-components/SKILL.md](file:///.agent/skills/ui-components/SKILL.md) |
| `fetch.js`, `portfolio.js`, API calls, data schemas | API & Data | [.agent/skills/api-data/SKILL.md](file:///.agent/skills/api-data/SKILL.md) |
| `vercel.json`, `package.json`, build scripts, deployment | Deployment & CI | [.agent/skills/deployment-ci/SKILL.md](file:///.agent/skills/deployment-ci/SKILL.md) |
| `logs/**`, execution logs, compile/build errors, telemetry | Logging & Telemetry | [.agent/skills/logging-telemetry/SKILL.md](file:///.agent/skills/logging-telemetry/SKILL.md) |
| `docs/**`, `URL_TRACKER.md`, "packup", Git workflow | Documentation & Packup | [.agent/skills/documentation-packup/SKILL.md](file:///.agent/skills/documentation-packup/SKILL.md) |
| `/update-portfolio`, update portfolio, scan projects | Portfolio Updater | [.agent/skills/update-portfolio/SKILL.md](file:///.agent/skills/update-portfolio/SKILL.md) |

