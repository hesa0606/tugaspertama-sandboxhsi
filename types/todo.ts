export type Todo = {
  id: number;
  teks: string;
  selesai: boolean;
  deadline?: string;
};

export type FilterTodo = "semua" | "belum" | "selesai";
