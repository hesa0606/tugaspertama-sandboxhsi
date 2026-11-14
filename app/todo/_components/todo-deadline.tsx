"use client";

import styles from "@/styles/todo.module.css";

function formatDeadline(tanggal: string) {
  const dateObj = new Date(`${tanggal}T00:00:00`);
  return dateObj.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function cekTerlambat(tanggal: string, selesai: boolean) {
  if (selesai) return false;
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);
  const batas = new Date(`${tanggal}T00:00:00`);
  return batas < hariIni;
}

export function TodoDeadline({ deadline, selesai }: { deadline?: string; selesai: boolean }) {
  if (!deadline) return null;

  const terlambat = cekTerlambat(deadline, selesai);

  return (
    <span className={`${styles.deadline} ${terlambat ? styles.overdue : ""}`}>
      {terlambat ? "Terlambat: " : "Batas: "}
      {formatDeadline(deadline)}
    </span>
  );
}
