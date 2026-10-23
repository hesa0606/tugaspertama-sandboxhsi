import { posts } from "../data";
import { notFound } from "next/navigation";

export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);

  const post = posts.find((item) => item.slug === decodedSlug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">{post.content}</p>
    </main>
  );
}
