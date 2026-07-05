# Dharshini D — Portfolio

A coded rebuild of the Framer portfolio, built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Customize

- **Content**: edit `src/data.js` — profile info, skills, experience, projects, education, certifications.
- **Resume**: replace `public/resume.pdf` with your real resume (keep the filename, or update `resumeUrl` in `src/data.js`).
- **Colors/fonts**: edit `tailwind.config.js` (`ink` / `accent` colors) and the Google Fonts link in `index.html`.
- **Sections**: each section lives in `src/components/` — add/remove/reorder in `src/App.jsx`.

## Build & deploy

```bash
npm run build
```

Outputs to `dist/` — deploy as a static site to Vercel, Netlify, or GitHub Pages.
