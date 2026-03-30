# Headless WordPress + Next.js

This repository is the frontend for a headless WordPress business website built with Next.js (App Router).

## Local setup (frontend)

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Edit `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
NEXT_PUBLIC_USE_MOCK_WP=true
```

4. Start the dev server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## WordPress requirements

- Ensure your WordPress site is reachable from local development.
- REST API must be enabled (`/wp-json/wp/v2/posts` should return JSON).
- If your WordPress instance is private, you'll need authenticated API requests (next step after initial scaffold).

## Project structure

- `src/app/page.tsx`: Home page that fetches recent WordPress posts.
- `src/app/about/page.tsx`: About page pulled from WordPress page slug `about`.
- `src/app/services/page.tsx`: Services page pulled from WordPress page slug `services`.
- `src/app/contact/page.tsx`: Contact page pulled from WordPress page slug `contact`.
- `src/lib/wordpress.ts`: Shared WordPress REST API helpers.
- `.env.example`: Required environment variables.
- `docs/wordpress-setup.md`: WordPress setup for a business site.

## WordPress backend implementation

For backend setup and first-time full-stack run:

- `docs/wordpress-setup.md`
- `docs/first-run-checklist.md`
- `CONTRIBUTING.md` (branch and PR protocol)

## WordPress plugin included
No custom plugin is required for the base business-site setup. The frontend uses core WordPress REST endpoints (`pages` and `posts`).

## Local WordPress (Docker)

If you do not have a WordPress URL yet:

```bash
docker compose -f docker-compose.wordpress.yml up -d
```

Then open WordPress at [http://localhost:8080](http://localhost:8080).

## Deploying to Vercel

1. Import this repository into Vercel.
2. Add `NEXT_PUBLIC_WORDPRESS_URL` in Vercel Project Settings -> Environment Variables.
3. Deploy (preview and production environments can use different WordPress URLs if needed).
