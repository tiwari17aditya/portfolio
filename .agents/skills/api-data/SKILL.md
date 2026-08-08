---
name: api-data
description: Rules for managing data fetching, GitHub REST/GraphQL integrations, Twitter embed data, and static portfolio schema in fetch.js and portfolio.js.
---

# API & Data Skill

## Directives & Standards
- Maintain strict typing and schema alignment for external API responses in `fetch.js` and `portfolio.js`.
- Always handle rate limits, network timeouts, and missing API responses gracefully using fallback cached data.
- Read environment variables securely from `.env` without hardcoding sensitive API tokens.

## Constraints
- Never return empty dummy fallbacks without logging the underlying network failure.
- Do not mutate exported static data definitions at runtime.

## Verification Checklist
- [ ] `node fetch.js` executes without throwing unhandled promise rejections.
- [ ] Fetched repository/profile data accurately matches `portfolio.js` schema requirements.
- [ ] Fallback dataset is accessible if offline or rate-limited.
