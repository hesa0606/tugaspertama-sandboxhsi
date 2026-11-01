"use client";

import { useEffect, useState } from "react";

export default function CommentButton({ slug }: { slug: string }) {
  const [daftarKomentar, setDaftarKomentar] = useState<string[]>([]);
  const [teks, setTeks] = useState("");
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    const simpanan = localStorage.getItem(`komentar-${slug}`);
    if (simpanan) {
      const parsed = JSON.parse(simpanan);
      setDaftarKomentar(parsed);
    }
  }, [slug]);

  function tambahKomentar() {
    if (!teks.trim()) return;
    const baru = [...daftarKomentar, teks];
    setDaftarKomentar(baru);
    localStorage.setItem(`komentar-${slug}`, JSON.stringify(baru));
    setTeks("");
  }

  return (
    <div>
      <button onClick={() => setBuka(!buka)} className="rounded-lg border px-4 py-2">
        💬 {daftarKomentar.length}
      </button>

      {buka && (
        <div style={{ marginTop: "8px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <input
              value={teks}
              onChange={(e) => setTeks(e.target.value)}
              placeholder="Tulis komentar..."
            />
            <button onClick={tambahKomentar}>Kirim</button>
          </div>
          <ul>
            {daftarKomentar.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
