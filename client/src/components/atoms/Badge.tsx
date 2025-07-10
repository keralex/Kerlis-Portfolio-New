import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
}

function Badge({ className, variant = "primary", size = "md", ...props }: BadgeProps) {
  const variants = {
    primary: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    secondary: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
    outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
