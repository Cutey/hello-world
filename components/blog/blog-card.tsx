import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/types/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card>
      <Image
        src={post.coverImage}
        alt={post.coverImageAlt}
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <ul className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <CardDescription className="leading-7">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" render={<Link href={`/blog/${post.slug}`} />}>
          阅读全文 →
        </Button>
      </CardFooter>
    </Card>
  );
}
