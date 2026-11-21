import type { Todo } from "@/types/todo";
import type { DaftarTodos } from "@/types/daftar-tugas";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://nextjs-track-api.vercel.app";

export async function bacaTodos(owner: string): Promise<Todo[]> {
  const res = await fetch(`${API_URL}/api/todos?owner=${owner}`);

  if (!res.ok) {
    throw new Error(`Server menjawab ${res.status}`);
  }

  const data: DaftarTodos = await res.json();
  return data.todos;
}