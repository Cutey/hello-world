import { mockPosts } from "@/mocks/blog";
import type { BlogPost } from "@/types/blog";

export type { BlogPost };

export async function getPosts(): Promise<BlogPost[]> {
  return mockPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return mockPosts.find((post) => post.slug === slug) ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  return mockPosts.map((post) => post.slug);
}
