import { type ReactNode } from "react";

export default function FloatingCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 text-neutral-950 shadow-[0_8px_24px_rgba(7,30,95,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}
