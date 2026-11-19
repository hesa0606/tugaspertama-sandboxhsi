import Link from "next/link";
import { memo } from "react";
import type { Todo } from "@/types/todo";
import { TodoDeadline } from "./todo-deadline";

function TodoItem({
  todo,
  saatDicentang,
  saatDihapus,
}: {
  todo: Todo;
  saatDicentang: (id: number) => void;
  saatDihapus: (id: number) => void;
}) {
  return (
    <li className="flex items-center gap-2 py-2">
      <input type="checkbox" checked={todo.selesai} onChange={() => saatDicentang(todo.id)} />
      <Link href={`/todo/${todo.id}`} className="hover:underline">
        <span className={todo.selesai ? "line-through text-slate-400" : ""}>{todo.teks}</span>
      </Link>
      <TodoDeadline deadline={todo.deadline} selesai={todo.selesai} />
      <button onClick={() => saatDihapus(todo.id)} className="ml-auto">
        ✕
      </button>
    </li>
  );
}

export default memo(TodoItem);
