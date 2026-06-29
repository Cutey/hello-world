import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: `${post.title} · Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:px-16 sm:py-24">
        <div>
          <Button variant="ghost" size="sm" render={<Link href="/blog" />}>
            ← 返回 Blog
          </Button>
        </div>

        <article className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              width={800}
              height={450}
              priority
              className="aspect-video w-full rounded-xl object-cover ring-1 ring-foreground/10"
            />

            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden="true">·</span>
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
              {post.title}
            </h1>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </header>

          <div className="flex flex-col gap-6 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-8 text-zinc-700 dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
