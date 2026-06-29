import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 · 页面未找到",
  description: "您访问的页面不存在",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-16 sm:py-24">
        <p className="text-8xl font-semibold tracking-tighter text-zinc-200 dark:text-zinc-800 sm:text-9xl">
          404
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-3xl">
            页面未找到
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            抱歉，您访问的页面不存在或已被移除。请检查链接是否正确，或返回首页继续浏览。
          </p>
        </div> 

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
          >
            返回首页
          </Link>
          <Link
            href="/about"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
          >
            关于我
          </Link>
        </div>
      </main>
    </div>
  );
}
