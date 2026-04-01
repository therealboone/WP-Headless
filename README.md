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

## Workflow: local development, GitHub, and Vercel

This repo on GitHub: [`therealboone/WP-Headless`](https://github.com/therealboone/WP-Headless) (`origin`). You may also have a team remote (e.g. `teamcornett/headlesswordpress`). **Connect Vercel to the same GitHub repository you push deployable code to.**

1. **Local** — Use `.env.local` (gitignored) for WordPress URL and mock flags.
2. **GitHub** — Push branches; Vercel builds on push when the project is linked to that repo.
3. **Branches** — **Production** usually tracks `main` (set in Vercel **Settings → Git**). **Preview** deploys for other branches and pull requests.
4. **Vercel env** — Dashboard **Settings → Environment Variables** only; not `.env.local`. Set Production / Preview / (optional) Development scopes there.
5. **Optional** — `vercel link` in this folder, then `vercel env pull .env.local` to sync dashboard vars locally.

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

## Best Git Protocol (PR Workflow)

1. Create a feature branch from `main` (example: `feat/scss-architecture`).
2. Commit focused changes with clear commit messages.
3. Push branch to GitHub and open a pull request into `main`.
4. Verify PR includes summary, why, and test plan (see PR template).
5. Review files changed and confirm checks pass.
6. Merge PR into `main` when approved.
7. Delete the feature branch after merge.
8. Sync local before new work:

```bash
git checkout main
git pull
```

## Deploying to Vercel

1. [Vercel](https://vercel.com) → **Add New… → Project** → import the **GitHub** repo you use for this app (or **Settings → Git** on an existing project).
2. **Settings → Environment Variables** — add for **Production**, **Preview**, and optionally **Development**:
   - **`NEXT_PUBLIC_WORDPRESS_URL`** — WordPress site base URL (no `/wp-json`; the app adds that path). Use staging for Preview and production WP for Production when you split them.
   - **`NEXT_PUBLIC_USE_MOCK_WP`** — `false` for real API (typical on Vercel); `true` only for mock data.
3. **Settings → Git** — production branch (usually `main`).
4. Push to GitHub to deploy. After changing env vars, trigger a new deployment so builds pick them up.

Until you have a separate production WordPress host, the same `NEXT_PUBLIC_WORDPRESS_URL` for Preview and Production is fine.
