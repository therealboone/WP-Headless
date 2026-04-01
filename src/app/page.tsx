import { getRecentPosts } from "@/lib/wordpress";
import styles from "./home.module.scss";

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
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Continuing Education</p>
        <h1 className={styles.title}>Headless WordPress + Next.js</h1>
        <p className={styles.description}>
          This starter is set up for a business website. Core pages come from
          WordPress, while Next.js handles the frontend experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest posts</h2>
        {errorMessage ? (
          <p className={styles.error}>{errorMessage}</p>
        ) : null}
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <h3
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className={styles.excerpt}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <a
                className={styles.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                Read on WordPress
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
