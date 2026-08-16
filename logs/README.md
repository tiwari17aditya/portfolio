# Project Logs & Telemetry Hub (`logs/`)

This root directory encapsulates all execution logs, session work summaries, and token tracking telemetry.

## Directory Structure

```
logs/
├── execution_logs/      # Pipeline, build, script, and runtime log files (.log)
├── session_summaries/   # Session accomplishment summaries (session_summary_<YYYY-MM-DD>.md)
└── token_tracking/      # Session token usage & LLM telemetry (session_token_telemetry.md, usage_telemetry.md)
```

## Description & Responsibilities

1. **`execution_logs/`**:
   - Contains all raw and formatted runtime logs, compile outputs, and script outputs.
   - Example files: `log_12_August_2026.log`, `session-2026-07-31-portfolio-updates.log`.

2. **`session_summaries/`**:
   - Stores markdown session logs generated upon task completion or packup workflow execution.
   - Example files: `session_summary_2026-08-08.md`, `session_summary_2026-08-16.md`.

3. **`token_tracking/`**:
   - Records session-by-session input tokens, output tokens, total tokens, model details, and cumulative telemetry data.
   - Core files: `session_token_telemetry.md`, `usage_telemetry.md`.
