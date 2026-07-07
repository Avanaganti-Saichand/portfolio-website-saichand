# Saichand Avanaganti — Portfolio

Personal portfolio of **Saichand Avanaganti**, Senior Software Engineer — Mobile · Web · Applied AI.

Live sections: interactive phone mockup (Mobile UI / Native Bridge / AI Backend), experience timeline, categorized skills, project case studies, published research, and contact.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — custom dark theme
- **Framer Motion** — scroll reveals, 3D tilt, screen transitions
- Single source of truth: all content lives in [`data/resume.ts`](data/resume.ts)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Optimized for Vercel — push to `main` and import the repo.

## Editing content

Everything (experience, skills, projects, publications, education, socials) is data-driven from `data/resume.ts`. Update that one file to update the site.
