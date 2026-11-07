"use client";

import { useState, useEffect, FormEvent } from "react";
import { CommentTrigger } from "./comment-trigger";
import { CommentForm } from "./comment-form";
import { CommentList } from "./comment-list";

export function CommentButton({ slug }: { slug: string }) {
  const [daftarKomentar, setDaftarKomentar] = useState<string[]>([]);
  const [teks, setTeks] = useState("");
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    const simpanan = localStorage.getItem(`komentar-${slug}`);
    if (simpanan) {
      try {
        const parsed = JSON.parse(simpanan);
        if (Array.isArray(parsed)) {
          requestAnimationFrame(() => {
            setDaftarKomentar(parsed);
          });
        }
      } catch {}
    }
  }, [slug]);

  const tambahKomentar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bersih = teks.trim();
    if (!bersih) return;

    const baru = [...daftarKomentar, bersih];
    setDaftarKomentar(baru);
    setTeks("");

    try {
      localStorage.setItem(`komentar-${slug}`, JSON.stringify(baru));
    } catch (err) {
      console.error("Gagal menyimpan komentar:", err);
    }
  };

  return (
    <div>
      <CommentTrigger count={daftarKomentar.length} isOpen={buka} onToggle={() => setBuka(!buka)} />

      {buka && (
        <>
          <CommentForm teks={teks} onChangeTeks={setTeks} onSubmit={tambahKomentar} />
          <CommentList daftarKomentar={daftarKomentar} />
        </>
      )}
    </div>
  );
}
