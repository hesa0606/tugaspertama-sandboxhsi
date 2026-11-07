"use client";

import type { FormEvent } from "react";

interface CommentFormProps {
  teks: string;
  onChangeTeks: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function CommentForm({ teks, onChangeTeks, onSubmit }: CommentFormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-2 flex gap-[1.5px]">
      <input
        type="text"
        value={teks}
        onChange={(e) => onChangeTeks(e.target.value)}
        placeholder="Tulis komentar..."
        aria-label="Tulis komentar"
        className="flex items-center gap-1.5 text-grey-800 hover:opacity-75"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Kirim
      </button>
    </form>
  );
}
