---
name: ui-components
description: Guidelines, design standards, SASS styling, and UI component development rules for portfolio frontend.
---

# UI Components Skill

## Directives & Standards
- Maintain visual excellence with rich aesthetics: modern typography, curated color palettes, glassmorphism, and smooth micro-animations.
- Use modular SASS/CSS files co-located or linked with React components (`developerFolio/src`).
- Ensure layout responsiveness across standard breakpoints without arbitrary static offset math.
- Keep transient component state local rather than mutating shared/global objects.

## Constraints
- Do NOT use Tailwind CSS unless explicitly requested. Use Vanilla CSS / SASS.
- Avoid generic browser default styling or unstyled components.
- Do NOT use placeholder images; generate working demonstration assets if needed.

## Verification Checklist
- [ ] Component compiles without React syntax or JSX errors.
- [ ] Responsive styles render cleanly on desktop and mobile viewports.
- [ ] No unhandled prop types or console warnings.
