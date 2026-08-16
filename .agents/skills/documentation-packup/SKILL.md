---
name: documentation-packup
description: URL tracker maintenance, documentation synchronization, session token telemetry tracking, version management, and Git packup workflow execution.
---

# Documentation & Packup Skill

## Directives & Standards

### 1. Centralized Documentation (`docs/`)
- All project documentation files MUST reside under the `docs/` directory (`docs/README.md`, `docs/VERSION.md`, `docs/CHANGELOG.md`, `docs/URL_TRACKER.md`, `docs/TECH_STACK.md`, `docs/ENHANCEMENTS.md`).
- Root `README.md` serves as a concise portal pointing directly to `docs/README.md`.
- Maintain `docs/VERSION.md` for semantic version tracking (`vX.Y.Z`).

### 2. Centralized Logging & Telemetry (`logs/`)
- Record session usage and token metrics in `logs/token_tracking/session_token_telemetry.md` and `logs/token_tracking/usage_telemetry.md`.
- Generate a session summary log file `logs/session_summaries/session_summary_<YYYY-MM-DD>.md` for each work session detailing all changes, additions, and refactorings completed during the session.

### 3. Packup Workflow (When "packup" is triggered)
When the user requests "packup", execute the following sequence:

1. **Update Logs**:
   - Write session summary to `logs/session_summaries/session_summary_<YYYY-MM-DD>.md`.
   - Log input, output, and total token usage in `logs/token_tracking/session_token_telemetry.md` and `logs/token_tracking/usage_telemetry.md`.

2. **Synchronize Docs**:
   - Ensure all documentation files are up to date and situated inside `docs/`.
   - Increment/update release version in `docs/VERSION.md`.
   - Append release highlights to `docs/CHANGELOG.md`.
   - Verify links in `docs/URL_TRACKER.md`.

3. **Git & GitHub Operations**:
   - Stage all workspace modifications (`git add .`).
   - Commit with a detailed, conventional commit message detailing session accomplishments (`git commit -m "..."`).
   - Push committed changes to the GitHub remote repository (`git push`).
   - Ensure `git status` reports a clean working tree.

4. **Response Telemetry**:
   - Report token usage telemetry and Git commit status clearly in the final turn output.

## Constraints
- Never commit broken or unverified code during the packup workflow.
- Ensure all links in `docs/URL_TRACKER.md` use proper Markdown format.
- Keep all documentation strictly organized within `docs/`.

## Verification Checklist
- [ ] `logs/session_summary_<YYYY-MM-DD>.md` generated with session change summary.
- [ ] `logs/session_token_telemetry.md` updated with session token count.
- [ ] `docs/VERSION.md` and `docs/CHANGELOG.md` updated.
- [ ] `docs/URL_TRACKER.md` updated with new URLs.
- [ ] `git add .`, `git commit`, and `git push` executed cleanly.
