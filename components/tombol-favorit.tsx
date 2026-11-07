"use client";

import { useFavorit } from "@/context/favorit-context";

export function TombolFavorit({ slug }: { slug: string }) {
  const { daftar, ubahFavorit } = useFavorit();
  const sudahDisimpan = daftar.includes(slug);

  return (
    <button onClick={() => ubahFavorit(slug)}>
      {sudahDisimpan ? "★ Tersimpan" : "☆ Simpan ke favorit"}
    </button>
  );
}