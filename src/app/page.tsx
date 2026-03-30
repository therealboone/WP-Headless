import Link from "next/link";
import { getRecentPosts } from "@/lib/wordpress";

export default async function Home() {
  let posts: Awaited<ReturnType<typeof getRecentPosts>> = [];
  let errorMessage = "";

  try {
    posts = await getRecentPosts();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Could not load WordPress posts.";
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <section className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Continuing Education
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Headless WordPress + Next.js
        </h1>
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-300">
          This starter is set up for a business website. Core pages come from
          WordPress, while Next.js handles the frontend experience.
        </p>
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/about" className="underline underline-offset-4">
            About
          </Link>
          <Link href="/services" className="underline underline-offset-4">
            Services
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">Latest posts</h2>
        {errorMessage ? (
          <p className="rounded-md border border-amber-500/40 bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            {errorMessage}
          </p>
        ) : null}
        <div className="grid gap-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-black/10 p-5 dark:border-white/15"
            >
              <h3
                className="mb-2 text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className="mb-3 text-sm text-neutral-600 dark:text-neutral-300"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link
                className="text-sm font-medium underline underline-offset-4"
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                Read on WordPress
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
