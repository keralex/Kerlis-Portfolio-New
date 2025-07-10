import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavLink({ href, children, isActive, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-purple-600 dark:text-purple-400"
          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export { NavLink };
