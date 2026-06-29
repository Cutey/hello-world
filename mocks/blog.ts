import type { BlogPost } from "@/types/blog";

export const mockPosts: BlogPost[] = [
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router 入门与实践",
    excerpt:
      "从 Pages Router 迁移到 App Router 的核心概念：布局、服务端组件、数据获取与路由组织的最佳实践。",
    date: "2026-03-15",
    tags: ["Next.js", "React"],
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "React 代码编辑器界面",
    content: [
      "Next.js App Router 以 React Server Components 为核心，将路由、布局与数据获取统一在 app 目录下管理。相比 Pages Router，它更强调在服务端完成渲染与数据加载，从而减少客户端 JavaScript 体积。",
      "迁移时首先要理解 layout.tsx 与 page.tsx 的分工：layout 负责共享 UI 与嵌套结构，page 则对应具体路由的内容。通过 loading.tsx 和 error.tsx，可以为每个路由段提供加载与错误边界，提升用户体验。",
      "数据获取方面，Server Component 可以直接 async/await 调用数据库或 API，无需 useEffect 与额外的客户端状态。对于需要交互的部分，再将小组件标记为 \"use client\"，保持客户端代码最小化。",
      "路由组织建议按功能划分目录，配合 generateStaticParams 预渲染静态页面，动态路由则用 [slug] 模式。结合 Metadata API，可以为每篇文章生成独立的 SEO 标题与描述。",
    ],
  },
  {
    slug: "typescript-in-fullstack",
    title: "全栈工程中的 TypeScript 类型设计",
    excerpt:
      "如何在前后端共享类型、减少运行时错误，并在 API 层建立清晰可维护的类型边界。",
    date: "2026-02-28",
    tags: ["TypeScript", "工程化"],
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=80",
    coverImageAlt: "程序员在笔记本上编写代码",
    content: [
      "在全栈项目中，类型不一致是常见的 bug 来源：前端期望的字段名与后端返回的不匹配，枚举值遗漏，或 nullable 处理不当。TypeScript 的价值在于将这些约定前移到编译期发现。",
      "一种常见做法是在 monorepo 中维护 shared 包，导出 API 请求/响应类型、领域模型与常量。前端与后端同时引用，确保接口变更时两边同步编译失败，而不是上线后才暴露问题。",
      "API 层建议用 zod 或类似库做运行时校验，并用 z.infer 推导 TypeScript 类型。这样既有编译期保障，也能防御外部输入。对于数据库层，ORM 生成的类型可与 API 类型做映射，避免直接暴露内部结构。",
      "类型设计应追求渐进式严格：从 any 逐步收紧，优先为边界（API、配置、第三方集成）定义类型，内部实现可以适度灵活。过度复杂的泛型反而降低可维护性，简洁明确的接口定义才是长期收益。",
    ],
  },
];
