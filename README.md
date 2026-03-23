# Gorilla Cookies - gorillacookies.shop

Next.js site with markdown blog system. Deployed on Vercel.

## Setup

```bash
npm install
npm run dev
```

## Adding a Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: "2026-03-23"
category: "Strain Review"
excerpt: "Short description for cards and meta."
keywords: ["keyword1", "keyword2"]
---
```

3. Write content in markdown below the frontmatter
4. Push to GitHub - Vercel auto-deploys

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → Import Project → Select the repo
3. Framework: Next.js (auto-detected)
4. Click Deploy
5. Add custom domain: gorillacookies.shop
   - In Vercel → Project Settings → Domains
   - Add gorillacookies.shop
   - Update DNS: point A record to 76.76.21.21 or CNAME to cname.vercel-dns.com

## Project Structure

```
content/blog/     → Markdown blog posts (add new posts here)
public/images/    → Logo and static images
src/app/          → Next.js pages
src/lib/posts.js  → Markdown reader
src/styles/       → Global CSS
```

## Logo

Place your logo files in `public/images/`:
- `logo.png` - Color logo (no tagline) for nav and hero
