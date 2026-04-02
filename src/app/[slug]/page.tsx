import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
};

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, "").trim();
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${stripTags(page.title.rendered)} | Headless WordPress Site`,
    description: stripTags(page.excerpt.rendered) || undefined,
  };
}

export default async function DynamicWordPressPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1
        className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className="wp-content prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
