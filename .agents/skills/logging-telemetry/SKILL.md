---
name: logging-telemetry
description: Execution logging, error recording, compile message outputs, and session token telemetry reporting.
---

# Logging & Telemetry Skill

## Directives & Standards
- After every run or pipeline execution, log updates, Vercel build states, UI logs, errors, and React compile messages into the `logs/` directory.
- Maintain session usage telemetry tracking in `logs/usage_telemetry.md` or dedicated log files.
- Format log entries with clear ISO timestamps, task summaries, and status codes.

## Constraints
- Never suppress runtime or compile errors from log output.
- Inspect logs silently before diagnosing issues, then synthesize findings clearly for the user.

## Verification Checklist
- [ ] Log files generated or updated under `logs/`.
- [ ] Log entries contain accurate timestamps and log levels (INFO/WARN/ERROR).
- [ ] Token usage telemetry is calculated and logged at session completion.
