import Link from "next/link";
import { posts } from "./data";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
