import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/types/blog";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <BlogCard post={post} />
        </li>
      ))}
    </ul>
  );
}
