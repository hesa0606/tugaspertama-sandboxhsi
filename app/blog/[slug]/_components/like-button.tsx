"use client";

import { useEffect, useState } from "react";

export function LikeButton({ slug }: { slug: string }) {
  const [jumlahSuka, setJumlahSuka] = useState(0);

  useEffect(() => {
    const simpanan = localStorage.getItem(`suka-${slug}`);
    const jumlah = simpanan === null ? 0 : Number(simpanan);

    requestAnimationFrame(() => {
      setJumlahSuka(jumlah);
    });
  }, [slug]);

  function tambahSuka() {
    const jumlahBaru = jumlahSuka + 1;
    setJumlahSuka(jumlahBaru);
    localStorage.setItem(`suka-${slug}`, String(jumlahBaru));
  }

  return (
    <button
      onClick={tambahSuka}
      className="flex items-center gap-1.5 px-3 py-1 hover:bg-gray-100 transition cursor-pointer"
    >
      👍 {jumlahSuka}
    </button>
  );
}
