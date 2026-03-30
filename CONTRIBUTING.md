# Contributing Guide

This repo uses a simple branch + PR workflow to keep `main` stable.

## Branch naming

Create short-lived branches from `main`:

- `feat/<short-description>` for new features
- `fix/<short-description>` for bug fixes
- `chore/<short-description>` for maintenance/tooling/docs

Examples:

- `feat/homepage-hero`
- `fix/wp-page-slug-fallback`
- `chore/update-readme-links`

## Commit style

- Keep commits focused and small.
- Use present-tense, action-first messages.
- Prefer one logical change per commit.

Examples:

- `Add business page route rendering`
- `Fix WordPress REST fallback handling`
- `Update local setup documentation`

## Pull request expectations

- Open a PR into `main`.
- Keep PR scope narrow and testable.
- Include:
  - what changed
  - why it changed
  - how to test it

Before opening a PR, run:

```bash
npm run lint
```

## Environment and secrets

- Do not commit `.env.local`.
- Keep `.env.example` up to date when env variables change.
- Store production secrets in hosting provider env settings.
