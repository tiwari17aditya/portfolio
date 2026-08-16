---
name: logging-telemetry
description: Execution logging, error recording, compile message outputs, and session token telemetry reporting.
---

# Logging & Telemetry Skill

## Directives & Standards
- After every run or pipeline execution, log updates, Vercel build states, UI logs, errors, and React compile messages into the `logs/execution_logs/` directory.
- Maintain session summaries under `logs/session_summaries/`.
- Maintain session usage telemetry tracking in `logs/token_tracking/session_token_telemetry.md` and `logs/token_tracking/usage_telemetry.md`.
- Format log entries with clear ISO timestamps, task summaries, and status codes.

## Constraints
- Never suppress runtime or compile errors from log output.
- Inspect logs silently before diagnosing issues, then synthesize findings clearly for the user.

## Verification Checklist
- [ ] Log files generated or updated under `logs/execution_logs/`.
- [ ] Session summaries saved under `logs/session_summaries/`.
- [ ] Token usage telemetry calculated and logged under `logs/token_tracking/`.
