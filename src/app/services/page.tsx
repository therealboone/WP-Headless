import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";
import styles from "./services.module.scss";

export const metadata = {
  title: "Services | Headless WordPress Site",
};

export default async function ServicesPage() {
  const page = await getPageBySlug("services");

  if (!page) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className={`${styles.content} wp-content`}
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
