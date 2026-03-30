# WordPress Backend Setup (Business Site)

This project is now set up as a business website frontend.

It uses WordPress core REST endpoints:

- `wp/v2/pages` for `about`, `services`, `contact`
- `wp/v2/posts` for latest posts on the homepage

## Option A: Local WordPress with Docker (recommended)

Use this when you do not have a live WordPress URL yet.

1. Start WordPress + MariaDB:

```bash
docker compose -f docker-compose.wordpress.yml up -d
```

2. Open WordPress setup:

- [http://localhost:8080](http://localhost:8080)

3. Complete initial install wizard (site title, admin username/password).

4. Create business pages in WordPress Admin:

- `Pages` -> `Add New`
- Create and publish:
  - `About` (slug: `about`)
  - `Services` (slug: `services`)
  - `Contact` (slug: `contact`)

5. (Optional) create blog posts:

- `Posts` -> `Add New`
- Publish 2-3 posts to populate homepage latest posts

6. Confirm APIs work:

- [http://localhost:8080/wp-json/wp/v2/pages?slug=about](http://localhost:8080/wp-json/wp/v2/pages?slug=about)
- [http://localhost:8080/wp-json/wp/v2/posts](http://localhost:8080/wp-json/wp/v2/posts)

## Option B: Existing/live WordPress

If you already have WordPress hosting, create the same pages and point the frontend URL to that site.

## Connect Next.js to WordPress

In `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_URL=http://localhost:8080
NEXT_PUBLIC_USE_MOCK_WP=false
```

Restart Next.js after changing env values.
