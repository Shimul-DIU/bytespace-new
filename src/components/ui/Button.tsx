import { type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const styles = {
    primary:
      "bg-secondary-500 text-neutral-950 hover:bg-secondary-400 px-6 py-3.5",
    ghost: "text-white/80 hover:text-white px-2 py-2",
  }[variant];

  return (
    <button
      className={`label-m rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${styles} ${className}`}
      {...props}
    />
  );
}
