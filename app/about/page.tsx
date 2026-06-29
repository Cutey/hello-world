import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · 晓辉",
  description: "关于晓辉 — 全栈工程师",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:px-16 sm:py-24">
        <div>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← 返回首页
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            关于我
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            我是晓辉，一名全栈工程师，专注于构建从前端到后端、从数据库到部署的完整产品。
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">擅长领域</h2>
          <ul className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <li>前端：React、Vue、TypeScript、Next.js</li>
            <li>后端：Node.js、Python、Go、REST / GraphQL</li>
            <li>基础设施：PostgreSQL、Redis、Docker、AWS</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">工作理念</h2>
          <p className="leading-8 text-zinc-600 dark:text-zinc-400">
            热爱用代码解决问题，追求简洁架构与出色用户体验。相信好的产品需要可靠的技术底座和持续迭代的工程实践。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">联系方式</h2>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="mailto:yihui@example.com"
              className="text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
            >
              yihui@example.com
            </a>
            <a
              href="https://github.com/yihui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
