"use client";

import styles from "@/styles/todo.module.css";
import { formatTanggal, cekTerlambat } from "@/lib/date-format";

export function TodoDeadline({ deadline, selesai }: { deadline?: string; selesai: boolean }) {
  if (!deadline) return null;

  const terlambat = cekTerlambat(deadline, selesai);

  return (
    <span className={`${styles.deadline} ${terlambat ? styles.overdue : ""}`}>
      {terlambat ? "Terlambat: " : "Batas: "}
      {formatTanggal(deadline)}
    </span>
  );
}
