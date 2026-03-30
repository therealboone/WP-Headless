import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";

export const metadata = {
  title: "Services | Headless WordPress Site",
};

export default async function ServicesPage() {
  const page = await getPageBySlug("services");

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-12">
      <h1
        className="mb-4 text-4xl font-semibold"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className="prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
