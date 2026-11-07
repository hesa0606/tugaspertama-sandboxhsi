"use client";

interface CommentTriggerProps {
  count: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function CommentTrigger({ count, isOpen, onToggle }: CommentTriggerProps) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex items-center gap-1.5 px-3 py-1 hover:bg-gray-100 transition cursor-pointer"
    >
      <span>💬</span>
      <span className="font-semibold text-sm">{count}</span>
    </button>
  );
}
