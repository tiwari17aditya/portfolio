---
name: token-optimization
description: Directives, strategies, and patterns for optimizing token consumption across LLM model invocations, prompt context windowing, payload compression, and token usage telemetry logging.
---

# Token Optimization Skill

## Objectives
Minimize input and output token consumption across LLM interactions, subagent tasks, and system prompts while maintaining high execution quality and precision.

---

## Core Optimization Directives

### 1. Targeted File & Code Windowing
- **Line Range Boundings**: Always pass specific `StartLine` and `EndLine` parameters when reading or viewing files rather than fetching full 800-line blocks.
- **Search Before Read**: Use `grep_search` to pinpoint target symbols, functions, or imports before opening target files.
- **No Redundant Re-summarizations**: Never re-summarize file contents, diffs, or artifacts that have already been written to disk or presented to the user. Use markdown file links (`[file.js](file:///path)`) to reference existing content.

### 2. Payload & Context Pruning
- **Log Snippet Truncation**: When feeding build outputs or error tracebacks to model calls, extract only relevant error lines and 3-5 lines of surrounding context. Strip repetitive warnings or duplicate stack trace frames.
- **Compact Data Formats**: Use compact JSON, CSV, or key-value structures for dataset transfer rather than verbose XML or redundant HTML wrappers.
- **Strip Comments & White Space in Payloads**: Minify scratch scripts, data payloads, and JSON outputs when passed as subagent parameters.

### 3. Response Length & Output Budgeting
- **Structured Output Schemas**: Enforce concise, predictable output formats (e.g. key-value summaries, markdown bullet lists, or strict JSON schemas) to prevent verbose conversational padding.
- **Incremental Tool Chaining**: Avoid making multiple consecutive, redundant tool calls when a single combined command or batch operation achieves the same goal.

### 4. Prompt Caching & Reusability
- **Static Prefix Structuring**: Place invariant system instructions, role guidelines, and router tables at the very top of prompts to maximize prompt cache hits.
- **Template Reusability**: Use parameterized script templates (like `update_portfolio.py`) for recurring tasks instead of generating long imperative code snippets in conversational turns.

### 5. Session Token Telemetry & Auditing
- **Token Accounting**: Track and record `Input Tokens`, `Output Tokens`, `Total Tokens`, and `Model` in `logs/session_token_telemetry.md` for every session.
- **Spike Detection**: Audit sessions where total token count exceeds threshold (>50,000 tokens) to identify inefficient file reads or redundant tool invocation loops and refine prompts accordingly.

---

## Verification Checklist
- [ ] Targeted line range bounds used for all `view_file` calls.
- [ ] No full-file outputs re-summarized in conversation turns.
- [ ] Input and output tokens recorded in `logs/session_token_telemetry.md`.
- [ ] Static system prompts structured to optimize caching.
