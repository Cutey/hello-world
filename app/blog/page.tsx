import type { Metadata } from "next";
import Link from "next/link";
import { BlogList } from "@/components/blog/blog-list";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · 晓辉",
  description: "技术笔记与工程实践",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:px-16 sm:py-24">
        <div>
          <Button variant="ghost" size="sm" render={<Link href="/" />}>
            ← 返回首页
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            Blog
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            记录开发过程中的思考、笔记与实践经验。
          </p>
        </div>

        <BlogList posts={posts} />
      </main>
    </div>
  );
}
