// src/utils/date-format.ts (sesuaikan lokasi foldernya)

export function formatTanggal(nilai: string | null): string {
  if (!nilai) return "Tanpa tenggat";

  const tanggal = new Date(`${nilai}T00:00:00`);
  if (Number.isNaN(tanggal.getTime())) return nilai;

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(tanggal);
}

export function formatWaktu(nilai: string): string {
  const tanggal = new Date(nilai);
  if (Number.isNaN(tanggal.getTime())) return nilai;

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(tanggal);
}

export function cekTerlambat(nilai: string, selesai: boolean): boolean {
  if (selesai) return false;
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);
  const batas = new Date(`${nilai}T00:00:00`);
  return batas < hariIni;
}
