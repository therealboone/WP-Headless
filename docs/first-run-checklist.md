# First Run Checklist (No Existing WP URL)

This is the fastest path from zero to seeing a business website frontend pulling real WordPress content.

## 1) Run Next.js frontend

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

- [http://localhost:3000](http://localhost:3000)

At this point you should see mock data.

## 2) Run local WordPress backend

```bash
docker compose -f docker-compose.wordpress.yml up -d
```

Open:

- [http://localhost:8080](http://localhost:8080)

Complete the WordPress install wizard.

## 3) Create core business pages in WordPress

In WordPress Admin:

- `Pages` -> `Add New`
- create and publish:
  - About (slug: `about`)
  - Services (slug: `services`)
  - Contact (slug: `contact`)

## 4) (Optional) Add blog posts

In WordPress Admin:

- `Posts` -> `Add New`
- publish 2-3 sample posts

## 5) Point Next.js to local WordPress

Update `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_URL=http://localhost:8080
NEXT_PUBLIC_USE_MOCK_WP=false
```

Then restart frontend:

```bash
npm run dev
```

## 6) Verify end to end

- WordPress API checks:
  - [http://localhost:8080/wp-json/wp/v2/pages?slug=about](http://localhost:8080/wp-json/wp/v2/pages?slug=about)
  - [http://localhost:8080/wp-json/wp/v2/posts](http://localhost:8080/wp-json/wp/v2/posts)
- Frontend pages:
  - [http://localhost:3000/about](http://localhost:3000/about)
  - [http://localhost:3000/services](http://localhost:3000/services)
  - [http://localhost:3000/contact](http://localhost:3000/contact)

If those pages show your WordPress content, the headless setup is working.
