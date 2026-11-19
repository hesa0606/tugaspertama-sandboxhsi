"use client";

import { useState, type FormEvent } from "react";
import styles from "@/styles/todo.module.css";

export default function TodoForm({
  saatTambah,
}: {
  saatTambah: (teks: string, deadline?: string) => void;
}) {
  const [teks, setTeks] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const teksBersih = teks.trim();
    if (!teksBersih) return;

    saatTambah(teksBersih, deadline || undefined);
    setTeks("");
    setDeadline("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Tugas baru..."
        value={teks}
        onChange={(e) => setTeks(e.target.value)}
      />
      <input
        className={styles.dateInput}
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        aria-label="Tenggat waktu"
      />
      <button className={styles.button} type="submit">
        Tambah
      </button>
    </form>
  );
}
