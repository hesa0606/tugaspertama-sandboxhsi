"use client";

interface CommentListProps {
  daftarKomentar?: string[];
}

export function CommentList({ daftarKomentar = [] }: CommentListProps) {
  return (
    <ul className="mt-2 space-y-1">
      {daftarKomentar.map((item, idx) => (
        <li key={idx} className="text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
}
