import { posts } from "../data";
import { LikeButton } from "./_components/like-button";
import { CommentButton } from "./_components/comment-button";
import { TombolFavorit } from "@/components/tombol-favorit";
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "16px 0" }}>
        <LikeButton slug={post.slug} />
        <CommentButton slug={post.slug} />
        <TombolFavorit slug={slug} />
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed">{post.content}</p>
    </main>
  );
}
