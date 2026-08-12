# Version Tracking

Current Project Version: **v1.5.7**  
Release Date: **2026-08-12**  
Repository: [portfolio](https://github.com/tiwari17aditya/portfolio)

---

## Release History

### v1.5.7 (2026-08-12)
- **Vercel Asset Path Fix**: Changed `homepage` in `package.json` from the GitHub Pages URL to `/` so CRA builds root-relative asset paths. This fixes the profile photo, fonts, and all JS/CSS chunks being 404 on Vercel.
- **Simplified `vercel.json`**: Removed redundant `PUBLIC_URL` override from build command.

### v1.5.6 (2026-08-12)
- **Service Worker Fix**: Reverted `serviceWorker.register()` to `unregister()` — no service-worker.js served on Vercel root scope, causing a 404 on every page load.
- **Blogs.json Fix**: Set `displayMediumBlogs: false` to prevent 404 fetch to `/blogs.json` (no Medium feed configured). Added null-guard in `Blogs.js` to prevent TypeError crash on undefined response.
- **Font Format Fix**: Corrected Montserrat `@font-face` format from `"woff"` to `"truetype"` for the `.ttf` file.

### v1.5.5 (2026-08-12)
- **Certifications Pruning**: Kept only the 4 primary specialization certificates (ML, GenAI Fundamentals, Linux Bash, and Python for Everybody Specialization). Removed individual course certificates.
- **Greeting Photo Aspect Ratio**: Altered profile image styles to use a soft-rounded square border (`border-radius: 24px` and dynamic height) to show the full upper body without cropping.

### v1.5.4 (2026-08-12)
- **Profile Photo Integration**: Replaced vector illustrations in the greeting section with a personal profile photo card avatar.
- **Skills Renaming**: Renamed the "Proficiency" section header to "Technical Skills".
- **Three Python Course Certificates**: Added certificates for Using Python to Access Web Data, Python Data Structures, and Programming for Everybody, including verify links and local PDF views.
- **Certificate Provider Annotations**: Appended `| Provider: Coursera` to all Coursera-issued certifications.

### v1.5.3 (2026-08-12)
- **Proficiency Card Showcase Grid**: Replaced progress bars with interactive card layout, demonstrating 7 styles (Glassmorphism, Gradient Border, Neumorphism, Glow, Slide-Up, Cyberpunk Grid, and Pulse Glow).
- **Service Worker PWA Registration**: Registered the service worker in React index, enabling offline precaching and PWA installation for mobile browsers.

### v1.5.2 (2026-08-12)
- **Interactive Proficiency Section**: Redesigned the skill progress meters with rounded gradient bars, load slide-in animations, glassmorphism background tracks, and responsive hover-glow translation transitions.

### v1.5.1 (2026-08-12)
- **Coursera Certificates & Links**: Added verification links and local PDF files for Machine Learning, Generative AI Fundamentals, and Linux Bash Scripting specializations.
- **New Logo Assets**: Generated and integrated custom logo images for IBM and EDUCBA.
- **Root Cleanup**: Removed temporary PDF certificate files from the workspace root directory.

### v1.5.0 (2026-08-12)
- **Resume Replacements**: Replaced the default template resume PDF with the actual personal resume (`Resume_Adityatiwari.pdf`).
- **Education Logos Update**: Overwrote the placeholder institutional logos with custom school and college logos.
- **Section Customization**: Personalized work experience, education results, profile summaries, and technical skills.
- **Achievements and Certifications**: Replaced sample achievements with Stanford and University of Michigan specializations, including generated custom logo graphics.
- **Placeholder Hiding**: Toggle display off for Blogs, Talks, Podcasts, Open Source duplication, and Twitter widgets.
