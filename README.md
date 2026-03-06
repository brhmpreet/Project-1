# Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Ant Design**.

## Features

- Responsive design that works on desktop, tablet, and mobile
- Smooth scroll navigation with sticky header
- Hero section with call-to-action
- About Me with stats highlights
- Skills with animated progress bars
- Filterable project cards
- Experience timeline
- Contact form
- Social media links in footer

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customize

All portfolio content lives in a single file — edit `src/data/portfolio.js` to update:

- Personal info (name, title, tagline, avatar)
- About Me bio and highlights
- Skills and proficiency levels
- Projects with images, tags, and links
- Work experience entries
- Social media links

No need to touch any component files to personalize the site.

## Deploy to Vercel

1. Push this project to a GitHub/GitLab repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Vite — no configuration needed.
4. Click **Deploy**.

## Deploy to Netlify

1. Push this project to a GitHub/GitLab repository.
2. Go to [netlify.com](https://netlify.com) and import the repository.
3. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

## Tech Stack

- [React 19](https://react.dev)
- [Vite 7](https://vite.dev)
- [Ant Design 6](https://ant.design)
- [Ant Design Icons](https://ant.design/components/icon)
