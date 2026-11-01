import Link from "next/link";
import { posts } from "./data";
import DaftarTulisan from "./daftar-tulisan";

export default function BlogPage() {
  const daftarSlug = posts.map((post) => post.slug);

  return (
    <main className="mx-auto max-w-2xl my-8 p-6 bg-white/95 rounded-xl shadow-md backdrop-blur-sm">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <DaftarTulisan daftar={daftarSlug} />
    </main>
  );
}
