import type { FilterTodo, Todo } from "../types/todo";

export const TODO_STORAGE_KEY = "todos";

export const TODO_AWAL: Todo[] = [
  { id: 1, teks: "Belajar Next.js", selesai: false },
  { id: 2, teks: "Menyelesaikan latihan", selesai: true },
];

export const PILIHAN_FILTER: { nilai: FilterTodo; label: string }[] = [
  { nilai: "semua", label: "Semua" },
  { nilai: "belum", label: "Belum Selesai" },
  { nilai: "selesai", label: "Selesai" },
];
